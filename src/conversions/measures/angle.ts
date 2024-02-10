import { Measure, MeasureKind } from '../types.js';

export const angle: Measure = {
	kind: MeasureKind.Angle,
	best: ['deg'],
	units: [
		{ names: ['radian', 'radians'], symbols: ['rad', 'rads', 'r'], ratio: 1 },
		{ names: ['turn', 'turns'], ratio: () => 2 * Math.PI },
		{ names: ['degree', 'degrees'], symbols: ['deg', 'degs', '°'], ratio: () => Math.PI / 180 },
		{
			names: ['gradian', 'gradians'],
			symbols: ['gon', 'gons', 'grad', 'grads', 'grade', 'grades'],
			ratio: () => Math.PI / 200,
		},
	],
};
