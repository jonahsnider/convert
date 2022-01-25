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
		{names: ['kilowatt-hour'], symbols: ['kW⋅h', 'kW h', 'kWh'], ratio: 3.6e6},
	],
};
