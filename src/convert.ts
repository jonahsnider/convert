import {allUnits, UnitIndexes} from './conversions';
import {Angle, Data, Force, Length, Mass, Pressure, Temperature, Time, Unit, Volume} from './types/units';
import {UnitFamilies} from './util';

export default convert;

type SimplifyQuantity<Q> = Q extends number ? number : Q extends bigint ? bigint : never;

interface Converter<Q extends number | bigint, U extends Unit> {
	/**
	 * Convert a quantity of one unit into a new unit
	 *
	 * @param to - The unit you want to convert to
	 *
	 * @throws `RangeError` if the `to` parameter is not a valid type
	 * @throws `TypeError` if `quantity` was a `bigint` but the conversion can't be expressed as an integer
	 *
	 * @returns The converted value
	 */
	to(to: U): SimplifyQuantity<Q>;
}

/**
 * Convert a given angle into another unit.
 *
 * @param angle - The angle you want to convert
 * @param from - The angle type you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(angle: Q, from: Angle): Converter<Q, Angle>;
/**
 * Convert a given quantity of data into another unit.
 *
 * @param quantity - The quantity of data you want to convert
 * @param from - The unit of data you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Data): Converter<Q, Data>;
/**
 * Convert a given quantity of force into another unit.
 *
 * @param quantity - The quantity of force you want to convert
 * @param from - The unit of force you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Force): Converter<Q, Force>;
/**
 * Convert a given length into another unit.
 *
 * @param length - The length you want to convert
 * @param from - The unit of length you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(length: Q, from: Length): Converter<Q, Length>;
/**
 * Convert a given quantity of mass into another unit.
 *
 * @param quantity - The quantity of mass you want to convert
 * @param from - The unit of mass you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Mass): Converter<Q, Mass>;
/**
 * Convert a given quantity of pressure into another unit.
 *
 * @param quantity - The quantity of pressure you want to convert
 * @param from - The unit of pressure you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Pressure): Converter<Q, Pressure>;
/**
 * Convert a given temperature into another unit.
 *
 * @param quantity - The quantity of temperature you want to convert
 * @param from - The unit of temperature are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Temperature): Converter<Q, Temperature>;
/**
 * Convert a given duration of time into another unit.
 *
 * @param duration - The duration of time you want to convert
 * @param from - The unit of time you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(duration: Q, from: Time): Converter<Q, Time>;
/**
 * Convert a given quantity of volume into another unit.
 *
 * @param quantity - The quantity of volume you want to convert
 * @param from - The unit of volume you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Volume): Converter<Q, Volume>;
/**
 * Convert a given quantity of a unit into another unit.
 *
 * @param quantity - The quantity of the `from` unit you want to convert
 * @param from - The unit you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Unit): Converter<Q, Unit> {
	if (__DEV__ && !(from in allUnits)) {
		throw new RangeError(`${from} is not a valid unit`);
	}

	return {
		to: (to: typeof from): SimplifyQuantity<Q> => {
			if (__DEV__ && !(to in allUnits)) {
				throw new RangeError(`${to} is not a valid unit`);
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
					throw new RangeError(
						[
							`No conversion could be found from ${from} to ${to}.`,
							'Also, are you trying to convert quantities of time?',
							'Because "m" is treated as meters, not minutes.',
							'You probably want to use the "min" unit instead.'
						].join(' ')
					);
				}
			}

			if (fromUnit[UnitIndexes.Family] !== toUnit[UnitIndexes.Family]) {
				if (__DEV__) {
					throw new RangeError(`No conversion could be found from ${from} to ${to}`);
				}

				throw new RangeError();
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
						throw new TypeError(`Conversion for ${from} to ${to} can't be expressed as an integer`);
					}
				} else {
					bigintValue = quantity * BigInt(combinedRatio) + (BigInt(fromUnit[UnitIndexes.Difference]) - BigInt(toUnit[UnitIndexes.Difference]));
				}

				return bigintValue as SimplifyQuantity<Q>;
			}

			return (quantity * combinedRatio + (fromUnit[UnitIndexes.Difference] - toUnit[UnitIndexes.Difference])) as SimplifyQuantity<Q>;
		}
	};
}
