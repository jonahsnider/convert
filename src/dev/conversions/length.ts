import {BestConversions, ConversionFamilyIndex, ConversionGroup} from '../types/common';

export const id = ConversionFamilyIndex.Length;

export const best: BestConversions = ['mm', 'cm', 'm', 'km'];

export const conversions: ConversionGroup = [
	{names: ['meter', 'meters', 'metre', 'metres'], symbols: ['m'], ratio: 1},
	{names: ['meter', 'metre', 'meters', 'metres'], symbols: ['m'], prefix: 'si', ratio: 1},

	{names: ['foot', 'feet'], symbols: ['ft'], ratio: 0.3048},
	{names: ['inch', 'inches'], symbols: ['in'], ratio: 0.0254},
	{names: ['yard', 'yards'], symbols: ['yd'], ratio: 0.9144},
	{names: ['mile', 'miles'], symbols: ['mi'], ratio: 1609.344},
	{names: ['nautical mile', 'nautical miles'], symbols: ['M', 'NM', 'nmi'], ratio: 1852}
];
