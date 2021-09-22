import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Temperature;

export const best: BestConversions = ['C'];

/** @see https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature#Kelvin */
export const conversions: ConversionGroup = [
	{names: ['kelvin', 'kelvins'], symbols: ['K'], ratio: 1},

	{names: ['fahrenheit'], symbols: ['F'], ratio: 5 / 9, difference: 459.67},
	{names: ['celsius'], symbols: ['C'], ratio: 1, difference: 273.15},
	{names: ['rankine'], symbols: ['R'], ratio: 5 / 9}
];

/** This is like a `Set` of aliases except it's an object, so we can use the `in` keyword (ES3 compatibility). */
export const kelvinsAliases: Record<string, unknown> = {
	K: 0,
	Kelvin: 0,
	kelvins: 0
};
