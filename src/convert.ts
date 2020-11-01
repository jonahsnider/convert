import {data, length, mass, pressure, temperature, time, volume} from './conversions';
import {Unit} from './types/common';
import {AllUnits, Converter} from './types/units';
import {invariant, strings} from './util';

const families = [data, length, mass, pressure, temperature, time, volume];

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
function conversionRatio(units: Record<string, Unit>, desiredConversion: Readonly<string>) {
	const found = units[desiredConversion];

	invariant(found, `No conversion ratio could be found for ${desiredConversion}`);

	return {[strings.difference]: found[strings.difference] ?? 0, [strings.ratio]: found[strings.ratio]};
}

/**
 * Convert from one unit to another.
 * @example convert(360).from('seconds').to('minutes');
 */
function _convert(quantity: number | bigint): Converter<typeof quantity> {
	return {
		from: (from: AllUnits) => {
			const units = families.find(family => (family as Record<AllUnits, Unit>)[from]);

			invariant(units, `No conversion could be found for ${from}`);

			const fromConversion = conversionRatio(units, from);

			return {
				to: (to: typeof from) => {
					if (to === from) {
						return quantity;
					}

					const toConversion = conversionRatio(units, to);

					const combinedRatio = fromConversion[strings.ratio] / toConversion[strings.ratio];

					if (typeof quantity === 'bigint') {
						let bigintValue: bigint | undefined;

						if (__DEV__) {
							try {
								// Note: BigInt support only works when you are converting integers (obviously)
								// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

								bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromConversion[strings.difference]) - BigInt(toConversion[strings.difference]));
							} catch (error) {
								invariant(false, `Conversion for ${from} to ${to} can't be expressed as an integer`);
							}
						} else {
							bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromConversion[strings.difference]) - BigInt(toConversion[strings.difference]));
						}

						return bigintValue;
					}

					return quantity * combinedRatio + (fromConversion[strings.difference] - toConversion[strings.difference]);
				}
			};
		}
	};
}

// @ts-expect-error
export const convert: OverloadedConverter = _convert;
