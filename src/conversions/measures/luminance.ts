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

		// https://en.wikipedia.org/wiki/Candela_per_square_metre
		{ names: ['nit', 'nits'], symbols: ['nt'], ratio: 1 },
	],
};
