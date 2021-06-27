import {Conversion, ConversionFamily, NamedConversion, PrefixMacro} from '../types/common';
import * as Generated from '../types/generated';

export interface UnitGroup {
	prefix: string;
	symbol: string;
	value: number;
	kind: 'big' | 'small';
}

const siUnits: UnitGroup[] = [
	{prefix: 'peta', symbol: 'P', value: 1e15, kind: 'big'},
	{prefix: 'tera', symbol: 'T', value: 1e12, kind: 'big'},
	{prefix: 'giga', symbol: 'G', value: 1e9, kind: 'big'},
	{prefix: 'mega', symbol: 'M', value: 1e6, kind: 'big'},
	{prefix: 'kilo', symbol: 'k', value: 1e3, kind: 'big'},
	{prefix: 'hecto', symbol: 'h', value: 1e2, kind: 'big'},
	{prefix: 'deca', symbol: 'da', value: 1e1, kind: 'big'},
	{prefix: 'deci', symbol: 'd', value: 1e-1, kind: 'small'},
	{prefix: 'centi', symbol: 'c', value: 1e-2, kind: 'small'},
	{prefix: 'milli', symbol: 'm', value: 1e-3, kind: 'small'},
	{prefix: 'micro', symbol: 'μ', value: 1e-6, kind: 'small'},
	{prefix: 'nano', symbol: 'n', value: 1e-9, kind: 'small'},
	{prefix: 'pico', symbol: 'p', value: 1e-12, kind: 'small'},
	{prefix: 'femto', symbol: 'f', value: 1e-15, kind: 'small'}
];

const volumeSiUnits: UnitGroup[] = [
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
	{prefix: 'cubic femto', symbol: 'f', value: 1e-15, kind: 'small'}
];

/** @see https://en.wikipedia.org/wiki/Template:Bit_and_byte_prefixes Source */
const binarySiUnits: UnitGroup[] = [
	{prefix: 'pebi', symbol: 'Pi', value: 1024 ** 5, kind: 'big'},
	{prefix: 'tebi', symbol: 'Ti', value: 1024 ** 4, kind: 'big'},
	{prefix: 'gibi', symbol: 'Gi', value: 1024 ** 3, kind: 'big'},
	{prefix: 'mebi', symbol: 'Mi', value: 1024 ** 2, kind: 'big'},
	{prefix: 'kibi', symbol: 'Ki', value: 1024 ** 1, kind: 'big'}
];

export const prefixUnits = {si: siUnits, binary: binarySiUnits, volumeSi: volumeSiUnits};

export function generatePrefixes(macro: PrefixMacro): NamedConversion[] {
	const result: NamedConversion[] = [];
	const unitGroup = prefixUnits[macro.prefix];

	for (const unit of unitGroup) {
		if ('kind' in macro && macro.kind !== unit.kind) {
			continue;
		}

		result.push({
			names: macro.names.map(name => `${unit.prefix}${name}`),
			symbols: macro.symbols.map(symbol => `${unit.symbol}${symbol}`),
			ratio: macro.ratio === undefined ? unit.value : unit.value * macro.ratio
		});
	}

	return result;
}

export function applyPrefixes(conversionFamily: ConversionFamily): Generated.Conversions {
	const queue: Conversion[] = [];
	const conversions: Record<string, Conversion> = {};

	for (const conversion of Object.values(conversionFamily.conversions)) {
		if ('prefix' in conversion) {
			queue.push(...generatePrefixes(conversion));
		}
	}

	for (const conversion of queue) {
		const names: string[] = [];

		if ('names' in conversion) {
			names.push(...conversion.names);
		}

		if (conversion.symbols) {
			names.push(...conversion.symbols);
		}

		for (const generatedName of names) {
			conversions[generatedName] = conversion;
		}
	}

	const result: Generated.Conversions = {};

	for (const [key, value] of Object.entries(conversions)) {
		result[key] = [conversionFamily.id, value.ratio, value.difference ?? 0];
	}

	return result;
}
