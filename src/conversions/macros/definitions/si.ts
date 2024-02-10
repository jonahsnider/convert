import type { Macro } from '../types.js';

export const si: Macro = [
	{ prefix: 'peta', symbol: 'P', value: 1e15, kind: 'big' },
	{ prefix: 'tera', symbol: 'T', value: 1e12, kind: 'big' },
	{ prefix: 'giga', symbol: 'G', value: 1e9, kind: 'big' },
	{ prefix: 'mega', symbol: 'M', value: 1e6, kind: 'big' },
	{ prefix: 'kilo', symbol: 'k', value: 1e3, kind: 'big' },
	{ prefix: 'hecto', symbol: 'h', value: 1e2, kind: 'big' },
	{ prefix: 'deca', symbol: 'da', value: 1e1, kind: 'big' },
	{ prefix: 'deci', symbol: 'd', value: 1e-1, kind: 'small' },
	{ prefix: 'centi', symbol: 'c', value: 1e-2, kind: 'small' },
	{ prefix: 'milli', symbol: 'm', value: 1e-3, kind: 'small' },
	{ prefix: 'micro', symbol: ['μ', 'µ'], value: 1e-6, kind: 'small' },
	{ prefix: 'nano', symbol: 'n', value: 1e-9, kind: 'small' },
	{ prefix: 'pico', symbol: 'p', value: 1e-12, kind: 'small' },
	{ prefix: 'femto', symbol: 'f', value: 1e-15, kind: 'small' },
];
