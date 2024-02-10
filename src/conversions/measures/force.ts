import { expandMacro } from '../macros/expand.js';
import { Macros } from '../macros/macros.js';
import { Measure, MeasureKind } from '../types.js';

export const force: Measure = {
	kind: MeasureKind.Force,
	best: { metric: ['N'], imperial: ['lbf'] },
	units: [
		{ names: ['newton', 'newtons'], symbols: ['N'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['newton', 'newtons'], symbols: ['N'], ratio: 1 }),

		{ names: ['dyne', 'dynes'], symbols: ['dyn'], ratio: 1e-5 },

		{ names: ['pound of force', 'pound-force'], symbols: ['lbf'], ratio: 4.448_222 },
		// https://en.wikipedia.org/wiki/Kip_(unit)
		{ names: ['kip'], symbols: ['klb', 'kipf', 'klbf'], ratio: 4448.2216 },
		{ names: ['poundal', 'poundals'], symbols: ['pdl'], ratio: 0.138_255 },

		{ names: ['kilogram-force', 'kilopond', 'kiloponds'], symbols: ['kgf', 'kp'], ratio: 9.806_65 },
		{ names: ['tonne-force', 'metric ton-force', 'megagram-force', 'megapond'], symbols: ['tf', 'Mp'], ratio: 9806.65 },
	],
};
