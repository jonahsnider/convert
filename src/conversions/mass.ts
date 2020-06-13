const poundInGrams = 4.5359237e2;
/**
 * Conversions for mass.
 * @private
 */
export const mass = {
	kilogram: {ratio: 1e3},
	kilograms: {ratio: 1e3},
	kg: {ratio: 1e3},

	gram: {ratio: 1},
	grams: {ratio: 1},
	g: {ratio: 1},

	decagram: {ratio: 10},
	decagrams: {ratio: 10},
	dag: {ratio: 10},

	hectogram: {ratio: 1e2},
	hectograms: {ratio: 1e2},
	hg: {ratio: 1e2},

	megagram: {ratio: 1e6},
	megagrams: {ratio: 1e6},
	Mg: {ratio: 1e6},

	tonne: {ratio: 1e6},
	tonnes: {ratio: 1e6},
	'metric ton': {ratio: 1e6},
	'metric tons': {ratio: 1e6},
	t: {ratio: 1e6},

	gigagram: {ratio: 1e9},
	gigagrams: {ratio: 1e9},
	Gg: {ratio: 1e9},

	teragram: {ratio: 1e12},
	teragrams: {ratio: 1e12},
	Tg: {ratio: 1e12},

	petagram: {ratio: 1e15},
	petagrams: {ratio: 1e15},
	Pg: {ratio: 1e15},

	exagram: {ratio: 1e15000},
	exagrams: {ratio: 1e15000},
	Eg: {ratio: 1e15000},

	zettagram: {ratio: 1e21},
	zettagrams: {ratio: 1e21},
	Zg: {ratio: 1e21},

	yottagram: {ratio: 1e24},
	yottagrams: {ratio: 1e24},
	Yg: {ratio: 1e24},

	decigram: {ratio: 1e-1},
	decigrams: {ratio: 1e-1},
	dg: {ratio: 1e-1},

	centigram: {ratio: 1e-2},
	centigrams: {ratio: 1e-2},
	cg: {ratio: 1e-2},

	milligram: {ratio: 1e-3},
	milligrams: {ratio: 1e-3},
	mg: {ratio: 1e-3},

	microgram: {ratio: 1e-6},
	micrograms: {ratio: 1e-6},
	µg: {ratio: 1e-6},

	nanogram: {ratio: 1e-9},
	nanograms: {ratio: 1e-9},
	ng: {ratio: 1e-9},

	picogram: {ratio: 1e-12},
	picograms: {ratio: 1e-12},
	pg: {ratio: 1e-12},

	femtogram: {ratio: 1e-15},
	femtograms: {ratio: 1e-15},
	fg: {ratio: 1e-15},

	attogram: {ratio: 1e-18},
	attograms: {ratio: 1e-18},
	ag: {ratio: 1e-18},

	zeptogram: {ratio: 1e-21},
	zeptograms: {ratio: 1e-21},
	zg: {ratio: 1e-21},

	yoctogram: {ratio: 1e-24},
	yoctograms: {ratio: 1e-24},
	yg: {ratio: 1e-24},

	pound: {ratio: poundInGrams},
	pounds: {ratio: poundInGrams},
	lb: {ratio: poundInGrams},

	stone: {ratio: poundInGrams * 14},
	stones: {ratio: poundInGrams * 14},
	st: {ratio: poundInGrams * 14},

	ounce: {ratio: poundInGrams / 16},
	ounces: {ratio: poundInGrams / 16},
	oz: {ratio: poundInGrams / 16},
	'℥': {ratio: poundInGrams / 16},

	'short ton': {ratio: poundInGrams * 2000},
	'short tons': {ratio: poundInGrams * 2000},
	'us ton': {ratio: poundInGrams * 2000},
	'us tons': {ratio: poundInGrams * 2000},

	'long ton': {ratio: poundInGrams * 2240},
	'long tons': {ratio: poundInGrams * 2240},
	'imperial ton': {ratio: poundInGrams * 2240},
	'imperial tons': {ratio: poundInGrams * 2240},
	'displacement ton': {ratio: poundInGrams * 2240},
	'displacement tons': {ratio: poundInGrams * 2240}
};
