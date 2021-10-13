import {expandMacro, Macros} from '../generate/macros/index.js';
import type {BestConversions, ConversionGroup} from '../types/common.js';
import {ConversionFamilyId} from '../types/common.js';

export const id = ConversionFamilyId.Volume;

export const best: BestConversions = {
	metric: ['mL', 'L'],
	imperial: ['tsp', 'tbsp', 'fl oz', 'cup', 'pt', 'qt', 'gal'],
};

export const conversions: ConversionGroup = [
	{
		names: ['cubic meter', 'cubic meters', 'cubic metre', 'cubic metres', 'stere', 'steres'],
		symbols: ['m³', 'm3'],
		ratio: 1,
	},
	...expandMacro(Macros.volumeSi, {names: ['meter', 'meters'], symbols: ['m3', 'm³'], ratio: 1}),

	{
		names: ['liter', 'liters', 'litre', 'litres'],
		symbols: ['l', 'L'],
		ratio: 1e-3,
	},
	...expandMacro(Macros.si, {names: ['liter', 'liters', 'litre', 'litres'], symbols: ['l', 'L'], ratio: 1e-3}),

	// https://en.wikipedia.org/wiki/Cubic_mile
	{names: ['cubic mile', 'cubic miles'], symbols: ['cu mi', 'mi3', 'mi³'], ratio: 4.2e3},
	// https://en.wikipedia.org/wiki/Acre-foot
	{names: ['acre-foot', 'acre-feet'], symbols: ['ac⋅ft', 'ac ft'], ratio: 1233.481_837_547_52},
	// https://en.wikipedia.org/wiki/Cubic_yard
	{names: ['cubic yard', 'cubic yards'], symbols: ['cu yd', 'yd3', 'yd³'], ratio: 0.76},
	// https://en.wikipedia.org/wiki/Cubic_foot
	{names: ['cubic foot', 'cubic feet'], symbols: ['cu ft', 'ft3', 'ft³'], ratio: 0.028},
	{names: ['board foot', 'board feet'], ratio: 0.002_359_737},
	// https://en.wikipedia.org/wiki/Cubic_inch
	{names: ['cubic inch', 'cubic inches'], symbols: ['cu in', 'in3', 'in³'], ratio: 0.000_016_387_064},
	{names: ['measurement ton', 'measurement tons'], symbols: ['MTON'], ratio: 1.133},
	{names: ['imperial barrel', 'imperial barrels'], symbols: ['imp bbl'], ratio: 0.16},
	// https://en.wikipedia.org/wiki/Bushel#Imperial_bushel
	{names: ['imperial bushel', 'imperial bushels'], symbols: ['imp bsh', 'imp bu'], ratio: 0.036_368_72},
	{names: ['imperial peck', 'imperial pecks'], symbols: ['pk', 'imp pk'], ratio: 0.009_092_18},
	{names: ['imperial gallon', 'imperial gallons'], symbols: ['imp gal'], ratio: 0.004_546_09},
	{names: ['imperial quart', 'imperial quarts'], symbols: ['imp qt'], ratio: 0.001_136_522_5},
	{names: ['imperial pint', 'imperial pints'], symbols: ['imp pt'], ratio: 0.000_568_261_25},
	// https://en.wikipedia.org/wiki/Fluid_ounce
	{names: ['imperial fluid ounce', 'imperial fluid ounces'], symbols: ['imp fl oz'], ratio: 28.413_062_5e-6},

	// https://en.wikipedia.org/wiki/United_States_customary_units#Fluid_volume
	{names: ['teaspoon', 'teaspoons', 'US teaspoon', 'US teaspoons'], symbols: ['tsp'], ratio: 4.928_921_593_75e-6},
	{names: ['tablespoon', 'tablespoons', 'US tablespoon', 'US tablespoons'], symbols: ['tbsp'], ratio: 14.786_764_781_25e-6},
	// https://en.wikipedia.org/wiki/Fluid_ounce
	{names: ['US fluid ounce', 'US fluid ounces'], symbols: ['fl oz', 'fl. oz.', 'oz. fl.'], ratio: 29.573_529_562_5e-6},
	// https://en.wikipedia.org/wiki/Cup_(unit)
	{names: ['cup', 'cups', 'US legal cup', 'US legal cups'], symbols: ['c'], ratio: 236.588_236_5e-6},
	// https://en.wikipedia.org/wiki/Pint
	{names: ['pint', 'pints', 'US liquid pint', 'US liquid pints'], symbols: ['pt', 'p'], ratio: 4.731_764_73e-4},
	// https://en.wikipedia.org/wiki/Quart
	{names: ['quart', 'quarts', 'US liquid quart', 'US liquid quarts'], symbols: ['qt'], ratio: 9.463_529_46e-4},
	// https://en.wikipedia.org/wiki/Gallon
	{names: ['gallon', 'gallons', 'US liquid gallon', 'US liquid gallons'], symbols: ['gal'], ratio: 3.785_411_784e-3},

	// https://en.wikipedia.org/wiki/United_States_customary_units#Dry_volume
	// https://en.wikipedia.org/wiki/Dry_measure#US_units_of_dry_measure
	{names: ['US dry barrel', 'US dry barrels'], symbols: ['US dry bbl'], ratio: 0.12},
	{names: ['US bushel', 'US bushels'], symbols: ['US bsh', 'US bu'], ratio: 3.523_91e-2},
	{names: ['US peck'], symbols: ['US pk'], ratio: 9.092_18e-3},
	{names: ['US dry gallon'], symbols: ['US dry gal'], ratio: 4.404_883_770_86e-3},
	{names: ['US dry quart'], symbols: ['US dry qt'], ratio: 0.946_352_946e-3},
	{names: ['US dry pint'], symbols: ['US dry pt'], ratio: 33.600_312_5},
];
