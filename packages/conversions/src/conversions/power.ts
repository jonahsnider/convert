import type {ReadonlyDeep} from 'type-fest';
import {expandMacro} from '../macros/expand.js';
import {Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

export const power: ReadonlyDeep<Family> = {
	id: Id.Power,
	best: ['W', 'kW', 'MW', 'GW', 'TW', 'PW'],
	conversions: [
		// https://en.wikipedia.org/wiki/Watt
		{names: ['watt', 'watts'], symbols: ['W'], ratio: 1},
		...expandMacro(Macros.si, {names: ['watt', 'watts'], symbols: ['W'], ratio: 1}),

		{names: ['horsepower', 'mechanical horsepower'], symbols: ['hp'], ratio: 745.699_872},
	],
};
