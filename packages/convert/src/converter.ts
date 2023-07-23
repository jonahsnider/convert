// The bundler will inline the const enum

import {KelvinNames} from 'conversions';
import {bestUnits, conversions, temperatureDifferences} from 'bundled-conversions';
import * as Conversions from 'conversions';
import {Indexes} from 'optimized-conversions';
import {convert} from './convert.js';
import type {BestConversion, BestUnits, SimplifyQuantity} from './types/common.js';
import type {Temperature, Unit, UnitToFamily} from './types/units.js';
import {assert, assertType, isType} from './assert.js';

type TemperatureWithDifference = Exclude<keyof typeof temperatureDifferences, '__proto__'>;

type ConverterThis<Q extends number | bigint, U extends Unit> = {
	_quantity: Q;
	_from: U;
	_fromUnit: (typeof conversions)[U];
	_isUsingBigInts: Q extends bigint ? true : false;
	_isConvertingTemperature: U extends Temperature ? true : false;
};

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
// eslint-disable-next-line complexity
export function to<Q extends number | bigint, U extends Unit, K extends Conversions.Best.Kind = Conversions.Best.Kind>(
	this: ConverterThis<Q, U>,
	to: U | 'best',
	kind: Conversions.Best.Kind = 'metric',
): SimplifyQuantity<Q> | BestConversion<Q, BestUnits<UnitToFamily[U], K>> {
	if (this._from === to) {
		// This is ok since we have already validated the type of quantity

		return this._quantity as unknown as SimplifyQuantity<Q>;
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
		const family = bestUnitKind[this._fromUnit[Indexes.Conversion.Family]];

		const baseUnit = family[0][Indexes.Best.Sym];

		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		let quantity = convert(this._quantity, this._from as any).to(baseUnit as any) as unknown as SimplifyQuantity<Q>;
		const absQuantity = quantity < 0 ? -quantity : quantity;

		let bestUnit: (typeof family)[number][Indexes.Best.Sym] = baseUnit;

		// eslint-disable-next-line unicorn/no-for-loop, @typescript-eslint/prefer-for-of
		for (let i = 0; i < family.length; i++) {
			const best = family[i];
			if (absQuantity >= best[Indexes.Best.Value]) {
				bestUnit = best[Indexes.Best.Sym];
			}
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		quantity = convert(quantity, baseUnit as any).to(bestUnit as any) as unknown as SimplifyQuantity<Q>;

		return {
			quantity,
			unit: bestUnit,
			toString: this._isUsingBigInts
				? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
				  () => ((quantity as bigint) + bestUnit) as `${SimplifyQuantity<Q>}${BestUnits<UnitToFamily[U], K>}`
				: (toFixed?: number) =>
						// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
						((toFixed === undefined ? quantity : (quantity as number).toFixed(toFixed)) + bestUnit) as `${SimplifyQuantity<Q>}${BestUnits<UnitToFamily[U], K>}`,
		};
	}

	const toUnit = conversions[to] as (typeof conversions)[keyof typeof conversions] | undefined;

	if (__DEV__) {
		if (!toUnit) {
			throw new RangeError(`${to} is not a valid unit`);
		}

		const meters = 'm';

		if (
			// Time -> meters
			(this._fromUnit[Indexes.Conversion.Family] === Conversions.Id.Time && to === meters) ||
			// Meters -> time
			(toUnit[Indexes.Conversion.Family] === Conversions.Id.Time && this._from === meters)
		) {
			throw new RangeError(
				[
					`No conversion could be found from ${this._from} to ${to}.`,
					'Also, are you trying to convert quantities of time?',
					'Because "m" is treated as meters, not minutes.',
					'You probably want to use the "min" unit instead.',
				].join(' '),
			);
		}
	}

	// @ts-expect-error This throws if toUnit is undefined
	if (this._fromUnit[Indexes.Conversion.Family] !== toUnit[Indexes.Conversion.Family]) {
		if (__DEV__) {
			throw new RangeError(`No conversion could be found from ${this._from} to ${to}`);
		}

		throw new RangeError();
	}

	assert(toUnit);

	if (this._isUsingBigInts && isType<bigint>(this._quantity)) {
		// TODO: If quantity is a bigint return a different Converter<T> instead of checking it here - this may not increase performance if TurboFan is already optimizing for different code paths

		if (__DEV__) {
			try {
				BigInt(this._fromUnit[Indexes.Conversion.Ratio] / toUnit[Indexes.Conversion.Ratio]);
			} catch {
				throw new TypeError(`Conversion for ${this._from} to ${to} cannot be calculated as a BigInt because the conversion ratio is not an integer`);
			}
		}

		if (this._from in temperatureDifferences || to in temperatureDifferences) {
			if (__DEV__) {
				const reason = this._from in temperatureDifferences ? this._from : to;

				throw new RangeError(
					`Conversion for ${this._from} to ${to} cannot be calculated as ${reason} has a conversion difference which cannot be converted with bigints`,
				);
			}

			throw new RangeError();
		}

		// Difference is intentionally excluded as there is never a case where you could convert a temperature to a different temperature as integers
		return (this._quantity *
			// Converting each ratio to bigints would make the most sense here but it ends up with unhelpful return values (ex. 1_000_000n B -> MB === 0n instead of 1n)
			// It's mostly okay to do this since ratios are already `number`s so we aren't losing a ton of precision, just if you have 2 very precise ratios that are multiplied together and exceed the precision of a `number`
			BigInt(this._fromUnit[Indexes.Conversion.Ratio] / toUnit[Indexes.Conversion.Ratio])) as unknown as SimplifyQuantity<Q>;
	}

	assertType<number>(this._quantity);

	if (this._isConvertingTemperature && isType<Temperature>(this._from) && isType<Temperature>(to)) {
		switch (to) {
			case KelvinNames.K:
			case KelvinNames.kelvin:
			case KelvinNames.kelvins: {
				if (this._from in temperatureDifferences && isType<TemperatureWithDifference>(this._from)) {
					return ((this._quantity + temperatureDifferences[this._from]) * this._fromUnit[Indexes.Conversion.Ratio]) as unknown as SimplifyQuantity<Q>;
				}

				return (this._quantity * this._fromUnit[Indexes.Conversion.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			default: {
				break;
			}
		}

		switch (this._from) {
			case KelvinNames.K:
			case KelvinNames.kelvin:
			case KelvinNames.kelvins: {
				if (to in temperatureDifferences && isType<TemperatureWithDifference>(to)) {
					return (this._quantity / toUnit[Indexes.Conversion.Ratio] - temperatureDifferences[to]) as unknown as SimplifyQuantity<Q>;
				}

				return (this._quantity / toUnit[Indexes.Conversion.Ratio]) as unknown as SimplifyQuantity<Q>;
			}

			default: {
				break;
			}
		}

		return convert(convert(this._quantity, this._from).to('K'), 'K').to(to) as unknown as SimplifyQuantity<Q>;
	}

	return (this._quantity * (this._fromUnit[Indexes.Conversion.Ratio] / toUnit[Indexes.Conversion.Ratio])) as unknown as SimplifyQuantity<Q>;
}
