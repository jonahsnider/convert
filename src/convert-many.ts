import {assert} from './assert';
import {convert} from './convert';
import {BestConversion, BestUnits, Converter} from './types/common';
import {Unit} from './types/units';

const enum MatchGroup {
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
 * convertMany('1d 12h').to('hours') === 36;
 * ```
 *
 * @param value - The string to parse as values
 */
export function convertMany(value: string): Converter<number, Unit> {
	splitExpression.lastIndex = 0;
	let search = splitExpression.exec(value);

	if (!search) {
		throw new RangeError(`value did not match expression ${splitExpression}`);
	}

	return {
		to(unit: Unit | 'best') {
			assert(search);

			const best = unit === 'best';

			let result = 0;
			let resolvedUnit: BestUnits;
			let firstPass = true;

			do {
				const converted = convert(search[MatchGroup.Quantity] as unknown as number, search[MatchGroup.Unit] as any).to(
					best && !firstPass ? (resolvedUnit! as any) : (unit as any)
				) as number | BestConversion<number, BestUnits>;

				if (best && firstPass) {
					result += (converted as BestConversion<number, BestUnits>).quantity;
					resolvedUnit = (converted as BestConversion<number, BestUnits>).unit;
					firstPass = false;
				} else {
					result += converted as number;
				}

				search = splitExpression.exec(value);
			} while (search);

			if (best) {
				// @ts-expect-error
				return convert(result, resolvedUnit).to('best');
			}

			return result;
		}
	} as Converter<number, Unit>;
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
