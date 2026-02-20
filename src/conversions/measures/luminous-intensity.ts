import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const luminousIntensity: Measure = {
	kind: MeasureKind.LuminousIntensity,
	best: ['cd'],
	units: [
		// https://en.wikipedia.org/wiki/Candela
		{ names: ['candela'], symbols: ['cd'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['cd'], symbols: ['cd'], ratio: 1 }),

		// https://en.wikipedia.org/wiki/Candlepower
		{ names: ['candlepower'], symbols: ['cp', 'CP'], ratio: 1 },

		// https://en.wikipedia.org/wiki/Hefner_lamp
		{ names: ['hefnerkerze'], symbols: ['HK'], ratio: 0.92 },
	],
};
