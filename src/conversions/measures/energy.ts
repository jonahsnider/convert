import { expandMacro } from '../macros/expand';
import { Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const energy: Measure = {
	kind: MeasureKind.Energy,
	best: ['GWh', 'MWh', 'kWh', 'Wh', 'J'],
	units: [
		{ names: ['joule', 'joules'], symbols: ['J'], ratio: 1 },
		...expandMacro(Macros.si, {
			names: ['joule', 'joules'],
			symbols: ['J'],
			ratio: 1,
		}),

		// https://en.wikipedia.org/wiki/Kilowatt-hour
		{ names: ['watt-hour'], symbols: ['W⋅h', 'W h', 'Wh'], ratio: 3600 },
		...expandMacro(Macros.si, {
			names: ['watt-hour', 'watt-hours'],
			symbols: ['W⋅h', 'W h', 'Wh'],
			ratio: 3600,
		}),
	],
};
