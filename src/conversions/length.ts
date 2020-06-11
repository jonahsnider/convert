import {Unit} from '../../types/common';
import {prefixer} from '../util';

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
	conversions: prefixer<LengthBase>({full: 'meter', symbol: 'm'})
};
