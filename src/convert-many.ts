import {allUnits} from './conversions';
import {convert} from './convert';
import {Units} from './types/units';
import {invariant} from './util';

const enum MatchGroups {
	/** The entire match. */
	Full,
	/** The quantity of the unit. */
	Quantity,
	/** The unit. */
	Unit
}

const splitExpression = /(-?(?:\d+)?\.?\d+)([^\s]+)/g;

/**
 * Convert several values in a string into a single unit.
 *
 * @example
 * ```ts
 * convertMany('1d12h').to('hours') === 36;
 * ```
 *
 * @param value - The string to parse as values
 */
export function convertMany(value: string) {
	splitExpression.lastIndex = -1;
	let search = splitExpression.exec(value);

	invariant(search, `value did not match expression ${splitExpression}`);

	return {
		/**
		 * @param unit - The unit each value should be converted to
		 *
		 * @returns The sum of the values converted into `unit`
		 *
		 * @throws If the provided value was invalid
		 */
		to(unit: Units) {
			if (__DEV__) {
				invariant(unit in allUnits, `${unit} is not a valid unit`);
			}

			let result = 0;

			do {
				if (__DEV__) {
					try {
						// @ts-expect-error Units here aren't typesafe and the quantity is casted to a number
						result += convert(search[MatchGroups.Quantity]).from(search[MatchGroups.Unit]).to(unit);
					} catch (error) {
						throw new RangeError(`Couldn't convert ${search![MatchGroups.Unit]} to ${unit}`);
					}
				} else {
					// @ts-expect-error Units here aren't typesafe and the quantity is casted to a number
					result += convert(search[MatchGroups.Quantity]).from(search[MatchGroups.Unit]).to(unit);
				}

				search = splitExpression.exec(value);
			} while (search !== null);

			return result;
		}
	};
}

/**
 * Convert a duration string to a duration in milliseconds.
 *
 * You can use this function as a replacement for the duration string to millisecond duration number that the popular `ms` package provides.
 *
 * If you really care about performance you should just use `convertMany` directly.
 *
 * @example
 * ```ts
 * ms('1d 2h 30min') === 95400000;
 * ```
 *
 * @param value - Duration string to convert
 *
 * @returns A duration in milliseconds
 *
 * @throws If the provided value was invalid
 */
export function ms(value: string): number {
	return convertMany(value).to('ms');
}
