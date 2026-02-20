import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const luminance: Measure = {
	kind: MeasureKind.Luminance,
	best: ['cd/m²'],
	units: [
		// https://en.wikipedia.org/wiki/Candela_per_square_metre
		{ names: ['candela per square metre'], symbols: ['cd/m²'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['candela per square metre'], symbols: ['cd/m²'], ratio: 1 }),

		// Wikipedia says that "nit" is deprecated, but it's still widely used,
		// for things like display brightness for example
		// (see e.g. https://www.apple.com/iphone-16/specs/#:~:text=1000%20nits%20max%20brightness).
		{ names: ['nit'], symbols: ['nt'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['nit'], symbols: ['nt'], ratio: 1 }),

		// https://en.wikipedia.org/wiki/Foot-lambert
		{ names: ['foot-lambert', 'foot lambert'], symbols: ['fL', 'ft-L'], ratio: 1 / 0.3048 ** 2 / Math.PI },

		// https://en.wikipedia.org/wiki/Skot_(unit)
		{ names: ['skot'], symbols: ['sk'], ratio: 1e-3 / Math.PI },

		// https://en.wikipedia.org/wiki/Bril_(unit)
		{ names: ['bril'], symbols: ['bl'], ratio: 1e-7 / Math.PI },

		// https://en.wikipedia.org/wiki/Apostilb
		{ names: ['apostilb', 'blondel'], symbols: ['asb'], ratio: 1e-4 / Math.PI },

		// https://en.wikipedia.org/wiki/Stilb
		{ names: ['stilb'], symbols: ['sb'], ratio: 1e4 },
	],
};
