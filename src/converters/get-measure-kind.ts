import type { MeasureKind } from '../conversions/types';
import { unitsObject } from '../generated/parse-unit';
import type { MeasureKindByUnit, Unit } from '../types/units';

/**
 * Get the {@link MeasureKind} associated with a unit.
 *
 * @example
 * ```ts
 * getMeasure('m'); // MeasureKind.Length
 * ```
 * @example
 * ```ts
 * getMeasure('invalid'); // undefined
 * ```
 *
 * @param unit - The unit you want to get the measure kind of
 * @returns The {@link MeasureKind} corresponding to this unit of measure, or `undefined` if the unit is invalid
 *
 * @public
 */
export function getMeasureKind<U extends Unit>(unit: U): MeasureKindByUnit<U>;
/**
 * Get the {@link MeasureKind} associated with a unit.
 *
 * @example
 * ```ts
 * getMeasure('m'); // MeasureKind.Length
 * ```
 * @example
 * ```ts
 * getMeasure('invalid'); // undefined
 * ```
 *
 * @param unit - The unit you want to get the measure kind of
 * @returns The {@link MeasureKind} corresponding to this unit of measure, or `undefined` if the unit is invalid
 *
 * @public
 */
export function getMeasureKind(unit: string): MeasureKind | undefined;
export function getMeasureKind<U extends Unit>(unit: U): MeasureKindByUnit<U> | undefined {
	const unitObject = unitsObject[unit];

	if (unitObject) {
		return unitObject[0] as MeasureKindByUnit<U>;
	}

	// Needed to appease tsc
	return;
}
