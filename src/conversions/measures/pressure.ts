import BigNumber from 'bignumber.js';
import { expandMacro, Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const pressure: Measure = {
	kind: MeasureKind.Pressure,
	best: { metric: ['Pa'], imperial: ['psi'] },
	units: [
		{ names: ['pascal', 'pascals'], symbols: ['Pa'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['pascal', 'pascals'], symbols: ['Pa'], ratio: 1 }),

		{ names: ['bar', 'bars'], symbols: ['bar'], ratio: 1e5 },
		...expandMacro(Macros.si, { names: ['bar', 'bars'], symbols: ['bar'], ratio: 1e5 }),

		{ names: ['torr', 'torrs'], symbols: ['Torr'], ratio: new BigNumber(101_325).div(760) },
		{ names: ['millitorr'], symbols: ['mTorr'], ratio: new BigNumber(101_325).div(760).div(1e3) },

		{ names: ['atmosphere', 'atmospheres'], symbols: ['atm'], ratio: 101_325 },

		// https://en.wikipedia.org/wiki/Pound_per_square_inch
		{
			names: ['pound per square inch', 'pounds per square inch'],
			symbols: ['psi', 'lbf/in2', 'lbf/in²'],
			ratio: 6.894_757e3,
		},

		// https://en.wikipedia.org/wiki/Inch_of_water
		{
			names: ['inch of water', 'inches of water'],
			symbols: ['inAq', 'Aq'],
			ratio: 249.0889,
		},

		// https://en.wikipedia.org/wiki/Inch_of_mercury
		{
			names: ['inch of mercury', 'inches of mercury'],
			symbols: ['inHg', 'Hg'],
			ratio: 3386.389,
		},
	],
};
