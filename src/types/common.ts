import {unitFamilies} from '../util';

export interface ConverterBody<T, Q> {
	/**
	 * Convert a unit to the provided unit.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	to(to: T): Q;
}

/**
 * A single unit.
 *
 * @example
 * ```ts
 * [UnitFamilies.Data, 1, 0];
 * ```
 */
export type Unit = [family: typeof unitFamilies[keyof typeof unitFamilies], ratio: number, difference: number];
