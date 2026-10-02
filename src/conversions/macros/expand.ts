import BigNumber from 'bignumber.js';
import type { Measure, MeasureEntry } from '../types.ts';

/** Expand macro entries when generating runtime conversion data. */
export function expandUnits(units: Measure['units']): MeasureEntry[] {
	return units.flatMap((unit) => {
		if (!('macro' in unit)) {
			return [unit];
		}

		return unit.macro.map((unitGroup) => {
			const macroSymbols = Array.isArray(unitGroup.symbol) ? unitGroup.symbol : [unitGroup.symbol];
			return {
				names: unit.names.map((name) => `${unitGroup.prefix}${name}`),
				symbols: unit.symbols.flatMap((symbol) => macroSymbols.map((macroSymbol) => `${macroSymbol}${symbol}`)),
				ratio: new BigNumber(unit.ratio).times(unitGroup.value),
			};
		});
	});
}
