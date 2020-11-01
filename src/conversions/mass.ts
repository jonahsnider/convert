import {ratioer} from '../util';

const poundInGrams = 4.5359237e2;

/**
 * Conversions for mass.
 * @private
 */
export const mass = {
	kilogram: ratioer(1e3),
	kilograms: ratioer(1e3),
	kg: ratioer(1e3),

	gram: ratioer(1),
	grams: ratioer(1),
	g: ratioer(1),

	decagram: ratioer(10),
	decagrams: ratioer(10),
	dag: ratioer(10),

	hectogram: ratioer(1e2),
	hectograms: ratioer(1e2),
	hg: ratioer(1e2),

	megagram: ratioer(1e6),
	megagrams: ratioer(1e6),
	Mg: ratioer(1e6),

	tonne: ratioer(1e6),
	tonnes: ratioer(1e6),
	'metric ton': ratioer(1e6),
	'metric tons': ratioer(1e6),
	t: ratioer(1e6),

	gigagram: ratioer(1e9),
	gigagrams: ratioer(1e9),
	Gg: ratioer(1e9),

	teragram: ratioer(1e12),
	teragrams: ratioer(1e12),
	Tg: ratioer(1e12),

	petagram: ratioer(1e15),
	petagrams: ratioer(1e15),
	Pg: ratioer(1e15),

	exagram: ratioer(1e18),
	exagrams: ratioer(1e18),
	Eg: ratioer(1e18),

	zettagram: ratioer(1e21),
	zettagrams: ratioer(1e21),
	Zg: ratioer(1e21),

	yottagram: ratioer(1e24),
	yottagrams: ratioer(1e24),
	Yg: ratioer(1e24),

	decigram: ratioer(1e-1),
	decigrams: ratioer(1e-1),
	dg: ratioer(1e-1),

	centigram: ratioer(1e-2),
	centigrams: ratioer(1e-2),
	cg: ratioer(1e-2),

	milligram: ratioer(1e-3),
	milligrams: ratioer(1e-3),
	mg: ratioer(1e-3),

	microgram: ratioer(1e-6),
	micrograms: ratioer(1e-6),
	µg: ratioer(1e-6),

	nanogram: ratioer(1e-9),
	nanograms: ratioer(1e-9),
	ng: ratioer(1e-9),

	picogram: ratioer(1e-12),
	picograms: ratioer(1e-12),
	pg: ratioer(1e-12),

	femtogram: ratioer(1e-15),
	femtograms: ratioer(1e-15),
	fg: ratioer(1e-15),

	attogram: ratioer(1e-18),
	attograms: ratioer(1e-18),
	ag: ratioer(1e-18),

	zeptogram: ratioer(1e-21),
	zeptograms: ratioer(1e-21),
	zg: ratioer(1e-21),

	yoctogram: ratioer(1e-24),
	yoctograms: ratioer(1e-24),
	yg: ratioer(1e-24),

	pound: ratioer(poundInGrams),
	pounds: ratioer(poundInGrams),
	lb: ratioer(poundInGrams),

	stone: ratioer(poundInGrams * 14),
	stones: ratioer(poundInGrams * 14),
	st: ratioer(poundInGrams * 14),

	ounce: ratioer(poundInGrams / 16),
	ounces: ratioer(poundInGrams / 16),
	oz: ratioer(poundInGrams / 16),
	'℥': ratioer(poundInGrams / 16),

	'short ton': ratioer(poundInGrams * 2000),
	'short tons': ratioer(poundInGrams * 2000),
	'us ton': ratioer(poundInGrams * 2000),
	'us tons': ratioer(poundInGrams * 2000),

	'long ton': ratioer(poundInGrams * 2240),
	'long tons': ratioer(poundInGrams * 2240),
	'imperial ton': ratioer(poundInGrams * 2240),
	'imperial tons': ratioer(poundInGrams * 2240),
	'displacement ton': ratioer(poundInGrams * 2240),
	'displacement tons': ratioer(poundInGrams * 2240)
};
