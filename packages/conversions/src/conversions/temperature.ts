import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {KelvinNames, Id} from '../types/index.js';

export const temperature: ReadonlyDeep<Family> = {
	id: Id.Temperature,
	best: {metric: ['C'], imperial: ['F']},
	/** @see https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature#Kelvin */
	conversions: [
		{names: [KelvinNames.kelvin, KelvinNames.kelvins], symbols: [KelvinNames.K], ratio: 1},
		...expandMacro(Macros.si, {names: [KelvinNames.kelvin, KelvinNames.kelvins], symbols: [KelvinNames.K], ratio: 1}),

		{names: ['fahrenheit'], symbols: ['F'], ratio: 5 / 9, difference: 459.67},
		{names: ['celsius'], symbols: ['C'], ratio: 1, difference: 273.15},
		{names: ['rankine'], symbols: ['R'], ratio: 5 / 9},
	],
};
