/* eslint-disable import/namespace */

import {KelvinNames} from 'conversions';
import {bestUnits, conversions, temperatureDifferences} from 'bundled-conversions';
import * as Conversions from 'conversions';
import {Indexes} from 'optimized-conversions';
import {convert} from './convert.js';
import type {BestConversion, BestUnits, SimplifyQuantity} from './types/common.js';
import type {Temperature, Unit, UnitToFamily} from './types/units.js';
import {assert, assertType, isType} from './assert.js';

type TemperatureWithDifference = Exclude<keyof typeof temperatureDifferences, '__proto__'>;

/**
 * Minified names of properties on the `this` context.
 * Taken from the Terser output.
 */
const enum This {
	Quantity = 't',
	From = 'i',
	FromUnit = 'm',
	IsUsingBigInts = 'a',
	IsConvertingTemperature = 'e',
}

export {This as ConverterThisProperties};

interface ConverterThis<Q extends number | bigint, U extends Unit> {
	[This.Quantity]: Q;
	[This.From]: U;
	[This.FromUnit]: typeof conversions[U];
	[This.IsUsingBigInts]: Q extends bigint ? true : false;
	[This.IsConvertingTemperature]: U extends Temperature ? true : false;
}

/**
 * Convert a measurement to the best unit for display.
 *
 * @param to - The string `best`
 * @param kind - The set of units to use (defaults to `'metric'`)
 *
 * @returns An object with a `quantity` property of the `unit` unit, which can be casted to a string using the `toString()` method
 */
export function to<Q extends number | bigint, U extends Unit, K extends Conversions.Best.Kind = Conversions.Best.Kind>(
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
export function to<Q extends number | bigint, U extends Unit, K extends Conversions.Best.Kind = Conversions.Best.Kind>(
	this: ConverterThis<Q, U>,
	to: U | 'best',
	kind: Conversions.Best.Kind = 'metric',
): SimplifyQuantity<Q> | BestConversion<Q, BestUnits<UnitToFamily[U], K>> {
	if (this[This.From] === to) {
		// This is ok since we have already validated the type of quantity

		return this[This.Quantity] as unknown as SimplifyQuantity<Q>;
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
		const family = bestUnitKind[this[This.FromUnit][Indexes.Conversion.Family]];

		const baseUnit = family[0][Indexes.Best.Sym];

		let quantity = convert(this[This.Quantity], this[This.From] as any).to(baseUnit as any) as unknown as SimplifyQuantity<Q>;
		const absQuantity = quantity < 0 ? -quantity : quantity;

		let bestUnit: typeof family[number][Indexes.Best.Sym] = baseUnit;

		// eslint-disable-next-line unicorn/no-for-loop, @typescript-eslint/prefer-for-of
		for (let i = 0; i < family.length; i++) {
			const best = family[i];
			if (absQuantity >= best[Indexes.Best.Value]) {
				bestUnit = best[Indexes.Best.Sym];
			}
		}

		quantity = convert(quantity, baseUnit as any).to(bestUnit as any) as unknown as SimplifyQuantity<Q>;

		return {
			quantity,
			unit: bestUnit,
			// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
			toString: () => (quantity + bestUnit) as `${SimplifyQuantity<Q>}${BestUnits<UnitToFamily[U], K>}`,
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
			(this[This.FromUnit][Indexes.Conversion.Family] === Conversions.Id.Time && to === meters) ||
			// Meters -> time
			(toUnit[Indexes.Conversion.Family] === Conversions.Id.Time && this[This.From] === meters)
		) {
			throw new RangeError(
				[
					`No conversion could be found from ${this[This.From]} to ${to}.`,
					'Also, are you trying to convert quantities of time?',
					'Because "m" is treated as meters, not minutes.',
					'You probably want to use the "min" unit instead.',
				].join(' '),
			);
		}
	}

	// @ts-expect-error This throws if toUnit is undefined
	if (this[This.FromUnit][Indexes.Conversion.Family] !== toUnit[Indexes.Conversion.Family]) {
		if (__DEV__) {
			throw new RangeError(`No conversion could be found from ${this[This.From]} to ${to}`);
		}

		throw new RangeError();
	}

	assert(toUnit);

	if (this[This.IsUsingBigInts] && isType<bigint>(this[This.Quantity])) {
		// TODO: If quantity is a bigint return a different Converter<T> instead of checking it here - this may not increase performance if TurboFan is already optimizing for

		if (__DEV__) {
			try {
				BigInt(this[This.FromUnit][Indexes.Conversion.Ratio] / toUnit[Indexes.Conversion.Ratio]);
			} catch {
				throw new TypeError(`Conversion for ${this[This.From]} to ${to} cannot be calculated as a BigInt because the conversion ratio is not an integer`);
			}
		}

		if (this[This.From] in temperatureDifferences || to in temperatureDifferences) {
			if (__DEV__) {
				const reason = this[This.From] in temperatureDifferences ? this[This.From] : to;

				throw new RangeError(
					`Conversion for ${this[This.From]} to ${to} cannot be calculated as ${reason} has a conversion difference which cannot be converted with bigints`,
				);
			}

			throw new RangeError();
		}

		// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
		return ((this[This.Quantity] as bigint) *
			// Converting each ratio to bigints would make the most sense here but it ends up with unhelpful return values (ex. 1_000_000n B -> MB === 0n instead of 1n)
			// It's mostly okay to do this since ratios are already `number`s so we aren't losing a ton of precision, just if you have 2 very precise ratios that are multiplied together and exceed the precision of a `number`
			BigInt(this[This.FromUnit][Indexes.Conversion.Ratio] / toUnit[Indexes.Conversion.Ratio])) as unknown as SimplifyQuantity<Q>;
	}

	assertType<number>(this[This.Quantity]);

	if (this[This.IsConvertingTemperature] && isType<Temperature>(this[This.From]) && isType<Temperature>(to)) {
		switch (to) {
			case KelvinNames.K:
			case KelvinNames.kelvin:
			case KelvinNames.kelvins: {
				if (this[This.From] in temperatureDifferences && isType<TemperatureWithDifference>(this[This.From])) {
					return (((this[This.Quantity] as number) + temperatureDifferences[this[This.From] as TemperatureWithDifference]) *
						this[This.FromUnit][Indexes.Conversion.Ratio]) as unknown as SimplifyQuantity<Q>;
				}

				return (this[This.Quantity] * this[This.FromUnit][Indexes.Conversion.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			default:
				break;
		}

		switch (this[This.From]) {
			case KelvinNames.K:
			case KelvinNames.kelvin:
			case KelvinNames.kelvins: {
				if (to in temperatureDifferences && isType<TemperatureWithDifference>(to)) {
					return ((this[This.Quantity] as number) / toUnit[Indexes.Conversion.Ratio] - temperatureDifferences[to]) as unknown as SimplifyQuantity<Q>;
				}

				return ((this[This.Quantity] as number) / toUnit[Indexes.Conversion.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			default:
				break;
		}

		return convert(convert(this[This.Quantity] as number, this[This.From] as Temperature).to('K'), 'K').to(to) as unknown as SimplifyQuantity<Q>;
	}

	return (this[This.Quantity] * (this[This.FromUnit][Indexes.Conversion.Ratio] / toUnit[Indexes.Conversion.Ratio])) as unknown as SimplifyQuantity<Q>;
}
