import type {ReadonlyDeep} from 'type-fest';
import {expandMacro} from '../macros/expand.js';
import {Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

export const energy: ReadonlyDeep<Family> = {
	id: Id.Energy,
	best: ['J'],
	conversions: [
		{names: ['joule', 'joules'], symbols: ['J'], ratio: 1},
		...expandMacro(Macros.si, {names: ['joule', 'joules'], symbols: ['J'], ratio: 1}),

		// https://en.wikipedia.org/wiki/Kilowatt-hour
		{names: ['watt-hour'], symbols: ['W⋅h', 'W h', 'Wh'], ratio: 3600},
		...expandMacro(Macros.si, {names: ['watt-hour', 'watt-hours'], symbols: ['W⋅h', 'W h', 'Wh'], ratio: 3600}),
	],
};
