import {time} from './conversions/time';
import {length} from './conversions/length';
import invariant from 'tiny-invariant';

/**
 * A conversion between a unit.
 */
export interface Unit<T> {
	/**
	 * The base unit.
	 * @example 'grams'
	 */
	base: T[];
	/** The conversion ratios for this unit. */
	conversions: Record<string, number>;
}

export const conversions: Array<Unit<unknown>> = [time, length];

/**
 * Get the conversion ratio to the base unit of a `Unit`
 * @example
 * ```ts
 * const time = {base: ['seconds'], conversions: {minutes: 1 / 60}}
 *
 * conversionRatio(time, 'minutes');
 * // 1 / 60
 * ```
 */
function conversionRatio(unit: Unit<unknown>, conversion: string): number {
	const ratio = unit.base.includes(conversion) ? 1 : unit.conversions[conversion];

	invariant(ratio, `No conversion could be found for ${conversion}`);

	return ratio;
}

/**
 * Convert from one unit to another.
 * @example convert(360).from('seconds').to('minutes');
 */
export function convert(
	quantity: bigint | number
): {
	/** The unit you are converting from. */
	from: (
		fromUnit: string
	) => {
		/** The unit you are converting to. This should be in the same category as the unit you supplied to `from`. */
		to: (toUnit: string) => typeof quantity;
	};
} {
	let from: string;
	let to: string;

	return {
		from: (fromUnit: string) => {
			from = fromUnit;

			const _unit = conversions.find(conversion => conversion.base.includes(from) || Object.keys(conversion.conversions).includes(from));

			invariant(_unit, `No conversion could be found for ${from}`);

			const fromRatio = conversionRatio(_unit, from);

			return {
				to: (toUnit: string) => {
					to = toUnit;

					if (to === from) {
						return quantity;
					}

					const toRatio = conversionRatio(_unit, to);

					const combinedRatio = (1 / fromRatio) * toRatio;

					if (typeof quantity === 'bigint') {
						// Note: BigInt support only works when you are converting integers (obviously)
						// If you tried converting 30 seconds into minutes it would fail since 0.5 minutes is not an integer
						return quantity * BigInt(combinedRatio);
					}

					return quantity * combinedRatio;
				}
			};
		}
	};
}
