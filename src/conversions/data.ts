import {Unit} from '../../types/common';
import {binaryPrefixes, prefixer, siPrefixes} from '../util';

/**
 * Base unit for lengths;
 * @private
 */
export type BytesBase = Readonly<'byte' | 'bytes' | 'B'>;
type BitsBase = Readonly<'bit' | 'bits' | 'b'>;

/**
 * Conversions for data.
 * @private
 */
export const data: Unit<BytesBase> = {
	base: ['byte', 'bytes', 'B'] as const,
	conversions: [
		{aliases: ['bit', 'bits', 'b'], ratio: 1 / 8},
		{aliases: ['crumb', 'crumbs'], ratio: 1 / 4},
		{aliases: ['nibble', 'nibbles'], ratio: 1 / 2},
		{aliases: ['word', 'words'], ratio: 2},
		...prefixer<BytesBase>(
			{full: 'byte', symbol: 'B'},
			// None of the tiny prefixes
			siPrefixes.filter(prefix => prefix.ratio > 1)
		),
		...prefixer<BytesBase>({full: 'byte', symbol: 'B'}, binaryPrefixes),
		...prefixer<BitsBase>({full: 'bit', symbol: 'b'}, binaryPrefixes)
	]
};
