import { expandMacro } from '../macros/expand';
import { Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const area: Measure = {
	kind: MeasureKind.Area,
	best: { metric: ['mm2', 'cm2', 'm2', 'km2'], imperial: ['sq in', 'sq ft', 'ac', 'sq mi'] },
	units: [
		// https://en.wikipedia.org/wiki/Category:Units_of_area
		// https://en.wikipedia.org/wiki/Square_metre
		{ names: ['square meter', 'square meters', 'square metre', 'square metres'], symbols: ['m²', 'm2'], ratio: 1 },
		...expandMacro(Macros.areaSi, { names: ['meter', 'metre', 'meters', 'metres'], symbols: ['m²', 'm2'], ratio: 1 }),

		// https://en.wikipedia.org/wiki/Conversion_of_units#Area
		{ names: ['acre', 'acres'], symbols: ['ac'], ratio: 4046.856_422_4 },

		// https://en.wikipedia.org/wiki/Hectare#Are
		{ names: ['centiare', 'centiares'], symbols: ['ca'], ratio: 1 },
		{ names: ['deciare', 'deciares'], symbols: ['da'], ratio: 1e1 },
		// Symbol `a` is excluded to avoid conflict
		{ names: ['are', 'ares'], ratio: 1e2 },
		{ names: ['decare', 'decares'], symbols: ['daa'], ratio: 1e3 },
		{ names: ['hectare', 'hectares'], symbols: ['ha'], ratio: 1e4 },

		{ names: ['square foot', 'square feet'], symbols: ['sq ft', 'ft²', 'ft2'], ratio: 9.290_304e-2 },
		{ names: ['square inch', 'square inches'], symbols: ['sq in', 'in²', 'in2'], ratio: 6.4516e-4 },
		{ names: ['square yard', 'square yards'], symbols: ['sq yd', 'yd²', 'yd2'], ratio: 0.836_127_36 },
		{ names: ['square mile', 'square miles'], symbols: ['sq mi', 'mi²', 'mi2'], ratio: 2.589_988_110_336e6 },

		// https://en.wikipedia.org/wiki/Mu_(land)
		{ names: ['mǔ', 'mu'], ratio: 666 + (2 / 3) },
	],
};
