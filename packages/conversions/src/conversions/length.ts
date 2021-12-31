import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

/** @internal */
export const length: ReadonlyDeep<Family> = {
	id: Id.Length,
	best: {
		metric: ['mm', 'cm', 'm', 'km'],
		imperial: ['in', 'ft', 'yd', 'mi'],
	},
	conversions: [
		{names: ['meter', 'meters', 'metre', 'metres'], symbols: ['m'], ratio: 1},
		...expandMacro(Macros.si, {names: ['meter', 'metre', 'meters', 'metres'], symbols: ['m'], ratio: 1}),

		{names: ['foot', 'feet'], symbols: ['ft', "'"], ratio: 0.3048},
		{names: ['inch', 'inches'], symbols: ['in', '"'], ratio: 0.0254},
		{names: ['yard', 'yards'], symbols: ['yd'], ratio: 0.9144},
		{names: ['mile', 'miles'], symbols: ['mi'], ratio: 1609.344},
		{names: ['nautical mile', 'nautical miles'], symbols: ['M', 'NM', 'nmi'], ratio: 1852},
	],
};
