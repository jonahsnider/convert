import {unitFamily} from '../util';

/**
 * A single unit conversion.
 *
 * @example
 * ```ts
 * [UnitFamilies.Data, 1, 0];
 * ```
 */
export type Conversion = [family: typeof unitFamily[keyof typeof unitFamily], ratio: number, difference: number];
