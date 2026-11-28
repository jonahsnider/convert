import BigNumber from 'bignumber.js';
import { Macros } from '../macros/macros.ts';
import { type Measure, MeasureKind } from '../types.ts';

/** Newtons in one pound-force. */
export const poundForce = new BigNumber('0.45359237').times('9.80665');

export const force: Measure = {
	kind: MeasureKind.Force,
	best: { metric: ['N'], imperial: ['lbf'] },
	units: [
		{ names: ['newton', 'newtons'], symbols: ['N'], ratio: 1 },
		{ macro: Macros.si, names: ['newton', 'newtons'], symbols: ['N'], ratio: 1 },

		{ names: ['dyne', 'dynes'], symbols: ['dyn'], ratio: 1e-5 },

		// 1 lbf = 0.45359237 kg × 9.80665 m/s², exactly
		{ names: ['pound of force', 'pound-force'], symbols: ['lbf'], ratio: poundForce },
		// https://en.wikipedia.org/wiki/Kip_(unit)
		{ names: ['kip'], symbols: ['klb', 'kipf', 'klbf'], ratio: poundForce.times(1000) },
		// 1 pdl = 0.45359237 kg × 0.3048 m/s², exactly
		{ names: ['poundal', 'poundals'], symbols: ['pdl'], ratio: new BigNumber('0.45359237').times('0.3048') },

		{ names: ['kilogram-force', 'kilopond', 'kiloponds'], symbols: ['kgf', 'kp'], ratio: 9.806_65 },
		{ names: ['tonne-force', 'metric ton-force', 'megagram-force', 'megapond'], symbols: ['tf', 'Mp'], ratio: 9806.65 },
	],
};
