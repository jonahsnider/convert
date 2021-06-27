import {BestConversions, ConversionFamilyIndex, ConversionGroup} from '../types/common';

export const id = ConversionFamilyIndex.Temperature;

export const best: BestConversions = ['C'];

export const conversions: ConversionGroup = [
	{names: ['kelvin', 'kelvins'], symbols: ['K'], ratio: 1},

	{names: ['fahrenheit'], symbols: ['F'], ratio: 5 / 9, difference: 273.15 - 32},
	{names: ['celsius'], symbols: ['C'], ratio: 1, difference: 273.15},
	{names: ['rankine'], symbols: ['R'], ratio: 5 / 9},
	{names: ['delisle'], symbols: ['De'], ratio: 2 / -3, difference: 373.15}
];
