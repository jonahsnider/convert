import {expandMacro, Macros} from '../generate/macros';
import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Time;

export const best: BestConversions = ['ns', 'μs', 'ms', 's', 'min', 'h', 'd', 'y'];

export const conversions: ConversionGroup = [
	{names: ['second', 'seconds'], symbols: ['s'], ratio: 1},
	...expandMacro(Macros.si, {names: ['second', 'seconds'], symbols: ['s'], ratio: 1}),

	{names: ['minute', 'minutes'], symbols: ['min'], ratio: 60},
	{names: ['hour', 'hours'], symbols: ['h'], ratio: 60 * 60},
	{names: ['milliday', 'millidays'], symbols: ['md'], ratio: (60 * 60 * 24) / 1e3},
	{names: ['day', 'days'], symbols: ['d'], ratio: 60 * 60 * 24},
	{names: ['week', 'weeks'], symbols: ['wk'], ratio: 60 * 60 * 24 * 7},
	{names: ['fortnight', 'fortnights'], symbols: ['fn'], ratio: 60 * 60 * 24 * 14},
	{names: ['month', 'months'], symbols: ['mo'], ratio: 2.592e6},
	{names: ['year', 'years'], symbols: ['a', 'y', 'yr'], ratio: 3.1536e7},
	{names: ['decade', 'decades'], symbols: ['dec'], ratio: 3.1556952e8},
	// Symbol `c` is excluded to avoid conflict
	{names: ['century', 'centuries'], ratio: 3.1556952e9},
	{names: ['millennium', 'millennia'], ratio: 3.1556952e10},

	{names: ['moment', 'moments'], ratio: 90},
	{names: ['shake', 'shakes'], ratio: 1e-8},
	{names: ['time unit'], symbols: ['TU'], ratio: 1024e-6},
	{names: ['svedberg', 'svedbergs'], symbols: ['S'], ratio: 1e-13},
];
