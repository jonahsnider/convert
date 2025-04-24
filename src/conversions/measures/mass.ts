import BigNumber from 'bignumber.js';
import { expandMacro } from '../macros/expand';
import { Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

const poundInGrams = new BigNumber(4.535_923_7e2);

export const mass: Measure = {
	kind: MeasureKind.Mass,
	best: {
		metric: ['mg', 'g', 'kg'],
		imperial: ['oz', 'lb'],
	},
	units: [
		{ names: ['gram', 'grams'], symbols: ['g'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['gram', 'grams'], symbols: ['g'], ratio: 1 }),
		// https://en.wikipedia.org/wiki/Microgram
		{ names: [], symbols: ['mcg'], ratio: 1 / 1e6 },

		{ names: ['tonne', 'tonnes', 'metric ton', 'metric tons'], symbols: ['t'], ratio: 1e6 },
		{ names: ['kilotonne', 'kilotonnes'], symbols: ['kt'], ratio: 1e9 },
		{ names: ['megatonne', 'megatonnes'], symbols: ['Mt'], ratio: 1e12 },
		{ names: ['gigatonne', 'gigatonnes'], symbols: ['Gt'], ratio: 1e15 },

		{ names: ['pound', 'pounds'], symbols: ['lb', 'lbs'], ratio: poundInGrams },
		{ names: ['stone', 'stones'], symbols: ['st'], ratio: poundInGrams.times(14) },
		{ names: ['ounce', 'ounces'], symbols: ['oz'], ratio: poundInGrams.div(16) },
		{ names: ['short ton', 'short tons', 'US ton', 'US tons'], ratio: poundInGrams.times(2000) },
		{
			names: ['long ton', 'long tons', 'imperial ton', 'imperial tons', 'displacement ton', 'displacement tons'],
			ratio: poundInGrams.times(2240),
		},

		// https://en.wikipedia.org/wiki/Troy_weight
		{ names: ['troy ounce'], symbols: ['oz t', 'toz'], ratio: 31.1034768 },
	],
};
