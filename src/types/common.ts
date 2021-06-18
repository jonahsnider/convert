import {UnitFamily} from '../util';

/**
 * A single unit conversion.
 *
 * @example
 * ```ts
 * [UnitFamily.Data, 1, 0];
 * ```
 */
export type Conversion = [family: UnitFamily, ratio: number, difference: number];
