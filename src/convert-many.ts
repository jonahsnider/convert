import {assert} from './assert.js';
import {convert} from './convert.js';
import type {BestConversionKind} from './dev/types/common.js';
import type {BestConversion, BestUnits, Converter} from './types/common.js';
import type {Unit} from './types/units.js';

const enum MatchGroup {
	/** The entire match. */
	Full,
	/** The quantity of the unit. */
	Quantity,
	/** The unit. */
	Unit,
}

const splitExpression = /(-?(?:\d+)?\.?\d+)(\S+)/g;

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
		if (__DEV__) {
			throw new RangeError(`value did not match expression ${splitExpression.source}`);
		}

		throw new RangeError();
	}

	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return {
		to(unit: Unit | 'best', kind?: BestConversionKind | undefined) {
			assert(search);

			const best = unit === 'best';

			let result = 0;
			let resolvedUnit: BestUnits;
			let firstPass = true;

			do {
				const converted = convert(Number(search[MatchGroup.Quantity]), search[MatchGroup.Unit] as any).to(
					best && !firstPass ? (resolvedUnit! as any) : (unit as any),
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
				return convert(result, resolvedUnit! as any).to('best', kind);
			}

			return result;
		},
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
 * ms('1d 2h 30min'); // 95400000
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
