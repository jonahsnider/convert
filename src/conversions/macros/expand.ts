import BigNumber from 'bignumber.js';
import { MeasureEntry } from '../types.js';
import type { UnitGroup } from './types.js';

type MacroOptions = {
	names: string[];
	symbols: string[];
	ratio: number | BigNumber;
	kind?: 'big' | 'small';
};

export function expandMacro(macro: UnitGroup[], unit: MacroOptions): MeasureEntry[] {
	const output: MeasureEntry[] = [];

	for (const unitGroup of macro) {
		const macroSymbols = Array.isArray(unitGroup.symbol) ? unitGroup.symbol : [unitGroup.symbol];
		const conversion: MeasureEntry = {
			names: unit.names.map((name) => `${unitGroup.prefix}${name}`),
			symbols: unit.symbols.flatMap((symbol) => macroSymbols.map((macroSymbol) => `${macroSymbol}${symbol}`)),
			ratio: new BigNumber(unit.ratio).times(unitGroup.value),
		};
		output.push(conversion);
	}

	return output;
}
