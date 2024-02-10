import type { Macro } from '../types.js';

export const volumeSi: Macro = [
	{ prefix: 'cubic peta', symbol: 'P', value: 1e45, kind: 'big' },
	{ prefix: 'cubic tera', symbol: 'T', value: 1e36, kind: 'big' },
	{ prefix: 'cubic giga', symbol: 'G', value: 1e27, kind: 'big' },
	{ prefix: 'cubic mega', symbol: 'M', value: 1e18, kind: 'big' },
	{ prefix: 'cubic kilo', symbol: 'k', value: 1e9, kind: 'big' },
	{ prefix: 'cubic hecto', symbol: 'h', value: 1e6, kind: 'big' },
	{ prefix: 'cubic deca', symbol: 'da', value: 1e3, kind: 'big' },
	{ prefix: 'cubic deci', symbol: 'd', value: 1e-3, kind: 'small' },
	{ prefix: 'cubic centi', symbol: 'c', value: 1e-6, kind: 'small' },
	{ prefix: 'cubic milli', symbol: 'm', value: 1e-9, kind: 'small' },
	{ prefix: 'cubic micro', symbol: ['μ', 'µ'], value: 1e-18, kind: 'small' },
	{ prefix: 'cubic nano', symbol: 'n', value: 1e-27, kind: 'small' },
	{ prefix: 'cubic pico', symbol: 'p', value: 1e-36, kind: 'small' },
	{ prefix: 'cubic femto', symbol: 'f', value: 1e-45, kind: 'small' },
];
