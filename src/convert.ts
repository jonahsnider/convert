import {Unit} from './types/common';
import {AllUnits, Converter} from './types/units';
import {unitFamilies} from './unitFamilies';
import {invariant} from './util';

// If you want to add custom types, just add more `Unit` shaped objects to this array
const families = Object.values(unitFamilies);

type OverloadedConverter = ((quantity: number) => Converter<number>) &
	((quantity: bigint) => Converter<bigint>) &
	((quantity: bigint | number) => Converter<bigint | number>);

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
function conversionRatio(units: readonly Unit[], desiredConversion: Readonly<string>): {ratio: number; difference: number} {
	const found = units.find(conversion => conversion.aliases.includes(desiredConversion));

	invariant(found !== undefined, `No conversion could be found for ${desiredConversion}`);

	return {difference: found.difference ?? 0, ratio: found.ratio};
}

/**
 * Convert from one unit to another.
 * @example convert(360).from('seconds').to('minutes');
 */
function convert(quantity: number | bigint): Converter<typeof quantity> {
	return {
		from: (fromUnit: AllUnits) => {
			let from: typeof fromUnit;
			let to: typeof fromUnit;

			from = fromUnit;

			// @ts-expect-error
			const _units = families.find(family => family.find((conversion: Unit) => conversion.aliases.includes(from)));

			invariant(_units, `No conversion could be found for ${from}`);

			const fromConversion = conversionRatio(_units, from);

			return {
				to: (toUnit: typeof from) => {
					to = toUnit;

					if (to === from) {
						return quantity;
					}

					const toConversion = conversionRatio(_units, to);

					const combinedRatio =  toConversion.ratio / fromConversion.ratio;

					if (typeof quantity === 'bigint') {
						let bigintValue: bigint | undefined;

						if (__DEV__) {
							try {
								// Note: BigInt support only works when you are converting integers (obviously)
								// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

								bigintValue = (quantity + BigInt(fromConversion.difference)) * BigInt(combinedRatio) - BigInt(toConversion.difference);
							} catch (error) {
								invariant(bigintValue !== undefined, `Conversion for ${from} to ${to} can't be expressed as an integer`);
							}
						} else {
							bigintValue = quantity * BigInt(combinedRatio);
						}

						return bigintValue;
					}

					const precalculatedDiff = (toConversion.difference / toConversion.ratio) - (fromConversion.difference / fromConversion.ratio) * fromConversion.ratio * toConversion.ratio;
					
					return (quantity + Math.min(precalculatedDiff,0) ) * combinedRatio - Math.max(precalculatedDiff,0);
				}
			};
		}
	};
}

// @ts-expect-error
const typedConvert: OverloadedConverter = convert;

export {typedConvert as convert};
