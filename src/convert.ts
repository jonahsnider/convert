// If you want to add custom types, just add more `Unit` shaped objects to this array
import * as conversions from './conversions';
import {Unit} from './types/common';
import {AllUnits, Converter} from './types/units';
import {invariant} from './util';

const families = Object.values(conversions);

type OverloadedConverter = ((quantity: number) => Converter<number>) & ((quantity: bigint) => Converter<bigint>);

/**
 * Get the conversion ratio to the base unit of a `Unit`
 * @param units The unit to get the conversion ratio from
 * @param desiredConversion The conversion you are looking for
 *
 * @example
 * ```ts
 * conversionRatio(time, 'minutes');
 * // 1 / 60
 * ```
 */
function conversionRatio(units: Record<string, Unit>, desiredConversion: Readonly<string>): {ratio: number; difference: number} {
	const found = units[desiredConversion];

	invariant(found, `No conversion ratio could be found for ${desiredConversion}`);

	return {difference: found.difference ?? 0, ratio: found.ratio};
}

/**
 * Convert from one unit to another.
 * @example convert(360).from('seconds').to('minutes');
 */
function convert(quantity: number | bigint): Converter<typeof quantity> {
	return {
		from: (fromUnit: AllUnits) => {
			const from = fromUnit;

			const units = families.find(family => (family as Record<AllUnits, Unit>)[from]);

			invariant(units, `No conversion could be found for ${from}`);

			const fromConversion = conversionRatio(units, from);

			return {
				to: (toUnit: typeof from) => {
					const to = toUnit;

					if (to === from) {
						return quantity;
					}

					const toConversion = conversionRatio(units, to);

					const combinedRatio = fromConversion.ratio / toConversion.ratio;

					if (typeof quantity === 'bigint') {
						let bigintValue: bigint | undefined;

						if (__DEV__) {
							try {
								// Note: BigInt support only works when you are converting integers (obviously)
								// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

								bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromConversion.difference) - BigInt(toConversion.difference));
							} catch (error) {
								invariant(false, `Conversion for ${from} to ${to} can't be expressed as an integer`);
							}
						} else {
							bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromConversion.difference) - BigInt(toConversion.difference));
						}

						return bigintValue;
					}

					return quantity * combinedRatio + (fromConversion.difference - toConversion.difference);
				}
			};
		}
	};
}

// @ts-expect-error
const typedConvert: OverloadedConverter = convert;

export {typedConvert as convert};
