import {assert, assertType, isType} from './assert.js';
import type {KelvinNames} from './dev/conversions/temperature.js';
import type {BestConversionKind} from './dev/types/common.js';
import {ConversionFamilyId} from './dev/types/common.js';
import * as Generated from './dev/types/generated.js';
import {bestUnits, conversions, temperatureDifferences} from './generated/generated.js';
import type {Converter} from './types/common.js';
import type {Angle, Area, Data, Force, Length, Mass, Pressure, Temperature, Time, Unit, Volume} from './types/units.js';

/** This is like a `Set` of aliases except it's an object, so we can use the `in` keyword (ES3 compatibility). */
export const kelvinsAliases: Record<KelvinNames, unknown> = {
	kelvin: 0,
	kelvins: 0,
	K: 0,
};

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
 * Convert a given area into another unit.
 *
 * @param quantity - The area you want to convert
 * @param from - The unit of area you are converting from
 *
 * @throws `RangeError` If the `from` parameter is not a recognized unit
 *
 * @returns An object you can use to convert the provided quantity
 */
export function convert<Q extends number | bigint>(quantity: Q, from: Area): Converter<Q, Area>;
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
	// This causes @babel/runtime to emit a _typeOf function with symbol backwards compatibility
	// Writing typeof quantity === 'bigint' doesn't trigger it for some reason
	const quantityType = typeof quantity;
	const usingBigInts = quantityType === 'bigint';

	if (!usingBigInts && quantityType !== 'number') {
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

	const convertingTemperature = fromUnit[Generated.ConversionIndex.Family] === ConversionFamilyId.Temperature;

	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return {
		to: (to: typeof from | 'best', kind: BestConversionKind = 'metric') => {
			if (from === to) {
				// This is ok since we have already validated the type of quantity
				return quantity;
			}

			// TODO: Extract to function
			if (to === 'best') {
				// eslint-disable-next-line no-prototype-builtins
				if (!bestUnits.hasOwnProperty(kind)) {
					if (__DEV__) {
						throw new RangeError(`${kind} is not a valid best conversion kind`);
					}

					throw new RangeError();
				}

				const bestUnitKind = bestUnits[kind];
				const family = bestUnitKind[fromUnit[Generated.ConversionIndex.Family]];

				const baseUnit = family[0][Generated.BestIndex.Sym];

				quantity = convert(quantity, from as any).to(baseUnit as any) as unknown as Q;

				let bestUnit: typeof family[number][Generated.BestIndex.Sym] = baseUnit;

				// eslint-disable-next-line unicorn/no-for-loop, @typescript-eslint/prefer-for-of
				for (let i = 0; i < family.length; i++) {
					const best = family[i];
					if (quantity >= best[Generated.BestIndex.Value]) {
						bestUnit = best[Generated.BestIndex.Sym];
					}
				}

				quantity = convert(quantity, baseUnit as any).to(bestUnit as any) as unknown as Q;

				return {
					quantity,
					unit: bestUnit,
					// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
					toString: () => quantity + bestUnit,
				};
			}

			const toUnit = conversions[to] as typeof conversions[keyof typeof conversions] | undefined;

			if (__DEV__) {
				if (!toUnit) {
					throw new RangeError(`${to} is not a valid unit`);
				}

				const meters = 'm';

				if (
					// Time -> meters
					(fromUnit[Generated.ConversionIndex.Family] === ConversionFamilyId.Time && to === meters) ||
					// Meters -> time
					(toUnit[Generated.ConversionIndex.Family] === ConversionFamilyId.Time && from === meters)
				) {
					throw new RangeError(
						[
							`No conversion could be found from ${from} to ${to}.`,
							'Also, are you trying to convert quantities of time?',
							'Because "m" is treated as meters, not minutes.',
							'You probably want to use the "min" unit instead.',
						].join(' '),
					);
				}
			}

			// @ts-expect-error This throws if toUnit is undefined
			if (fromUnit[Generated.ConversionIndex.Family] !== toUnit[Generated.ConversionIndex.Family]) {
				if (__DEV__) {
					throw new RangeError(`No conversion could be found from ${from} to ${to}`);
				}

				throw new RangeError();
			}

			assert(toUnit);

			if (usingBigInts && isType<bigint>(quantity)) {
				// TODO: If quantity is a bigint return a different Converter<T> instead of checking it here
				if (__DEV__) {
					try {
						// Note: BigInt support only works when you are converting integers (obviously)
						// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

						// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
						return quantity * BigInt(fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio]);
					} catch {
						throw new TypeError(`Conversion for ${from} to ${to} cannot be calculated as a BigInt because the conversion ratio is not an integer`);
					}
				} else {
					// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
					return quantity * BigInt(fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio]);
				}
			}

			assertType<number>(quantity);

			if (convertingTemperature && isType<Temperature>(from) && isType<Temperature>(to)) {
				// `in` keyword here is safe because we have already validated that you are giving us a valid unit
				if (to in kelvinsAliases) {
					if (from in temperatureDifferences && isType<keyof typeof temperatureDifferences>(from)) {
						return (quantity + temperatureDifferences[from]) * fromUnit[Generated.ConversionIndex.Ratio];
					}

					return quantity * fromUnit[Generated.ConversionIndex.Ratio];
				}

				if (from in kelvinsAliases) {
					if (to in temperatureDifferences && isType<keyof typeof temperatureDifferences>(to)) {
						return quantity / toUnit[Generated.ConversionIndex.Ratio] - temperatureDifferences[to];
					}

					return quantity / toUnit[Generated.ConversionIndex.Ratio];
				}

				return convert(convert(quantity, from).to('K'), 'K').to(to);
			}

			return quantity * (fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio]);
		},
	} as Converter<Q, typeof from>;
}
