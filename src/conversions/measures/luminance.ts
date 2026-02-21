import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const luminance: Measure = {
	kind: MeasureKind.Luminance,
	best: ['cd/m²'],
	units: [
		// https://en.wikipedia.org/wiki/Candela_per_square_metre
		{
			names: [
				'candela per square meter',
				'candelas per square meter',
				'candela per square metre',
				'candelas per square metre',
			],
			symbols: ['cd/m2', 'cd/m²'],
			ratio: 1,
		},
		...expandMacro(Macros.si, {
			names: [
				'candela per square meter',
				'candelas per square meter',
				'candela per square metre',
				'candelas per square metre',
			],
			symbols: ['cd/m2', 'cd/m²'],
			ratio: 1,
		}),

		// Wikipedia says that "nit" is deprecated, but it's still widely used, for things like display brightness for example
		// (see e.g. https://www.apple.com/iphone-16/specs/#:~:text=1000%20nits%20max%20brightness).
		{ names: ['nit', 'nits'], symbols: ['nt'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['nit', 'nits'], symbols: ['nt'], ratio: 1 }),

		{
			names: ['lambert'],
			// L conflicts with liter
			symbols: [],
			ratio: 1e4 / Math.PI,
		},

		// https://en.wikipedia.org/wiki/Foot-lambert
		{
			names: ['foot-lambert', 'footlambert'],
			// fl and fL conflict with femtoliter
			symbols: ['ft-L'],
			ratio: 1 / 0.3048 ** 2 / Math.PI,
		},

		// https://en.wikipedia.org/wiki/Apostilb
		{ names: ['apostilb'], symbols: ['asb'], ratio: 1 / Math.PI },

		// https://en.wikipedia.org/wiki/Stilb
		{ names: ['stilb'], symbols: ['sb'], ratio: 1e4 },
	],
};
