import {expandMacro, Macros} from '../generate/macros';
import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Pressure;

export const best: BestConversions = ['Pa'];

export const conversions: ConversionGroup = [
	{names: ['pascal', 'pascals'], symbols: ['Pa'], ratio: 1},
	...expandMacro(Macros.si, {names: ['pascal', 'pascals'], symbols: ['Pa'], ratio: 1}),

	{names: ['bar', 'bars'], symbols: ['bar'], ratio: 1e5},
	...expandMacro(Macros.si, {names: ['bar', 'bars'], symbols: ['bar'], ratio: 1e5}),

	{names: ['torr', 'torrs'], symbols: ['Torr'], ratio: 101325 / 760},
	{names: ['millitorr'], symbols: ['mTorr'], ratio: 101325 / 760 / 1e3},

	{names: ['atmopshere', 'atmospheres'], symbols: ['atm'], ratio: 101325}
];
