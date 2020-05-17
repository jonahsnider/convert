import {Unit} from '..';

/** Base unit for time. */
export type TimeBase = 'second' | 's';

/** Conversions for time. */
export const time: Unit<TimeBase> = {
	base: ['second', 's'],
	conversions: {
		century: 1 / (3.1556952 * 10e8),
		day: 1 / (86.4 * 10e2),
		decade: 1 / (315.56952 * 10e5),
		fortnight: 1 / (1.2096 * 10e5),
		hour: 1 / 60 / 60,
		jiffy: 1 / 60,
		millenium: 1 / (31.556952 * 10e8),
		milliday: 1 / 86.4,
		minute: 1 / 60,
		month: 1 / (2.592 * 10e6),
		week: 1 / (604.8 * 10e2),
		year: 1 / (31.536 * 1e6)
	}
};
