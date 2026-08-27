import { expandMacro, Macros } from '../macros/macros.ts';
import { type Measure, MeasureKind } from '../types.ts';

export const frequency: Measure = {
	kind: MeasureKind.Frequency,
	best: ['Hz', 'kHz', 'MHz', 'GHz', 'THz', 'PHz'],
	units: [
		// https://en.wikipedia.org/wiki/Hertz
		{ names: ['hertz'], symbols: ['Hz'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['hertz'], symbols: ['Hz'], ratio: 1 }),
	],
};
