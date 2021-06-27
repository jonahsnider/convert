import {BestConversions, ConversionFamilyIndex, ConversionGroup} from '../types/common';

export const id = ConversionFamilyIndex.Data;

export const best: BestConversions = ['bits', 'B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

/**
 * @see https://en.wikipedia.org/wiki/Orders_of_magnitude_(data) Source
 */
export const conversions: ConversionGroup = [
	{names: ['bit', 'bits', 'unibit', 'unibits'], symbols: ['b'], ratio: 1},

	{names: ['bit', 'bits'], symbols: ['b'], prefix: 'binary', ratio: 1},
	{names: ['bit', 'bits'], symbols: ['b'], prefix: 'si', kind: 'big', ratio: 1},

	{names: ['crumb', 'crumbs', 'dibit', 'dibits'], ratio: 2},
	{names: ['triad', 'triads', 'triade', 'triades', 'tribit', 'tribits'], ratio: 3},
	{
		names: [
			'nibble',
			'nibbles',
			'tetrad',
			'tetrads',
			'tetrade',
			'tetrades',
			'quadbit',
			'quadbits',
			'semioctet',
			'semioctets',
			'halfbyte',
			'halfbytes',
			'quartet',
			'quartets'
		],
		ratio: 4
	},
	{names: ['pentad', 'pentads'], ratio: 5},
	{names: ['hexad', 'hexads', 'hexade', 'hexades', 'sextet', 'sextets'], ratio: 6},
	{names: ['heptad', 'heptads', 'heptade', 'heptades'], ratio: 7},

	{names: ['byte', 'bytes', 'octect', 'octects', 'octad', 'octads', 'octade', 'octades'], symbols: ['B'], ratio: 8},
	{names: ['byte', 'bytes'], symbols: ['B'], prefix: 'binary', ratio: 8},
	{names: ['byte', 'bytes'], symbols: ['B'], prefix: 'si', kind: 'big', ratio: 8},

	{names: ['slab', 'slabs'], ratio: 12},
	{names: ['hextet', 'hextets'], ratio: 16},
	{names: ['catena', 'catenas'], ratio: 24}
];
