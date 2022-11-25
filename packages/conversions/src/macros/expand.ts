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
	return macro.map(unitGroup => ({
		names: unit.names.map(name => `${unitGroup.prefix}${name}`),
		symbols: unit.symbols.map(symbol => `${unitGroup.symbol}${symbol}`),
		ratio: new BigNumber(unit.ratio).times(unitGroup.value),
	}));
}
