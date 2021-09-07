import {expandMacro, Macros} from '../generate/macros';
import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Data;

export const best: BestConversions = ['bits', 'B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

/**
 * @see https://en.wikipedia.org/wiki/Orders_of_magnitude_(data) Source
 */
export const conversions: ConversionGroup = [
	{names: ['bit', 'bits'], symbols: ['b'], ratio: 1},

	...expandMacro(Macros.binary, {names: ['bit', 'bits'], symbols: ['b'], ratio: 1}),
	...expandMacro(Macros.binary, {names: ['bit', 'bits'], symbols: ['b'], kind: 'big', ratio: 1}),

	{
		names: ['nibble', 'nibbles', 'semioctet', 'semioctets', 'halfbyte', 'halfbytes'],
		ratio: 4
	},

	{names: ['byte', 'bytes', 'octect', 'octects'], symbols: ['B'], ratio: 8},
	...expandMacro(Macros.binary, {names: ['byte', 'bytes'], symbols: ['B'], ratio: 8}),
	...expandMacro(Macros.si, {names: ['byte', 'bytes'], symbols: ['B'], kind: 'big', ratio: 8}),

	{names: ['hextet', 'hextets'], ratio: 16}
];
