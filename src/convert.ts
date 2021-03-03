import {allUnits, UnitIndexes} from './conversions';
import {Converter} from './types/units';
import {invariant} from './util';

type OverloadedConverter = ((quantity: number) => Converter<number>) & ((quantity: bigint) => Converter<bigint>);

function _convert(quantity: number | bigint): Converter<typeof quantity> {
	return {
		from: (from: Exclude<keyof typeof allUnits, '__proto__'>) => {
			if (__DEV__) {
				invariant(from in allUnits, `${from} is not a valid unit`);
			}

			return {
				to: (to: typeof from) => {
					if (__DEV__) {
						invariant(to in allUnits, `${to} is not a valid unit`);
					}

					// Inlining these references can reduce bundle size by around 5 bytes, but the performance cost from repeated object accesses is probably not worth it
					const fromUnit = allUnits[from];
					const toUnit = allUnits[to];

					invariant(fromUnit[UnitIndexes.Family] === toUnit[UnitIndexes.Family], `No conversion could be found from ${from} to ${to}`);

					const combinedRatio = fromUnit[UnitIndexes.Ratio] / toUnit[UnitIndexes.Ratio];

					if (typeof quantity === 'bigint') {
						let bigintValue: bigint | undefined;

						if (__DEV__) {
							try {
								// Note: BigInt support only works when you are converting integers (obviously)
								// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

								bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromUnit[UnitIndexes.Difference]) - BigInt(toUnit[UnitIndexes.Difference]));
							} catch (error) {
								invariant(false, `Conversion for ${from} to ${to} can't be expressed as an integer`);
							}
						} else {
							bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromUnit[UnitIndexes.Difference]) - BigInt(toUnit[UnitIndexes.Difference]));
						}

						return bigintValue;
					}

					return quantity * combinedRatio + (fromUnit[UnitIndexes.Difference] - toUnit[UnitIndexes.Difference]);
				}
			};
		}
	};
}

/**
 * Convert a quantity from one unit to another.
 *
 * @example
 * ```ts
 * convert(90).from('minutes').to('h'); // 1
 * ```
 * @example
 * ```ts
 * convert(2n).from('hours').to('min'); // 120n
 * ```
 *
 * @param quantity - The quantity you want to convert
 */
export const convert = (_convert as unknown) as OverloadedConverter;
