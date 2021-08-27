import {expandMacro, Macros} from '../generate/macros';
import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Length;

export const best: BestConversions = ['mm', 'cm', 'm', 'km'];

export const conversions: ConversionGroup = [
	{names: ['meter', 'meters', 'metre', 'metres'], symbols: ['m'], ratio: 1},
	...expandMacro(Macros.si, {names: ['meter', 'metre', 'meters', 'metres'], symbols: ['m'], ratio: 1}),

	{names: ['foot', 'feet'], symbols: ['ft'], ratio: 0.3048},
	{names: ['inch', 'inches'], symbols: ['in'], ratio: 0.0254},
	{names: ['yard', 'yards'], symbols: ['yd'], ratio: 0.9144},
	{names: ['mile', 'miles'], symbols: ['mi'], ratio: 1609.344},
	{names: ['nautical mile', 'nautical miles'], symbols: ['M', 'NM', 'nmi'], ratio: 1852}
];
