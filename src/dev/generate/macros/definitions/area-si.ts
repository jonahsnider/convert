import type {Macro} from '../expand.js';

const areaSi: Macro = [
	{prefix: 'square peta', symbol: 'P', value: 1e15, kind: 'big'},
	{prefix: 'square tera', symbol: 'T', value: 1e12, kind: 'big'},
	{prefix: 'square giga', symbol: 'G', value: 1e9, kind: 'big'},
	{prefix: 'square mega', symbol: 'M', value: 1e6, kind: 'big'},
	{prefix: 'square kilo', symbol: 'k', value: 1e3, kind: 'big'},
	{prefix: 'square hecto', symbol: 'h', value: 1e2, kind: 'big'},
	{prefix: 'square deca', symbol: 'da', value: 1e1, kind: 'big'},
	{prefix: 'square deci', symbol: 'd', value: 1e-1, kind: 'small'},
	{prefix: 'square centi', symbol: 'c', value: 1e-2, kind: 'small'},
	{prefix: 'square milli', symbol: 'm', value: 1e-3, kind: 'small'},
	{prefix: 'square micro', symbol: 'μ', value: 1e-6, kind: 'small'},
	{prefix: 'square nano', symbol: 'n', value: 1e-9, kind: 'small'},
	{prefix: 'square pico', symbol: 'p', value: 1e-12, kind: 'small'},
	{prefix: 'square femto', symbol: 'f', value: 1e-15, kind: 'small'},
];

export default areaSi;
