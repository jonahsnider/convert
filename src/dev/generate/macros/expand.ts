import Decimal from 'decimal.js';
import type {Conversion, Numeric} from '../../types/common';

interface UnitGroup {
	prefix: string;
	symbol: string;
	value: Numeric;
	kind: 'big' | 'small';
}

export type Macro = UnitGroup[];

interface MacroOptions {
	names: string[];
	symbols: string[];
	ratio: Numeric;
	kind?: 'big' | 'small';
}

export function expandMacro(macro: UnitGroup[], unit: MacroOptions): Conversion[] {
	return macro.map(unitGroup => ({
		names: unit.names.map(name => `${unitGroup.prefix}${name}`),
		symbols: unit.symbols.map(symbol => `${unitGroup.symbol}${symbol}`),
		ratio: new Decimal(unit.ratio).times(unitGroup.value).toNumber(),
	}));
}
