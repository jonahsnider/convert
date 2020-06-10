import {Unit} from '../convert';
import {siPrefix} from '../util';

/**
 * Base unit for lengths;
 * @private
 */
export type LengthBase = Readonly<'meter' | 'metre' | 'm'>;

/**
 * Conversions for time.
 * @private
 */
export const length: Unit<LengthBase> = {
	base: ['meter', 'metre', 'm'] as const,
	conversions: siPrefix({full: 'meter', symbol: 'm'})
};
