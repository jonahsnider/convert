import type {Macro} from '../expand.js';

/** @see https://en.wikipedia.org/wiki/Template:Bit_and_byte_prefixes Source */
const binary: Macro = [
	{prefix: 'pebi', symbol: 'Pi', value: 1024 ** 5, kind: 'big'},
	{prefix: 'tebi', symbol: 'Ti', value: 1024 ** 4, kind: 'big'},
	{prefix: 'gibi', symbol: 'Gi', value: 1024 ** 3, kind: 'big'},
	{prefix: 'mebi', symbol: 'Mi', value: 1024 ** 2, kind: 'big'},
	{prefix: 'kibi', symbol: 'Ki', value: 1024 ** 1, kind: 'big'},
];

export default binary;
