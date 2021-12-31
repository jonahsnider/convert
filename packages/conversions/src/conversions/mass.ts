import Decimal from 'decimal.js';
import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

const poundInGrams = new Decimal(4.535_923_7e2);

/** @internal */
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
		...expandMacro(Macros.si, {names: ['gram', 'grams'], symbols: ['g'], ratio: 1}),

		{names: ['pound', 'pounds'], symbols: ['lb'], ratio: poundInGrams},
		{names: ['stone', 'stones'], symbols: ['st'], ratio: poundInGrams.times(14)},
		// TODO: Remove ℥ on next breaking release
		{names: ['ounce', 'ounces'], symbols: ['oz', '℥'], ratio: poundInGrams.div(16)},
		{names: ['short ton', 'short tons', 'US ton', 'US tons'], ratio: poundInGrams.times(2000)},
		{names: ['long ton', 'long tons', 'imperial ton', 'imperial tons', 'displacement ton', 'displacement tons'], ratio: poundInGrams.times(2240)},
	],
};
