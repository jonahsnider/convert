import {BestConversions, ConversionFamilyIndex, ConversionGroup} from '../types/common';

export const id = ConversionFamilyIndex.Mass;

export const best: BestConversions = ['mg', 'g', 'kg'];

const poundInGrams = 4.5359237e2;

export const conversions: ConversionGroup = [
	{names: ['gram', 'grams'], symbols: ['g'], ratio: 1},
	{names: ['gram', 'grams'], symbols: ['g'], prefix: 'si', ratio: 1},

	{names: ['tonne', 'tonnes', 'metric ton', 'metric tons'], symbols: ['t'], ratio: 1e6},
	{names: ['gram', 'grams'], symbols: ['g'], prefix: 'si', ratio: 1},

	{names: ['pound', 'pounds'], symbols: ['lb'], ratio: poundInGrams},
	{names: ['stone', 'stones'], symbols: ['st'], ratio: poundInGrams * 14},
	{names: ['ounce', 'ounces'], symbols: ['oz', '℥'], ratio: poundInGrams / 16},
	{names: ['short ton', 'short tons', 'us ton', 'us tons'], ratio: poundInGrams * 2000},
	{names: ['long ton', 'long tons', 'imperial ton', 'imperial tons', 'displacement ton', 'displacement tons'], ratio: poundInGrams * 2240}
];
