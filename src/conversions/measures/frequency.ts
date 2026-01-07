import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const frequency: Measure = {
	kind: MeasureKind.Frequency,
	best: ['Hz', 'kHz', 'MHz', 'GHz', 'THz', 'PHz'],
	units: [
		// https://en.wikipedia.org/wiki/Hertz
		{ names: ['hertz'], symbols: ['Hz'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['hertz'], symbols: ['Hz'], ratio: 1 }),
	],
};
