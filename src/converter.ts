import {convert} from './convert.js';
import type {BestConversionKind} from './dev/types/common.js';
import {ConversionFamilyId} from './dev/types/common.js';
import * as Generated from './dev/types/generated.js';
import {bestUnits, conversions, temperatureDifferences} from './generated/generated.js';
import type {BestConversion, BestUnits, SimplifyQuantity} from './types/common.js';
import type {Temperature, Unit, UnitToFamily} from './types/units.js';
import {assert, assertType, isType} from './assert.js';
import {KelvinNames} from './dev/conversions/temperature.js';

type TemperatureWithDifference = Exclude<keyof typeof temperatureDifferences, '__proto__'>;

/**
 * Minified names of properties on the `this` context.
 * Taken from the Terser output.
 */
export const enum ConverterThisProperties {
	Quantity = 't',
	From = 'i',
	FromUnit = 'm',
	IsUsingBigInts = 'a',
	IsConvertingTemperature = 'e',
}

interface ConverterThis<Q extends number | bigint, U extends Unit> {
	[ConverterThisProperties.Quantity]: Q;
	[ConverterThisProperties.From]: U;
	[ConverterThisProperties.FromUnit]: typeof conversions[U];
	[ConverterThisProperties.IsUsingBigInts]: Q extends bigint ? true : false;
	[ConverterThisProperties.IsConvertingTemperature]: U extends Temperature ? true : false;
}

/**
 * Convert a measurement to the best unit for display.
 *
 * @param to - The string `best`
 * @param kind - The set of units to use (defaults to `'metric'`)
 *
 * @returns An object with a `quantity` property of the `unit` unit, which can be casted to a string using the `toString()` method
 */
export function to<Q extends number | bigint, U extends Unit, K extends BestConversionKind = BestConversionKind>(
	this: ConverterThis<Q, U>,
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
export function to<Q extends number | bigint, U extends Unit>(this: ConverterThis<Q, U>, to: U): SimplifyQuantity<Q>;
export function to<Q extends number | bigint, U extends Unit, K extends BestConversionKind = BestConversionKind>(
	this: ConverterThis<Q, U>,
	to: U | 'best',
	kind: BestConversionKind = 'metric',
): SimplifyQuantity<Q> | BestConversion<Q, BestUnits<UnitToFamily[U], K>> {
	if (this[ConverterThisProperties.From] === to) {
		// This is ok since we have already validated the type of quantity

		return this[ConverterThisProperties.Quantity] as unknown as SimplifyQuantity<Q>;
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
		const family = bestUnitKind[this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Family]];

		const baseUnit = family[0][Generated.BestIndex.Sym];

		let quantity = convert(this[ConverterThisProperties.Quantity], this[ConverterThisProperties.From] as any).to(
			baseUnit as any,
		) as unknown as SimplifyQuantity<Q>;

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
			(this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Family] === ConversionFamilyId.Time && to === meters) ||
			// Meters -> time
			(toUnit[Generated.ConversionIndex.Family] === ConversionFamilyId.Time && this[ConverterThisProperties.From] === meters)
		) {
			throw new RangeError(
				[
					`No conversion could be found from ${this[ConverterThisProperties.From]} to ${to}.`,
					'Also, are you trying to convert quantities of time?',
					'Because "m" is treated as meters, not minutes.',
					'You probably want to use the "min" unit instead.',
				].join(' '),
			);
		}
	}

	// @ts-expect-error This throws if toUnit is undefined
	if (this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Family] !== toUnit[Generated.ConversionIndex.Family]) {
		if (__DEV__) {
			throw new RangeError(`No conversion could be found from ${this[ConverterThisProperties.From]} to ${to}`);
		}

		throw new RangeError();
	}

	assert(toUnit);

	if (this[ConverterThisProperties.IsUsingBigInts] && isType<bigint>(this[ConverterThisProperties.Quantity])) {
		// TODO: If quantity is a bigint return a different Converter<T> instead of checking it here
		if (__DEV__) {
			try {
				// Note: BigInt support only works when you are converting integers (obviously)
				// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer

				// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
				return ((this[ConverterThisProperties.Quantity] as bigint) *
					BigInt(
						this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio],
					)) as unknown as SimplifyQuantity<Q>;
			} catch {
				throw new TypeError(
					`Conversion for ${this[ConverterThisProperties.From]} to ${to} cannot be calculated as a BigInt because the conversion ratio is not an integer`,
				);
			}
		} else {
			// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
			return ((this[ConverterThisProperties.Quantity] as bigint) *
				BigInt(
					this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio],
				)) as unknown as SimplifyQuantity<Q>;
		}
	}

	assertType<number>(this[ConverterThisProperties.Quantity]);

	if (this[ConverterThisProperties.IsConvertingTemperature] && isType<Temperature>(this[ConverterThisProperties.From]) && isType<Temperature>(to)) {
		switch (to) {
			case KelvinNames.K:
			case KelvinNames.kelvin:
			case KelvinNames.kelvins: {
				if (this[ConverterThisProperties.From] in temperatureDifferences && isType<TemperatureWithDifference>(this[ConverterThisProperties.From])) {
					return (((this[ConverterThisProperties.Quantity] as number) +
						temperatureDifferences[this[ConverterThisProperties.From] as TemperatureWithDifference]) *
						this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Ratio]) as unknown as SimplifyQuantity<Q>;
				}

				return (this[ConverterThisProperties.Quantity] *
					this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			default:
				break;
		}

		switch (this[ConverterThisProperties.From]) {
			case KelvinNames.K:
			case KelvinNames.kelvin:
			case KelvinNames.kelvins: {
				if (to in temperatureDifferences && isType<TemperatureWithDifference>(to)) {
					return ((this[ConverterThisProperties.Quantity] as number) / toUnit[Generated.ConversionIndex.Ratio] -
						temperatureDifferences[to]) as unknown as SimplifyQuantity<Q>;
				}

				return ((this[ConverterThisProperties.Quantity] as number) / toUnit[Generated.ConversionIndex.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			default:
				break;
		}

		return convert(convert(this[ConverterThisProperties.Quantity] as number, this[ConverterThisProperties.From] as Temperature).to('K'), 'K').to(
			to,
		) as unknown as SimplifyQuantity<Q>;
	}

	return (this[ConverterThisProperties.Quantity] *
		(this[ConverterThisProperties.FromUnit][Generated.ConversionIndex.Ratio] / toUnit[Generated.ConversionIndex.Ratio])) as unknown as SimplifyQuantity<Q>;
}
