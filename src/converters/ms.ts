import { MeasureKind } from '../conversions/types.js';
import { BestUnitsForMeasure } from '../types/units.js';
import { LiteralToPrimitive } from '../types/utils.js';
import { convertMany } from './convert-many.js';
import { convert } from './convert.js';

/**
 * Convert a given duration of milliseconds to a string that best represents it.
 *
 * If you are very concerned about performance you should use the {@link convertMany} function directly.
 *
 * @example
 * ```ts
 * ms(-3 * 60000); // '-3min'
 * ```
 *
 * @param quantity - Duration of milliseconds to convert
 *
 * @returns A duration string
 *
 * @public
 */
export function ms<Q extends number | bigint>(
	quantity: Q,
): `${LiteralToPrimitive<Q>}${BestUnitsForMeasure<MeasureKind.Time>}`;
/**
 * Convert a duration string to a duration in milliseconds.
 *
 * If you are very concerned about performance you should use the {@link convertMany} function directly.
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
 * @public
 */
export function ms(value: string): number;
export function ms<Q extends number | bigint>(
	value: Q | string,
): number | `${LiteralToPrimitive<Q>}${BestUnitsForMeasure<MeasureKind.Time>}` {
	if (typeof value === 'string') {
		return convertMany(value).to('ms');
	}

	return convert(value, 'ms').to('best').toString();
}
