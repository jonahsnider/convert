import {expandMacro, Macros} from '../generate/macros/index.js';
import type {BestConversions, ConversionGroup} from '../types/common.js';
import {ConversionFamilyId} from '../types/common.js';

export const id = ConversionFamilyId.Temperature;

export const best: BestConversions = {metric: ['C'], imperial: ['F']};

export const enum KelvinNames {
	/* eslint-disable @typescript-eslint/naming-convention */
	kelvin = 'kelvin',
	kelvins = 'kelvins',
	K = 'K',
	/* eslint-enable @typescript-eslint/naming-convention */
}

/** @see https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature#Kelvin */
export const conversions: ConversionGroup = [
	{names: [KelvinNames.kelvin, KelvinNames.kelvins], symbols: [KelvinNames.K], ratio: 1},
	...expandMacro(Macros.si, {names: [KelvinNames.kelvin, KelvinNames.kelvins], symbols: [KelvinNames.K], ratio: 1}),

	{names: ['fahrenheit'], symbols: ['F'], ratio: 5 / 9, difference: 459.67},
	{names: ['celsius'], symbols: ['C'], ratio: 1, difference: 273.15},
	{names: ['rankine'], symbols: ['R'], ratio: 5 / 9},
];
