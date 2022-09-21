import type {Macro} from '../types.js';

export const areaSi: Macro = [
	{prefix: 'square peta', symbol: 'P', value: 1e30, kind: 'big'},
	{prefix: 'square tera', symbol: 'T', value: 1e24, kind: 'big'},
	{prefix: 'square giga', symbol: 'G', value: 1e18, kind: 'big'},
	{prefix: 'square mega', symbol: 'M', value: 1e12, kind: 'big'},
	{prefix: 'square kilo', symbol: 'k', value: 1e6, kind: 'big'},
	{prefix: 'square hecto', symbol: 'h', value: 1e4, kind: 'big'},
	{prefix: 'square deca', symbol: 'da', value: 1e2, kind: 'big'},
	{prefix: 'square deci', symbol: 'd', value: 1e-1, kind: 'small'},
	{prefix: 'square centi', symbol: 'c', value: 1e-4, kind: 'small'},
	{prefix: 'square milli', symbol: 'm', value: 1e-6, kind: 'small'},
	{prefix: 'square micro', symbol: 'μ', value: 1e-12, kind: 'small'},
	{prefix: 'square nano', symbol: 'n', value: 1e-18, kind: 'small'},
	{prefix: 'square pico', symbol: 'p', value: 1e-24, kind: 'small'},
	{prefix: 'square femto', symbol: 'f', value: 1e-30, kind: 'small'},
];
