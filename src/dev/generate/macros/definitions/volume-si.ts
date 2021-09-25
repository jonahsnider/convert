import {Macro} from '../expand';

const volumeSi: Macro = [
	{prefix: 'cubic peta', symbol: 'P', value: 1e15, kind: 'big'},
	{prefix: 'cubic tera', symbol: 'T', value: 1e12, kind: 'big'},
	{prefix: 'cubic giga', symbol: 'G', value: 1e9, kind: 'big'},
	{prefix: 'cubic mega', symbol: 'M', value: 1e6, kind: 'big'},
	{prefix: 'cubic kilo', symbol: 'k', value: 1e3, kind: 'big'},
	{prefix: 'cubic hecto', symbol: 'h', value: 1e2, kind: 'big'},
	{prefix: 'cubic deca', symbol: 'da', value: 1e1, kind: 'big'},
	{prefix: 'cubic deci', symbol: 'd', value: 1e-1, kind: 'small'},
	{prefix: 'cubic centi', symbol: 'c', value: 1e-2, kind: 'small'},
	{prefix: 'cubic milli', symbol: 'm', value: 1e-3, kind: 'small'},
	{prefix: 'cubic micro', symbol: 'μ', value: 1e-6, kind: 'small'},
	{prefix: 'cubic nano', symbol: 'n', value: 1e-9, kind: 'small'},
	{prefix: 'cubic pico', symbol: 'p', value: 1e-12, kind: 'small'},
	{prefix: 'cubic femto', symbol: 'f', value: 1e-15, kind: 'small'},
];

export default volumeSi;
