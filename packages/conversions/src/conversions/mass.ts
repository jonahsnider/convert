import BigNumber from 'bignumber.js';
import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

const poundInGrams = new BigNumber(4.535_923_7e2);

export const mass: ReadonlyDeep<Family> = {
	id: Id.Mass,
	best: {
		metric: ['mg', 'g', 'kg'],
		imperial: ['oz', 'lb'],
	},
	conversions: [
		{names: ['gram', 'grams'], symbols: ['g'], ratio: 1},
		...expandMacro(Macros.si, {names: ['gram', 'grams'], symbols: ['g'], ratio: 1}),

		{names: ['tonne', 'tonnes', 'metric ton', 'metric tons'], symbols: ['t'], ratio: 1e6},
		{names: ['kilotonne', 'kilotonnes'], symbols: ['kt'], ratio: 1e9},
		{names: ['megatonne', 'megatonnes'], symbols: ['Mt'], ratio: 1e12},
		{names: ['gigatonne', 'gigatonnes'], symbols: ['Gt'], ratio: 1e15},

		{names: ['pound', 'pounds'], symbols: ['lb'], ratio: poundInGrams},
		{names: ['stone', 'stones'], symbols: ['st'], ratio: poundInGrams.times(14)},
		// TODO: Remove ℥ on next breaking release
		{names: ['ounce', 'ounces'], symbols: ['oz', '℥'], ratio: poundInGrams.div(16)},
		{names: ['short ton', 'short tons', 'US ton', 'US tons'], ratio: poundInGrams.times(2000)},
		{names: ['long ton', 'long tons', 'imperial ton', 'imperial tons', 'displacement ton', 'displacement tons'], ratio: poundInGrams.times(2240)},
	],
};
