import {Unit} from '../../types/common';
import {prefixer} from '../util';

/** Base unit for time. */
export type TimeBase = 'second' | 'seconds' | 's';

/** Conversions for time. */
export const time: Unit<TimeBase> = {
	base: ['second', 'seconds', 's'] as const,
	conversions: [
		{aliases: ['century', 'centuries', 'c'] as const, ratio: 1 / 3.1556952e9},
		{aliases: ['day', 'days', 'd'] as const, ratio: 1 / (60 * 60 * 24)},
		{aliases: ['decade', 'decades', 'dec'] as const, ratio: 1 / 315.56952e6},
		{aliases: ['fortnight', 'fortnights', 'fn'] as const, ratio: 1 / 1.2096e6},
		{aliases: ['helek', 'halakim'] as const, ratio: 1 / (3 + 1 / 3)},
		{aliases: ['hour', 'hours', 'h'] as const, ratio: 1 / (60 * 60)},
		{aliases: ['jiffy', 'jiffies', 'j'] as const, ratio: 60},
		{aliases: ['ja'] as const, ratio: 100},
		{aliases: ['ke'] as const, ratio: 1 / (15 * 60)},
		{aliases: ['millennium', 'millennia'] as const, ratio: 1 / 31.556952e9},
		{aliases: ['milliday', 'millidays', 'md'] as const, ratio: 1 / ((60 * 60 * 24) / 1e3)},
		{aliases: ['minute', 'minutes', 'min'] as const, ratio: 1 / 60},
		{aliases: ['moment', 'moments'] as const, ratio: 1 / 90},
		{aliases: ['month', 'months', 'mo'] as const, ratio: 1 / 2.592e6},
		{aliases: ['shake', 'shakes'] as const, ratio: 1e8},
		{aliases: ['sigma', 'sigmas'] as const, ratio: 1e6},
		{aliases: ['svedberg', 'svedbergs', 'S'] as const, ratio: 1e13},
		{aliases: ['week', 'weeks', 'wk'] as const, ratio: 1 / (60 * 60 * 24 * 7)},
		{aliases: ['year', 'years', 'a', 'y', 'yr'] as const, ratio: 1 / 31.536e6},
		...prefixer<TimeBase>({full: 'second', symbol: 's'})
	] as const
};
