import invariant from 'tiny-invariant';
import {ReadonlyDeep} from 'type-fest';
import {length} from './conversions/length';
import {time} from './conversions/time';
import {AllUnits} from '../types/units';

/**
 * A conversion between a unit.
 */
export interface Unit<T = unknown> {
	/**
	 * The base unit.
	 * @example ['second', 'seconds', 's']
	 */
	base: Array<T>;
	/** The conversion ratios for this unit. */
	conversions: Array<{
		/**
		 * Aliases for this ratio.
		 * @example ['minute', 'minutes', 'm']
		 */
		aliases: Array<string>;
		/**
		 * The ratio as expressed in units of the base unit. For example, you express `1` second in minutes as `1 / 60` minutes.
		 * @example 1 / 60
		 */
		ratio: number;
	}>;
}

export const unitFamilies: Record<string, Unit<unknown>> = {time, length};

/** Families of units, like length or time. */
export const families = Object.values(unitFamilies);

/**
 * Get the conversion ratio to the base unit of a `Unit`
 * @param unit The unit to get the conversion ratio from
 * @param desiredConversion The conversion you are looking for
 *
 * @example
 * ```ts
 * conversionRatio(time, 'minutes');
 * // 1 / 60
 * ```
 */
function conversionRatio(unit: ReadonlyDeep<Unit>, desiredConversion: Readonly<string>): number {
	if (unit.base.includes(desiredConversion)) {
		return 1;
	}

	const found = unit.conversions.find(conversion => conversion.aliases.includes(desiredConversion));

	if (found) {
		return found.ratio;
	}

	const ratio = unit.base.includes(desiredConversion) ? 1 : unit.conversions.find(conversion => conversion.aliases.includes(desiredConversion))?.ratio;

	if (ratio !== undefined) {
		return ratio;
	}

	throw new Error(`No conversion could be found for ${desiredConversion}`);
}

/**
 * Convert from one unit to another.
 * @example convert(360).from('seconds').to('minutes');
 */
export function convert(
	quantity: Readonly<bigint | number>
): {
	/** The unit you are converting from. */
	from: (
		fromUnit: Readonly<AllUnits>
	) => {
		/** The unit you are converting to. This should be in the same category as the unit you supplied to `from`. */
		// @Jdender
		// This `typeof` statement returns `AllUnits`, meaning you can still convert time into distance (not good)
		// Any idea how to get the subvalue?
		// ex. you pass in 'seconds', which belongs to `ValidTimeUnits`, so this parameter must also belong to `ValidTimeUnits`
		to: (toUnit: Readonly<typeof fromUnit>) => typeof quantity;
	};
} {
	let from: string;
	let to: string;

	return {
		from: (fromUnit: Readonly<string>) => {
			from = fromUnit;

			const _unit = families.find(type => type.base.includes(from) || type.conversions.find(conversion => conversion.aliases.includes(from)));

			invariant(_unit, `No conversion could be found for ${from}`);

			const fromRatio = conversionRatio(_unit, from);

			return {
				to: (toUnit: Readonly<string>) => {
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
