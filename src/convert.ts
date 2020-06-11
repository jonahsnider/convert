import {Unit} from '../types/common';
import {AllUnits, Converter} from '../types/units';
import {families} from './unitFamilies';
import {invariant} from './util';

type OverloadedConverter = ((quantity: number) => Converter<number>) &
	((quantity: bigint) => Converter<bigint>) &
	((quantity: bigint | number) => Converter<bigint | number>);

/**
 * Get the conversion ratio to the base unit of a `Unit`
 * @param unit The unit to get the conversion ratio from
 * @param desiredConversion The conversion you are looking for
 *
 * @example
 * ```ts
 * conversionRatio(time, 'minutes');
 * // 1 / 60
 * ```
 */
function conversionRatio(unit: readonly Unit[], desiredConversion: Readonly<string>): number {
	const found = unit.find(conversion => conversion.aliases.includes(desiredConversion));

	invariant(found !== undefined, `No conversion could be found for ${desiredConversion}`);

	return found.ratio;
}

/**
 * Convert from one unit to another.
 * @example convert(360).from('seconds').to('minutes');
 */
function convert(quantity: number | bigint): Converter<typeof quantity> {
	if (quantity === 0 || quantity === BigInt(0)) {
		return {from: () => ({to: () => quantity})};
	}

	return {
		from: (fromUnit: AllUnits) => {
			let from: typeof fromUnit;
			let to: typeof fromUnit;

			from = fromUnit;

			// @ts-expect-error
			const _unit = families.find(family => family.find((conversion: Unit) => conversion.aliases.includes(from)));

			invariant(_unit, `No conversion could be found for ${from}`);

			const fromRatio = conversionRatio(_unit, from);

			return {
				to: (toUnit: typeof from) => {
					to = toUnit;

					if (to === from) {
						return quantity;
					}

					const toRatio = conversionRatio(_unit, to);

					const combinedRatio = (1 / fromRatio) * toRatio;

					if (typeof quantity === 'bigint') {
						let bigintValue: bigint | undefined;

						if (__DEV__) {
							try {
								// Note: BigInt support only works when you are converting integers (obviously)
								// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

								bigintValue = quantity * BigInt(combinedRatio);
							} catch (error) {
								invariant(bigintValue !== undefined, `Conversion ratio for ${from} to ${to} can't be expressed as an integer`);
							}
						} else {
							bigintValue = quantity * BigInt(combinedRatio);
						}

						return bigintValue;
					}

					return quantity * combinedRatio;
				}
			};
		}
	};
}

// @ts-expect-error
const typedConvert: OverloadedConverter = convert;

export {typedConvert as convert};
