import {Unit} from '..';

/** Base unit for lengths; */
export type LengthBase = 'meter' | 'metre' | 'm';

/** Conversions for time. */
export const length: Unit<LengthBase> = {
	base: ['meter', 'metre', 'm'],
	conversions: {minutes: 1 / 60, hours: 1 / 60 / 60, days: 1 / 60 / 60 / 24}
};
