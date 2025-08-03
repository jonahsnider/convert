import { expandMacro } from '../macros/expand';
import { Macros } from '../macros/macros';
import { type Measure, MeasureKind } from '../types';

export const temperature: Measure = {
	kind: MeasureKind.Temperature,
	best: { metric: ['C'], imperial: ['F'] },
	/** @see https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature#Kelvin */
	units: [
		{ names: ['kelvin', 'kelvins'], symbols: ['K'], ratio: 1 },
		...expandMacro(Macros.si, { names: ['kelvin', 'kelvins'], symbols: ['K'], ratio: 1 }),

		{ names: ['fahrenheit'], symbols: ['F', '°F'], ratio: () => 5 / 9, difference: 459.67 },
		{ names: ['celsius'], symbols: ['C', '°C'], ratio: 1, difference: 273.15 },
		{ names: ['rankine'], symbols: ['R'], ratio: () => 5 / 9 },
	],
};
