import {Unit} from '..';
import {siPrefix} from '../util';

/** Base unit for lengths; */
export type LengthBase = 'meter' | 'metre' | 'm';

/** Conversions for time. */
export const length: Unit<LengthBase> = {
	base: ['meter', 'metre', 'm'],
	conversions: siPrefix({full: 'meter', symbol: 'm'})
};
