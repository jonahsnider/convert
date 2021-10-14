import {assert, assertType, isType} from './assert.js';
import {convert} from './convert.js';
import type {KelvinNames} from './dev/conversions/temperature.js';
import type {BestConversionKind} from './dev/types/common.js';
import {ConversionFamilyId} from './dev/types/common.js';
import * as Generated from './dev/types/generated.js';
import {bestUnits, conversions, temperatureDifferences} from './generated/generated.js';
import type {BestConversion, BestUnits, SimplifyQuantity} from './types/common.js';
import type {Temperature, Unit, UnitToFamily} from './types/units.js';

type TemperatureWithDifference = Exclude<keyof typeof temperatureDifferences, '__proto__'>;

/** This is like a `Set` of aliases except it's an object, so we can use the `in` keyword (ES3 compatibility). */
const kelvinsAliases: Record<KelvinNames, unknown> = {
	/* eslint-disable @typescript-eslint/naming-convention */
	kelvin: 0,
	kelvins: 0,
	K: 0,
	/* eslint-enable @typescript-eslint/naming-convention */
};

/**
 * Convert a measurement to the best unit for display.
 *
 * @param to - The string `best`
 * @param kind - The set of units to use (defaults to `'metric'`)
 *
 * @returns An object with a `quantity` property of the `unit` unit, which can be casted to a string using the `toString()` method
 */
export function to<Q extends number | bigint, U extends Unit, K extends BestConversionKind = BestConversionKind>(
	quantity: Q,
	from: U,
	fromUnit: typeof conversions[U],
	isUsingBigints: Q extends bigint ? true : false,
	isConvertingTemperature: U extends Temperature ? true : false,

	to: 'best',
	kind?: K | undefined,
): BestConversion<Q, BestUnits<UnitToFamily[U], K>>;
/**
 * Convert a quantity of one unit into a new unit
 *
 * @param to - The unit you want to convert to
 *
 * @returns The converted value
 */
export function to<Q extends number | bigint, U extends Unit>(
	quantity: Q,
	from: U,
	fromUnit: typeof conversions[U],
	isUsingBigints: Q extends bigint ? true : false,
	isConvertingTemperature: U extends Temperature ? true : false,

	to: U,
): SimplifyQuantity<Q>;
export function to<Q extends number | bigint, U extends Unit, K extends BestConversionKind = BestConversionKind>(
	quantity: SimplifyQuantity<Q>,
	from: U,
	fromUnit: typeof conversions[U],
	isUsingBigints: Q extends bigint ? true : false,
	isConvertingTemperature: U extends Temperature ? true : false,

	to: U | 'best',
	kind: BestConversionKind = 'metric',
): SimplifyQuantity<Q> | BestConversion<Q, BestUnits<UnitToFamily[U], K>> {
	if (from === to) {
		// This is ok since we have already validated the type of quantity

		return quantity as unknown as SimplifyQuantity<Q>;
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

		quantity = convert(quantity, from as any).to(baseUnit as any) as unknown as SimplifyQuantity<Q>;

		let bestUnit: typeof family[number][Generated.BestIndex.Sym] = baseUnit;

		// eslint-disable-next-line unicorn/no-for-loop, @typescript-eslint/prefer-for-of
		for (let i = 0; i < family.length; i++) {
			const best = family[i];
			if (quantity >= best[Generated.BestIndex.Value]) {
				bestUnit = best[Generated.BestIndex.Sym];
			}
		}

		quantity = convert(quantity, baseUnit as any).to(bestUnit as any) as unknown as SimplifyQuantity<Q>;

		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		return {
			quantity,
			unit: bestUnit,
			// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
			toString: () => quantity + bestUnit,
		} as BestConversion<Q, BestUnits<UnitToFamily[U], K>>;
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

	if (isUsingBigints && isType<bigint>(quantity)) {
		// TODO: If quantity is a bigint return a different Converter<T> instead of checking it here
		if (__DEV__) {
			try {
				// Note: BigInt support only works when you are converting integers (obviously)
				// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

				// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
				return (quantity * BigInt(fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio])) as unknown as SimplifyQuantity<Q>;
			} catch {
				throw new TypeError(`Conversion for ${from} to ${to} cannot be calculated as a BigInt because the conversion ratio is not an integer`);
			}
		} else {
			// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
			return (quantity * BigInt(fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio])) as unknown as SimplifyQuantity<Q>;
		}
	}

	assertType<number>(quantity);

	if (isConvertingTemperature && isType<Temperature>(from) && isType<Temperature>(to)) {
		// `in` keyword here is safe because we have already validated that you are giving us a valid unit
		if (to in kelvinsAliases) {
			if (from in temperatureDifferences && isType<TemperatureWithDifference>(from)) {
				return ((quantity + temperatureDifferences[from as TemperatureWithDifference]) *
					fromUnit[Generated.ConversionIndex.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			return (quantity * fromUnit[Generated.ConversionIndex.Ratio]) as unknown as SimplifyQuantity<Q>;
		}

		if (from in kelvinsAliases) {
			if (to in temperatureDifferences && isType<TemperatureWithDifference>(to)) {
				return (quantity / toUnit[Generated.ConversionIndex.Ratio] - temperatureDifferences[to]) as unknown as SimplifyQuantity<Q>;
			}

			return (quantity / toUnit[Generated.ConversionIndex.Ratio]) as unknown as SimplifyQuantity<Q>;
		}

		return convert(convert(quantity, from).to('K'), 'K').to(to) as unknown as SimplifyQuantity<Q>;
	}

	return (quantity * (fromUnit[Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio])) as unknown as SimplifyQuantity<Q>;
}
