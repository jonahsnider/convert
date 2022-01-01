import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

export const data: ReadonlyDeep<Family> = {
	id: Id.Data,
	best: ['bits', 'B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'],
	/**
	 * @see https://en.wikipedia.org/wiki/Orders_of_magnitude_(data) Source
	 */
	conversions: [
		{names: ['bit', 'bits'], symbols: ['b'], ratio: 1},

		...expandMacro(Macros.binary, {names: ['bit', 'bits'], symbols: ['b'], ratio: 1}),
		...expandMacro(Macros.si, {names: ['bit', 'bits'], symbols: ['b'], kind: 'big', ratio: 1}),

		{
			names: ['nibble', 'nibbles', 'semioctet', 'semioctets', 'halfbyte', 'halfbytes'],
			ratio: 4,
		},

		{names: ['byte', 'bytes', 'octect', 'octects'], symbols: ['B'], ratio: 8},
		...expandMacro(Macros.binary, {names: ['byte', 'bytes'], symbols: ['B'], ratio: 8}),
		...expandMacro(Macros.si, {names: ['byte', 'bytes'], symbols: ['B'], kind: 'big', ratio: 8}),

		{names: ['hextet', 'hextets'], ratio: 16},
	],
};
