import {expandMacro, Macros} from '../generate/macros';
import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Volume;

export const best: BestConversions = ['mL', 'L'];

export const conversions: ConversionGroup = [
	{
		names: ['cubic meter', 'cubic meters', 'cubic metre', 'cubic metres', 'stere', 'steres'],
		symbols: ['m³', 'm3'],
		ratio: 1
	},
	...expandMacro(Macros.volumeSi, {names: ['meter', 'meters'], symbols: ['m3', 'm³'], ratio: 1}),

	{
		names: ['liter', 'liters', 'litre', 'litres'],
		symbols: ['l', 'L'],
		ratio: 1e-3
	},
	...expandMacro(Macros.si, {names: ['liter', 'liters', 'litre', 'litres'], symbols: ['l', 'L'], ratio: 1e-3}),

	// https://en.wikipedia.org/wiki/Cubic_mile
	{names: ['cubic mile', 'cubic miles'], symbols: ['cu mi', 'mi3', 'mi³'], ratio: 4.2e3},
	// https://en.wikipedia.org/wiki/Acre-foot
	{names: ['acre-foot', 'acre-feet'], symbols: ['ac⋅ft', 'ac ft'], ratio: 1233.48183754752},
	// https://en.wikipedia.org/wiki/Cubic_yard
	{names: ['cubic yard', 'cubic yards'], symbols: ['cu yd', 'yd3', 'yd³'], ratio: 0.76},
	// https://en.wikipedia.org/wiki/Cubic_foot
	{names: ['cubic foot', 'cubic feet'], symbols: ['cu ft', 'ft3', 'ft³'], ratio: 0.028},
	{names: ['board foot', 'board feet'], ratio: 0.002359737},
	// https://en.wikipedia.org/wiki/Cubic_inch
	{names: ['cubic inch', 'cubic inches'], symbols: ['cu in', 'in3', 'in³'], ratio: 0.000016387064},
	{names: ['measurement ton', 'measurement tons'], symbols: ['MTON'], ratio: 1.133},
	{names: ['imperial barrel', 'imperial barrels'], symbols: ['imp bbl'], ratio: 0.16},
	// https://en.wikipedia.org/wiki/Bushel#Imperial_bushel
	{names: ['imperial bushel', 'imperial bushels'], symbols: ['imp bsh', 'imp bu'], ratio: 0.03636872},
	{names: ['imperial peck', 'imperial pecks'], symbols: ['pk', 'imp pk'], ratio: 0.00909218},
	{names: ['imperial gallon', 'imperial gallons'], symbols: ['imp gal'], ratio: 0.00454609},
	{names: ['imperial quart', 'imperial quarts'], symbols: ['imp qt'], ratio: 0.0011365225},
	{names: ['imperial pint', 'imperial pints'], symbols: ['imp pt'], ratio: 0.00056826125},
	{names: ['imperial fluid ounce', 'imperial fluid ounces'], symbols: ['imp fl oz'], ratio: 2.84130625e-5},

	// https://en.wikipedia.org/wiki/United_States_customary_units#Fluid_volume
	{names: ['teaspoon', 'teaspoons', 'US teaspoon', 'US teaspoons'], symbols: ['tsp'], ratio: 4.92892159375 / 1e6},
	{names: ['tablespoon', 'tablespoons', 'US tablespoon', 'US tablespoons'], symbols: ['tbsp'], ratio: 14.78676478125 / 1e6},
	// https://en.wikipedia.org/wiki/Fluid_ounce
	{names: ['US fluid ounce', 'US fluid ounces'], symbols: ['fl oz', 'fl. oz.', 'oz. fl.'], ratio: 29.5735295625e-6},
	// https://en.wikipedia.org/wiki/Cup_(unit)
	{names: ['cup', 'cups', 'US legal cup', 'US legal cups'], symbols: ['c'], ratio: 236.5882365 / 1e6},
	// https://en.wikipedia.org/wiki/Pint
	{names: ['pint', 'pints', 'US liquid pint', 'US liquid pints'], symbols: ['pt', 'p'], ratio: 4.73176473e-4},
	// https://en.wikipedia.org/wiki/Quart
	{names: ['quart', 'quarts', 'US liquid quart', 'US liquid quarts'], symbols: ['qt'], ratio: 9.46352946e-4},
	// https://en.wikipedia.org/wiki/Gallon
	{names: ['gallon', 'gallons', 'US liquid gallon', 'US liquid gallons'], symbols: ['gal'], ratio: 1 / 264.1721},

	{names: ['US dry barrel', 'US dry barrels'], symbols: ['US dry bbl'], ratio: 0.12},
	{names: ['US bushel', 'US bushels'], symbols: ['US bsh', 'US bu'], ratio: 3.52391e-2},
	{names: ['US peck'], symbols: ['US pk'], ratio: 9.09218e-3},
	{names: ['US dry gallon'], symbols: ['US dry gal'], ratio: 4.40488377086e-3},
	{names: ['US dry quart'], symbols: ['US dry qt'], ratio: 0.946352946e-3},
	{names: ['US dry pint'], symbols: ['US dry pt'], ratio: 33.6003125}
];
