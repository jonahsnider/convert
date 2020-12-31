import {unitFamilies} from '../util';

export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

/**
 * A single unit.
 * @example
 * ```ts
 * [UnitFamilies.Data, 1, 0];
 * ```
 */
export type Unit = [family: typeof unitFamilies[keyof typeof unitFamilies], ratio: number, difference: number];
