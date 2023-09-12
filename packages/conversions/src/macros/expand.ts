import BigNumber from 'bignumber.js';
import type {Numeric, Conversion} from '../index.js';
import type {UnitGroup} from './types.js';

type MacroOptions = {
	readonly names: readonly string[];
	readonly symbols: readonly string[];
	readonly ratio: Numeric;
	readonly kind?: 'big' | 'small';
};

export function expandMacro(macro: ReadonlyArray<Readonly<UnitGroup>>, unit: MacroOptions): Conversion[] {
	const conversions: Conversion[] = [];

	for (const unitGroup of macro) {
		const macroSymbols = Array.isArray(unitGroup.symbol) ? unitGroup.symbol : [unitGroup.symbol];
		const conversion: Conversion = {
			names: unit.names.map(name => `${unitGroup.prefix}${name}`),
			symbols: unit.symbols.flatMap(symbol => macroSymbols.map(macroSymbol => `${macroSymbol}${symbol}`)),
			ratio: new BigNumber(unit.ratio).times(unitGroup.value),
		};
		conversions.push(conversion);
	}

	return conversions;
}
