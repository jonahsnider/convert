import {allUnits, UnitIndexes} from './conversions';
import {Converter} from './types/units';
import {UnitFamilies} from './util';

type OverloadedConverter = ((
	/**
	 * Convert a quantity from one unit to another.
	 *
	 * @example
	 * ```ts
	 * convert(90).from('minutes').to('h'); // 1
	 * ```
	 *
	 * @param quantity - The quantity you want to convert
	 */ quantity: number
) => Converter<number>) &
	((
		/**
		 * Convert a quantity expressed as a `bigint` from one unit to another.
		 *
		 * @example
		 * ```ts
		 * convert(2n).from('hours').to('min'); // 120n
		 * ```
		 *
		 * @param quantity - The quantity you want to convert
		 */ quantity: bigint
	) => Converter<bigint>);

function _convert(quantity: number | bigint): Converter<typeof quantity> {
	return {
		from: (from: Exclude<keyof typeof allUnits, '__proto__'>) => {
			if (__DEV__ && !(from in allUnits)) {
				throw new Error(`${from} is not a valid unit`);
			}

			return {
				to: (to: typeof from) => {
					if (__DEV__ && !(to in allUnits)) {
						throw new Error(`${to} is not a valid unit`);
					}

					// Inlining these references can reduce bundle size by around 5 bytes, but the performance cost from repeated object accesses is probably not worth it
					const fromUnit = allUnits[from];
					const toUnit = allUnits[to];

					if (__DEV__) {
						const meters = 'm';

						if (
							// prettier-ignore
							// Prettier likes to wrap the condition in ( ) then move the first comment outside of that
							// time -> meters
							(fromUnit[UnitIndexes.Family] === UnitFamilies.Time && to === meters) ||
							// meters -> time
							(toUnit[UnitIndexes.Family] === UnitFamilies.Time && from === meters)
						) {
							throw new Error(
								[
									`No conversion could be found from ${from} to ${to}.`,
									'Also, are you trying to convert quantities of time?',
									'Because "m" is treated as meters, not minutes.',
									'You probably wanted to write "123min" instead.'
								].join(' ')
							);
						}
					}

					if (fromUnit[UnitIndexes.Family] !== toUnit[UnitIndexes.Family]) {
						if (__DEV__) {
							throw new Error(`No conversion could be found from ${from} to ${to}`);
						} else {
							throw new Error();
						}
					}

					const combinedRatio = fromUnit[UnitIndexes.Ratio] / toUnit[UnitIndexes.Ratio];

					if (typeof quantity === 'bigint') {
						let bigintValue: bigint | undefined;

						if (__DEV__) {
							try {
								// Note: BigInt support only works when you are converting integers (obviously)
								// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

								bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromUnit[UnitIndexes.Difference]) - BigInt(toUnit[UnitIndexes.Difference]));
							} catch {
								throw new Error(`Conversion for ${from} to ${to} can't be expressed as an integer`);
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
export const convert = _convert as unknown as OverloadedConverter;
