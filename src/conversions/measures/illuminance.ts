import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const illuminance: Measure = {
	kind: MeasureKind.Illuminance,
	best: ['lux', 'µlx', 'nlx', 'klx'],
	units: [
		// https://en.wikipedia.org/wiki/Lux
		{ names: ['lux'], symbols: ['lx'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['lux'], symbols: ['lx'], ratio: 1 }),

		{ names: ['lumen per square meter'], symbols: ['lm/m²'], ratio: 1 },

		// https://en.wikipedia.org/wiki/Foot-candle
		{ names: ['foot-candle', 'foot candle'], symbols: ['fc', 'ft-c'], ratio: 10.764 },

		// https://en.wikipedia.org/wiki/Phot
		{ names: ['phot'], symbols: ['ph'], ratio: 10_000 },
	],
};
