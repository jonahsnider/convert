import {assert, isType as assertType} from './assert';
import {ConversionFamilyIndex} from './dev/types/common';
import * as Generated from './dev/types/generated';
import {bestUnits} from './generated/generated';
import {Converter, SimplifyQuantity} from './types/common';
import {Angle, Data, Force, Length, Mass, Pressure, Temperature, Time, Unit, Volume} from './types/units';
import {conversions} from './dev/choose-conversions';

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
	const fromUnit = (conversions as unknown as Generated.Conversions)[from] as Generated.Conversion | undefined;

	if (!fromUnit) {
		if (__DEV__) {
			throw new RangeError(`${from} is not a valid unit`);
		}

		throw new RangeError();
	}

	const usingBigInts = typeof quantity === 'bigint';

	return {
		to: (to: typeof from | 'best') => {
			if (to === 'best') {
				const family = bestUnits[fromUnit[Generated.ConversionIndex.Family]];

				const baseUnit = family[0][Generated.BestIndex.Symbol];

				quantity = convert(quantity, from as any).to(baseUnit as any) as unknown as Q;

				let bestUnit: typeof family[number][Generated.BestIndex.Symbol] = baseUnit;

				for (let i = 0; i < family.length; i++) {
					const best = family[i];

					if (quantity >= best[Generated.BestIndex.Value]) {
						bestUnit = best[Generated.BestIndex.Symbol];
					}
				}

				quantity = convert(quantity, baseUnit as any).to(bestUnit as any) as unknown as Q;

				return {quantity, unit: bestUnit, toString: () => quantity + bestUnit} as any;
			}

			const toUnit = (conversions as unknown as Generated.Conversions)[to] as Generated.Conversion | undefined;

			if (__DEV__ && !toUnit) {
				throw new RangeError(`${to} is not a valid unit`);
			}

			if (__DEV__) {
				const meters = 'm';

				if (
					// time -> meters
					(fromUnit[Generated.ConversionIndex.Family] === ConversionFamilyIndex.Time && to === meters) ||
					// meters -> time
					(toUnit![Generated.ConversionIndex.Family] === ConversionFamilyIndex.Time && from === meters)
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

			// @ts-expect-error This throws if toUnit is undefined
			if (fromUnit[Generated.ConversionIndex.Family] !== toUnit[Generated.ConversionIndex.Family]) {
				if (__DEV__) {
					throw new RangeError(`No conversion could be found from ${from} to ${to}`);
				}

				throw new RangeError();
			}

			assert(toUnit);

			const combinedRatio = fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio];

			if (usingBigInts && assertType<bigint>(quantity)) {
				let bigintValue: bigint | undefined;

				if (__DEV__) {
					try {
						// Note: BigInt support only works when you are converting integers (obviously)
						// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

						bigintValue =
							quantity * BigInt(combinedRatio) +
							(BigInt(fromUnit[Generated.ConversionIndex.Difference]) - BigInt(toUnit[Generated.ConversionIndex.Difference]));
					} catch {
						throw new TypeError(`Conversion for ${from} to ${to} cannot be calculated as a BigInt because the conversion ratio is not an integer`);
					}
				} else {
					bigintValue =
						quantity * BigInt(combinedRatio) + (BigInt(fromUnit[Generated.ConversionIndex.Difference]) - BigInt(toUnit[Generated.ConversionIndex.Difference]));
				}

				return bigintValue as SimplifyQuantity<Q>;
			}

			return (quantity * combinedRatio +
				(fromUnit[Generated.ConversionIndex.Difference] - toUnit[Generated.ConversionIndex.Difference])) as SimplifyQuantity<Q>;
		}
	};
}
