import {Conversion} from '../../types/common';

interface UnitGroup {
	prefix: string;
	symbol: string;
	value: number;
	kind: 'big' | 'small';
}

export type Macro = UnitGroup[];

interface MacroOptions {
	names: string[];
	symbols: string[];
	ratio: number;
	kind?: 'big' | 'small';
}

export function expandMacro(macro: UnitGroup[], unit: MacroOptions): Conversion[] {
	return macro.map(unitGroup => ({
		names: unit.names.map(name => `${unitGroup.prefix}${name}`),
		symbols: unit.symbols.map(symbol => `${unitGroup.symbol}${symbol}`),
		ratio: unit.ratio * unitGroup.value
	}));
}
