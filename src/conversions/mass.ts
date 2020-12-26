import {unitFamilies} from '../util';

const poundInGrams = 4.5359237e2;

/**
 * Conversions for mass.
 * @private
 */
const mass = {
	kilogram: [unitFamilies.Mass, 1e3, 0],
	kilograms: [unitFamilies.Mass, 1e3, 0],
	kg: [unitFamilies.Mass, 1e3, 0],

	gram: [unitFamilies.Mass, 1, 0],
	grams: [unitFamilies.Mass, 1, 0],
	g: [unitFamilies.Mass, 1, 0],

	decagram: [unitFamilies.Mass, 10, 0],
	decagrams: [unitFamilies.Mass, 10, 0],
	dag: [unitFamilies.Mass, 10, 0],

	hectogram: [unitFamilies.Mass, 1e2, 0],
	hectograms: [unitFamilies.Mass, 1e2, 0],
	hg: [unitFamilies.Mass, 1e2, 0],

	megagram: [unitFamilies.Mass, 1e6, 0],
	megagrams: [unitFamilies.Mass, 1e6, 0],
	Mg: [unitFamilies.Mass, 1e6, 0],

	tonne: [unitFamilies.Mass, 1e6, 0],
	tonnes: [unitFamilies.Mass, 1e6, 0],
	'metric ton': [unitFamilies.Mass, 1e6, 0],
	'metric tons': [unitFamilies.Mass, 1e6, 0],
	t: [unitFamilies.Mass, 1e6, 0],

	gigagram: [unitFamilies.Mass, 1e9, 0],
	gigagrams: [unitFamilies.Mass, 1e9, 0],
	Gg: [unitFamilies.Mass, 1e9, 0],

	teragram: [unitFamilies.Mass, 1e12, 0],
	teragrams: [unitFamilies.Mass, 1e12, 0],
	Tg: [unitFamilies.Mass, 1e12, 0],

	petagram: [unitFamilies.Mass, 1e15, 0],
	petagrams: [unitFamilies.Mass, 1e15, 0],
	Pg: [unitFamilies.Mass, 1e15, 0],

	exagram: [unitFamilies.Mass, 1e18, 0],
	exagrams: [unitFamilies.Mass, 1e18, 0],
	Eg: [unitFamilies.Mass, 1e18, 0],

	zettagram: [unitFamilies.Mass, 1e21, 0],
	zettagrams: [unitFamilies.Mass, 1e21, 0],
	Zg: [unitFamilies.Mass, 1e21, 0],

	yottagram: [unitFamilies.Mass, 1e24, 0],
	yottagrams: [unitFamilies.Mass, 1e24, 0],
	Yg: [unitFamilies.Mass, 1e24, 0],

	decigram: [unitFamilies.Mass, 1e-1, 0],
	decigrams: [unitFamilies.Mass, 1e-1, 0],
	dg: [unitFamilies.Mass, 1e-1, 0],

	centigram: [unitFamilies.Mass, 1e-2, 0],
	centigrams: [unitFamilies.Mass, 1e-2, 0],
	cg: [unitFamilies.Mass, 1e-2, 0],

	milligram: [unitFamilies.Mass, 1e-3, 0],
	milligrams: [unitFamilies.Mass, 1e-3, 0],
	mg: [unitFamilies.Mass, 1e-3, 0],

	microgram: [unitFamilies.Mass, 1e-6, 0],
	micrograms: [unitFamilies.Mass, 1e-6, 0],
	µg: [unitFamilies.Mass, 1e-6, 0],

	nanogram: [unitFamilies.Mass, 1e-9, 0],
	nanograms: [unitFamilies.Mass, 1e-9, 0],
	ng: [unitFamilies.Mass, 1e-9, 0],

	picogram: [unitFamilies.Mass, 1e-12, 0],
	picograms: [unitFamilies.Mass, 1e-12, 0],
	pg: [unitFamilies.Mass, 1e-12, 0],

	femtogram: [unitFamilies.Mass, 1e-15, 0],
	femtograms: [unitFamilies.Mass, 1e-15, 0],
	fg: [unitFamilies.Mass, 1e-15, 0],

	attogram: [unitFamilies.Mass, 1e-18, 0],
	attograms: [unitFamilies.Mass, 1e-18, 0],
	ag: [unitFamilies.Mass, 1e-18, 0],

	zeptogram: [unitFamilies.Mass, 1e-21, 0],
	zeptograms: [unitFamilies.Mass, 1e-21, 0],
	zg: [unitFamilies.Mass, 1e-21, 0],

	yoctogram: [unitFamilies.Mass, 1e-24, 0],
	yoctograms: [unitFamilies.Mass, 1e-24, 0],
	yg: [unitFamilies.Mass, 1e-24, 0],

	pound: [unitFamilies.Mass, poundInGrams, 0],
	pounds: [unitFamilies.Mass, poundInGrams, 0],
	lb: [unitFamilies.Mass, poundInGrams, 0],

	stone: [unitFamilies.Mass, poundInGrams * 14, 0],
	stones: [unitFamilies.Mass, poundInGrams * 14, 0],
	st: [unitFamilies.Mass, poundInGrams * 14, 0],

	ounce: [unitFamilies.Mass, poundInGrams / 16, 0],
	ounces: [unitFamilies.Mass, poundInGrams / 16, 0],
	oz: [unitFamilies.Mass, poundInGrams / 16, 0],
	'℥': [unitFamilies.Mass, poundInGrams / 16, 0],

	'short ton': [unitFamilies.Mass, poundInGrams * 2000, 0],
	'short tons': [unitFamilies.Mass, poundInGrams * 2000, 0],
	'us ton': [unitFamilies.Mass, poundInGrams * 2000, 0],
	'us tons': [unitFamilies.Mass, poundInGrams * 2000, 0],

	'long ton': [unitFamilies.Mass, poundInGrams * 2240, 0],
	'long tons': [unitFamilies.Mass, poundInGrams * 2240, 0],
	'imperial ton': [unitFamilies.Mass, poundInGrams * 2240, 0],
	'imperial tons': [unitFamilies.Mass, poundInGrams * 2240, 0],
	'displacement ton': [unitFamilies.Mass, poundInGrams * 2240, 0],
	'displacement tons': [unitFamilies.Mass, poundInGrams * 2240, 0]
};
export default mass;
