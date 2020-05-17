import {Unit} from '..';

/** Base unit for time. */
export type TimeBase = 'seconds' | 's';

/** Conversions for time. */
export const time: Unit<TimeBase> = {
	base: ['seconds', 's'],
	conversions: {minutes: 1 / 60, hours: 1 / 60 / 60, days: 1 / 60 / 60 / 24}
};
