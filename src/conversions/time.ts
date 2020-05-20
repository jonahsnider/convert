import {Unit} from '..';
import {siPrefix} from '../util';

/** Base unit for time. */
export type TimeBase = 'second' | 'seconds' | 's';

/** Conversions for time. */
export const time: Unit<TimeBase> = {
	base: ['second', 'seconds', 's'],
	conversions: [
		{aliases: ['century', 'centuries', 'c'], ratio: 1 / 3.1556952e9},
		{aliases: ['day', 'days', 'd'], ratio: 1 / (60 * 60 * 24)},
		{aliases: ['decade', 'decades', 'dec'], ratio: 1 / 315.56952e6},
		{aliases: ['fortnight', 'fortnights', 'fn'], ratio: 1 / 1.2096e6},
		{aliases: ['helek', 'halakim'], ratio: 1 / (3 + 1 / 3)},
		{aliases: ['hour', 'hours', 'h'], ratio: 1 / (60 * 60)},
		{aliases: ['jiffy', 'jiffies', 'j'], ratio: 60},
		{aliases: ['ja'], ratio: 100},
		{aliases: ['ke'], ratio: 1 / (15 * 60)},
		{aliases: ['millennium', 'millennia'], ratio: 1 / 31.556952e9},
		{aliases: ['milliday', 'millidays', 'md'], ratio: 1 / ((60 * 60 * 24) / 1e3)},
		{aliases: ['minute', 'minutes', 'min'], ratio: 1 / 60},
		{aliases: ['moment', 'moments'], ratio: 1 / 90},
		{aliases: ['month', 'months', 'mo'], ratio: 1 / 2.592e6},
		{aliases: ['shake', 'shakes'], ratio: 1e8},
		{aliases: ['sigma', 'sigmas'], ratio: 1e6},
		{aliases: ['svedberg', 'svedbergs', 'S'], ratio: 1e13},
		{aliases: ['week', 'weeks', 'wk'], ratio: 1 / (60 * 60 * 24 * 7)},
		{aliases: ['year', 'years', 'a', 'y', 'yr'], ratio: 1 / 31.536e6},
		...siPrefix<TimeBase>({full: 'second', symbol: 's'})
	]
};
