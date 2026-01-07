import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const power: Measure = {
	kind: MeasureKind.Power,
	best: ['W', 'kW', 'MW', 'GW', 'TW', 'PW'],
	units: [
		// https://en.wikipedia.org/wiki/Watt
		{ names: ['watt', 'watts'], symbols: ['W'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['watt', 'watts'], symbols: ['W'], ratio: 1 }),

		{ names: ['horsepower', 'mechanical horsepower'], symbols: ['hp'], ratio: 745.699_872 },
	],
};
