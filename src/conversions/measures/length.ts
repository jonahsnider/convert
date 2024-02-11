import BigNumber from 'bignumber.js';
import { expandMacro } from '../macros/expand';
import { Macros } from '../macros/macros';
import { Measure, MeasureKind } from '../types';

export const length: Measure = {
	kind: MeasureKind.Length,
	best: {
		metric: ['mm', 'cm', 'm', 'km'],
		imperial: ['in', 'ft', 'yd', 'mi'],
	},
	units: [
		{ names: ['meter', 'meters', 'metre', 'metres'], symbols: ['m'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['meter', 'metre', 'meters', 'metres'], symbols: ['m'], ratio: 1 }),

		{ names: ['foot', 'feet'], symbols: ['ft', "'"], ratio: 0.3048 },
		{ names: ['inch', 'inches'], symbols: ['in', '"'], ratio: 0.0254 },
		{ names: ['yard', 'yards'], symbols: ['yd'], ratio: 0.9144 },
		{ names: ['mile', 'miles'], symbols: ['mi'], ratio: 1609.344 },
		{ names: ['nautical mile', 'nautical miles'], symbols: ['M', 'NM', 'nmi'], ratio: 1852 },

		{ names: ['light-year', 'light-years'], symbols: ['ly'], ratio: new BigNumber('9460730472580800') },

		// https://en.wikipedia.org/wiki/Pica_(typography)
		// The p symbol can't be used as it conflicts with pints
		{ names: ['pica', 'picas'], symbols: ['pc'], ratio: 4.2333e-3 },
		// https://en.wikipedia.org/wiki/Point_(typography)
		// The pt symbol can't be use as it conflicts with pints
		{ names: ['point', 'points'], ratio: 0.3528e-3 },
	],
};
