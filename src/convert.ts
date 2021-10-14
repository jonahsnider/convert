import {to} from './converter.js';
import {ConversionFamilyId} from './dev/types/common.js';
import * as Generated from './dev/types/generated.js';
import {conversions} from './generated/generated.js';
import type {Converter} from './types/common.js';
import type {Angle, Area, Data, Force, Length, Mass, Pressure, Temperature, Time, Unit, Volume} from './types/units.js';

/**
 * Convert a given angle into another unit.
 *
 * @param angle - The angle you want to convert
 * @param from - The angle type you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(angle: Q, from: Angle): Converter<Q, Angle>;
/**
 * Convert a given area into another unit.
 *
 * @param quantity - The area you want to convert
 * @param from - The unit of area you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Area): Converter<Q, Area>;
/**
 * Convert a given quantity of data into another unit.
 *
 * @param quantity - The quantity of data you want to convert
 * @param from - The unit of data you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Data): Converter<Q, Data>;
/**
 * Convert a given quantity of force into another unit.
 *
 * @param quantity - The quantity of force you want to convert
 * @param from - The unit of force you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Force): Converter<Q, Force>;
/**
 * Convert a given length into another unit.
 *
 * @param length - The length you want to convert
 * @param from - The unit of length you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(length: Q, from: Length): Converter<Q, Length>;
/**
 * Convert a given quantity of mass into another unit.
 *
 * @param quantity - The quantity of mass you want to convert
 * @param from - The unit of mass you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Mass): Converter<Q, Mass>;
/**
 * Convert a given quantity of pressure into another unit.
 *
 * @param quantity - The quantity of pressure you want to convert
 * @param from - The unit of pressure you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Pressure): Converter<Q, Pressure>;
/**
 * Convert a given temperature into another unit.
 *
 * @param quantity - The quantity of temperature you want to convert
 * @param from - The unit of temperature are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Temperature): Converter<Q, Temperature>;
/**
 * Convert a given duration of time into another unit.
 *
 * @param duration - The duration of time you want to convert
 * @param from - The unit of time you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(duration: Q, from: Time): Converter<Q, Time>;
/**
 * Convert a given quantity of volume into another unit.
 *
 * @param quantity - The quantity of volume you want to convert
 * @param from - The unit of volume you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Volume): Converter<Q, Volume>;
/**
 * Convert a given quantity of a unit into another unit.
 *
 * @param quantity - The quantity of the `from` unit you want to convert
 * @param from - The unit you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Unit): Converter<Q, Unit> {
	// This causes @babel/runtime to emit a _typeOf function with symbol backwards compatibility
	// Writing typeof quantity === 'bigint' doesn't trigger it for some reason
	const quantityType = typeof quantity;
	const isUsingBigInts = (quantityType === 'bigint') as Q extends bigint ? true : false;

	if (!isUsingBigInts && quantityType !== 'number') {
		if (__DEV__) {
			throw new TypeError(`Expected quantity to be a number or a bigint, got ${quantityType}`);
		}

		throw new TypeError();
	}

	const fromUnit = conversions[from] as typeof conversions[keyof typeof conversions] | undefined;

	if (!fromUnit) {
		if (__DEV__) {
			throw new RangeError(`${from} is not a valid unit`);
		}

		throw new RangeError();
	}

	return {
		to: to.bind<null, any, any>(null, quantity, from, fromUnit, isUsingBigInts, fromUnit[Generated.ConversionIndex.Family] === ConversionFamilyId.Temperature),
	} as unknown as Converter<Q, Unit>;
}
