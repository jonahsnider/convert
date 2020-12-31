import {invariant, unitFamilies} from './util';

const poundInGrams = 4.5359237e2;

const num2to10 = 1024;
const num2to13 = 8192;
const num2to20 = 1048576;
const num2to23 = 8388608;
const num2to30 = 1073741824;
const num2to33 = 8589934592;
const num2to40 = 1099511627776;
const num2to43 = 8796093022208;
const num2to50 = 1125899906842624;
const num2to53 = 9007199254740992;

if (__DEV__) {
	invariant(num2to10 === 2 ** 10, 'num2to10 was not correct');
	invariant(num2to13 === 2 ** 13, 'num2to10 was not correct');
	invariant(num2to20 === 2 ** 20, 'num2to20 was not correct');
	invariant(num2to23 === 2 ** 23, 'num2to23 was not correct');
	invariant(num2to30 === 2 ** 30, 'num2to30 was not correct');
	invariant(num2to33 === 2 ** 33, 'num2to33 was not correct');
	invariant(num2to40 === 2 ** 40, 'num2to40 was not correct');
	invariant(num2to43 === 2 ** 43, 'num2to43 was not correct');
	invariant(num2to50 === 2 ** 50, 'num2to50 was not correct');
	invariant(num2to53 === 2 ** 53, 'num2to53 was not correct');
}

export const allUnits = {
	//#region Data
	bit: [unitFamilies.Data, 1, 0],
	bits: [unitFamilies.Data, 1, 0],
	b: [unitFamilies.Data, 1, 0],
	unibit: [unitFamilies.Data, 1, 0],
	unibits: [unitFamilies.Data, 1, 0],

	millibit: [unitFamilies.Data, 1e-3, 0],
	millibits: [unitFamilies.Data, 1e-3, 0],

	centibit: [unitFamilies.Data, 1e-2, 0],
	centibits: [unitFamilies.Data, 1e-2, 0],

	decibit: [unitFamilies.Data, 1e-1, 0],
	decibits: [unitFamilies.Data, 1e-1, 0],

	crumb: [unitFamilies.Data, 2, 0],
	crumbs: [unitFamilies.Data, 2, 0],
	dibit: [unitFamilies.Data, 2, 0],
	dibits: [unitFamilies.Data, 2, 0],

	triad: [unitFamilies.Data, 3, 0],
	triads: [unitFamilies.Data, 3, 0],
	triade: [unitFamilies.Data, 3, 0],
	triades: [unitFamilies.Data, 3, 0],
	tribit: [unitFamilies.Data, 3, 0],
	tribits: [unitFamilies.Data, 3, 0],

	nibble: [unitFamilies.Data, 4, 0],
	nibbles: [unitFamilies.Data, 4, 0],
	tetrad: [unitFamilies.Data, 4, 0],
	tetrads: [unitFamilies.Data, 4, 0],
	tetrade: [unitFamilies.Data, 4, 0],
	tetrades: [unitFamilies.Data, 4, 0],
	quadbit: [unitFamilies.Data, 4, 0],
	quadbits: [unitFamilies.Data, 4, 0],
	semioctet: [unitFamilies.Data, 4, 0],
	semioctets: [unitFamilies.Data, 4, 0],
	halfbyte: [unitFamilies.Data, 4, 0],
	halfbytes: [unitFamilies.Data, 4, 0],
	quartet: [unitFamilies.Data, 4, 0],
	quartets: [unitFamilies.Data, 4, 0],

	pentad: [unitFamilies.Data, 5, 0],
	pentads: [unitFamilies.Data, 5, 0],

	hexad: [unitFamilies.Data, 6, 0],
	hexads: [unitFamilies.Data, 6, 0],
	hexade: [unitFamilies.Data, 6, 0],
	hexades: [unitFamilies.Data, 6, 0],
	sextet: [unitFamilies.Data, 6, 0],
	sextets: [unitFamilies.Data, 6, 0],

	heptad: [unitFamilies.Data, 7, 0],
	heptads: [unitFamilies.Data, 7, 0],
	heptade: [unitFamilies.Data, 7, 0],
	heptades: [unitFamilies.Data, 7, 0],

	byte: [unitFamilies.Data, 8, 0],
	bytes: [unitFamilies.Data, 8, 0],
	B: [unitFamilies.Data, 8, 0],
	octect: [unitFamilies.Data, 8, 0],
	octects: [unitFamilies.Data, 8, 0],
	octad: [unitFamilies.Data, 8, 0],
	octads: [unitFamilies.Data, 8, 0],
	octade: [unitFamilies.Data, 8, 0],
	octades: [unitFamilies.Data, 8, 0],

	decabit: [unitFamilies.Data, 10, 0],
	decabits: [unitFamilies.Data, 10, 0],
	declet: [unitFamilies.Data, 10, 0],
	decle: [unitFamilies.Data, 10, 0],
	deckle: [unitFamilies.Data, 10, 0],

	slab: [unitFamilies.Data, 12, 0],
	slabs: [unitFamilies.Data, 12, 0],

	hextet: [unitFamilies.Data, 16, 0],
	hextets: [unitFamilies.Data, 16, 0],

	catena: [unitFamilies.Data, 24, 0],
	catenas: [unitFamilies.Data, 24, 0],

	hectobit: [unitFamilies.Data, 1e2, 0],
	hectobits: [unitFamilies.Data, 1e2, 0],
	hbit: [unitFamilies.Data, 1e2, 0],

	kilobit: [unitFamilies.Data, 1e3, 0],
	kilobits: [unitFamilies.Data, 1e3, 0],
	kbit: [unitFamilies.Data, 1e3, 0],

	kibibit: [unitFamilies.Data, num2to10, 0],
	kibibits: [unitFamilies.Data, num2to10, 0],
	Kibit: [unitFamilies.Data, num2to10, 0],

	kilobyte: [unitFamilies.Data, 8e3, 0],
	kilobytes: [unitFamilies.Data, 8e3, 0],
	kB: [unitFamilies.Data, 8e3, 0],

	kibibyte: [unitFamilies.Data, num2to13, 0],
	kibibytes: [unitFamilies.Data, num2to13, 0],
	KiB: [unitFamilies.Data, num2to13, 0],

	megabit: [unitFamilies.Data, 1e6, 0],
	megabits: [unitFamilies.Data, 1e6, 0],
	Mbit: [unitFamilies.Data, 1e6, 0],

	mebibit: [unitFamilies.Data, num2to20, 0],
	mebibits: [unitFamilies.Data, num2to20, 0],
	Mibit: [unitFamilies.Data, num2to20, 0],

	megabyte: [unitFamilies.Data, 8e6, 0],
	megabytes: [unitFamilies.Data, 8e6, 0],
	MB: [unitFamilies.Data, 8e6, 0],

	mebibyte: [unitFamilies.Data, num2to23, 0],
	mebibytes: [unitFamilies.Data, num2to23, 0],
	MiB: [unitFamilies.Data, num2to23, 0],

	gigabit: [unitFamilies.Data, 1e9, 0],
	gigabits: [unitFamilies.Data, 1e9, 0],
	Gbit: [unitFamilies.Data, 1e9, 0],

	gibibit: [unitFamilies.Data, num2to30, 0],
	gibibits: [unitFamilies.Data, num2to30, 0],
	Gibit: [unitFamilies.Data, num2to30, 0],

	gigabyte: [unitFamilies.Data, 8e9, 0],
	gigabytes: [unitFamilies.Data, 8e9, 0],
	GB: [unitFamilies.Data, 8e9, 0],

	gibibyte: [unitFamilies.Data, num2to33, 0],
	gibibytes: [unitFamilies.Data, num2to33, 0],
	GiB: [unitFamilies.Data, num2to33, 0],

	terabit: [unitFamilies.Data, 1e12, 0],
	terabits: [unitFamilies.Data, 1e12, 0],
	Tbit: [unitFamilies.Data, 1e12, 0],

	tebibit: [unitFamilies.Data, num2to40, 0],
	tebibits: [unitFamilies.Data, num2to40, 0],
	Tibit: [unitFamilies.Data, num2to40, 0],

	terabyte: [unitFamilies.Data, 8e12, 0],
	terabytes: [unitFamilies.Data, 8e12, 0],
	TB: [unitFamilies.Data, 8e12, 0],

	tebibyte: [unitFamilies.Data, num2to43, 0],
	tebibytes: [unitFamilies.Data, num2to43, 0],
	TiB: [unitFamilies.Data, num2to43, 0],

	petabit: [unitFamilies.Data, 1e15, 0],
	petabits: [unitFamilies.Data, 1e15, 0],
	Pbit: [unitFamilies.Data, 1e15, 0],

	pebibit: [unitFamilies.Data, num2to50, 0],
	pebibits: [unitFamilies.Data, num2to50, 0],
	Pibit: [unitFamilies.Data, num2to50, 0],

	petabyte: [unitFamilies.Data, 1e15, 0],
	petabytes: [unitFamilies.Data, 1e15, 0],
	PB: [unitFamilies.Data, 1e15, 0],

	pebibyte: [unitFamilies.Data, num2to53, 0],
	pebibytes: [unitFamilies.Data, num2to53, 0],
	PiB: [unitFamilies.Data, num2to53, 0],
	//#endregion
	//#region Length
	meter: [unitFamilies.Length, 1, 0],
	meters: [unitFamilies.Length, 1, 0],
	metre: [unitFamilies.Length, 1, 0],
	metres: [unitFamilies.Length, 1, 0],
	m: [unitFamilies.Length, 1, 0],

	petameter: [unitFamilies.Length, 1e15, 0],
	petametre: [unitFamilies.Length, 1e15, 0],
	petameters: [unitFamilies.Length, 1e15, 0],
	petametres: [unitFamilies.Length, 1e15, 0],
	Pm: [unitFamilies.Length, 1e15, 0],

	terameter: [unitFamilies.Length, 1e12, 0],
	terametre: [unitFamilies.Length, 1e12, 0],
	terameters: [unitFamilies.Length, 1e12, 0],
	terametres: [unitFamilies.Length, 1e12, 0],
	Tm: [unitFamilies.Length, 1e12, 0],

	gigameter: [unitFamilies.Length, 1e9, 0],
	gigametre: [unitFamilies.Length, 1e9, 0],
	gigameters: [unitFamilies.Length, 1e9, 0],
	gigametres: [unitFamilies.Length, 1e9, 0],
	Gm: [unitFamilies.Length, 1e9, 0],

	megameter: [unitFamilies.Length, 1e6, 0],
	megametre: [unitFamilies.Length, 1e6, 0],
	megameters: [unitFamilies.Length, 1e6, 0],
	megametres: [unitFamilies.Length, 1e6, 0],
	Mm: [unitFamilies.Length, 1e6, 0],

	kilometer: [unitFamilies.Length, 1e3, 0],
	kilometre: [unitFamilies.Length, 1e3, 0],
	kilometers: [unitFamilies.Length, 1e3, 0],
	kilometres: [unitFamilies.Length, 1e3, 0],
	km: [unitFamilies.Length, 1e3, 0],

	hectometer: [unitFamilies.Length, 1e2, 0],
	hectometre: [unitFamilies.Length, 1e2, 0],
	hectometers: [unitFamilies.Length, 1e2, 0],
	hectometres: [unitFamilies.Length, 1e2, 0],
	hm: [unitFamilies.Length, 1e2, 0],

	decameter: [unitFamilies.Length, 10, 0],
	decametre: [unitFamilies.Length, 10, 0],
	decameters: [unitFamilies.Length, 10, 0],
	decametres: [unitFamilies.Length, 10, 0],
	dam: [unitFamilies.Length, 10, 0],

	decimeter: [unitFamilies.Length, 1e-1, 0],
	decimetre: [unitFamilies.Length, 1e-1, 0],
	decimeters: [unitFamilies.Length, 1e-1, 0],
	decimetres: [unitFamilies.Length, 1e-1, 0],
	dm: [unitFamilies.Length, 1e-1, 0],

	centimeter: [unitFamilies.Length, 1e-2, 0],
	centimetre: [unitFamilies.Length, 1e-2, 0],
	centimeters: [unitFamilies.Length, 1e-2, 0],
	centimetres: [unitFamilies.Length, 1e-2, 0],
	cm: [unitFamilies.Length, 1e-2, 0],

	millimeter: [unitFamilies.Length, 1e-3, 0],
	millimetre: [unitFamilies.Length, 1e-3, 0],
	millimeters: [unitFamilies.Length, 1e-3, 0],
	millimetres: [unitFamilies.Length, 1e-3, 0],
	mm: [unitFamilies.Length, 1e-3, 0],

	micrometer: [unitFamilies.Length, 1e-7, 0],
	micrometre: [unitFamilies.Length, 1e-7, 0],
	micrometers: [unitFamilies.Length, 1e-7, 0],
	micrometres: [unitFamilies.Length, 1e-7, 0],
	μm: [unitFamilies.Length, 1e-7, 0],

	nanometer: [unitFamilies.Length, 1e-9, 0],
	nanometre: [unitFamilies.Length, 1e-9, 0],
	nanometers: [unitFamilies.Length, 1e-9, 0],
	nanometres: [unitFamilies.Length, 1e-9, 0],
	nm: [unitFamilies.Length, 1e-9, 0],

	picometer: [unitFamilies.Length, 1e-12, 0],
	picometre: [unitFamilies.Length, 1e-12, 0],
	picometers: [unitFamilies.Length, 1e-12, 0],
	picometres: [unitFamilies.Length, 1e-12, 0],
	pm: [unitFamilies.Length, 1e-12, 0],

	femtometer: [unitFamilies.Length, 1e-15, 0],
	femtometre: [unitFamilies.Length, 1e-15, 0],
	femtometers: [unitFamilies.Length, 1e-15, 0],
	femtometres: [unitFamilies.Length, 1e-15, 0],
	fm: [unitFamilies.Length, 1e-15, 0],

	foot: [unitFamilies.Length, 0.3048, 0],
	feet: [unitFamilies.Length, 0.3048, 0],
	ft: [unitFamilies.Length, 0.3048, 0],

	inch: [unitFamilies.Length, 0.0254, 0],
	inches: [unitFamilies.Length, 0.0254, 0],
	in: [unitFamilies.Length, 0.0254, 0],

	yard: [unitFamilies.Length, 0.9144, 0],
	yards: [unitFamilies.Length, 0.9144, 0],
	yd: [unitFamilies.Length, 0.9144, 0],

	mile: [unitFamilies.Length, 1609.344, 0],
	miles: [unitFamilies.Length, 1609.344, 0],
	mi: [unitFamilies.Length, 1609.344, 0],

	'nautical mile': [unitFamilies.Length, 1852, 0],
	'nautical miles': [unitFamilies.Length, 1852, 0],
	M: [unitFamilies.Length, 1852, 0],
	NM: [unitFamilies.Length, 1852, 0],
	nmi: [unitFamilies.Length, 1852, 0],
	//#endregion
	//#region Mass
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
	'displacement tons': [unitFamilies.Mass, poundInGrams * 2240, 0],
	//#endregion
	//#region Pressure
	pascal: [unitFamilies.Pressure, 1, 0],
	pascals: [unitFamilies.Pressure, 1, 0],
	Pa: [unitFamilies.Pressure, 1, 0],

	femtopascal: [unitFamilies.Pressure, 1e-15, 0],
	femtopascals: [unitFamilies.Pressure, 1e-15, 0],
	fPa: [unitFamilies.Pressure, 1e-15, 0],

	picopascal: [unitFamilies.Pressure, 1e-12, 0],
	picopascals: [unitFamilies.Pressure, 1e-12, 0],
	pPa: [unitFamilies.Pressure, 1e-12, 0],

	nanopascal: [unitFamilies.Pressure, 1e-9, 0],
	nanopascals: [unitFamilies.Pressure, 1e-9, 0],
	nPa: [unitFamilies.Pressure, 1e-9, 0],

	micropascal: [unitFamilies.Pressure, 1e-6, 0],
	micropascals: [unitFamilies.Pressure, 1e-6, 0],
	μPa: [unitFamilies.Pressure, 1e-6, 0],

	millipascal: [unitFamilies.Pressure, 1e-3, 0],
	millipascals: [unitFamilies.Pressure, 1e-3, 0],
	mPa: [unitFamilies.Pressure, 1e-3, 0],

	centipascal: [unitFamilies.Pressure, 1e-2, 0],
	centipascals: [unitFamilies.Pressure, 1e-2, 0],
	cPa: [unitFamilies.Pressure, 1e-2, 0],

	decipascal: [unitFamilies.Pressure, 0.1, 0],
	decipascals: [unitFamilies.Pressure, 0.1, 0],
	dPa: [unitFamilies.Pressure, 0.1, 0],

	decapascal: [unitFamilies.Pressure, 10, 0],
	decapascals: [unitFamilies.Pressure, 10, 0],
	daPa: [unitFamilies.Pressure, 10, 0],

	hectopascal: [unitFamilies.Pressure, 1e2, 0],
	hectopascals: [unitFamilies.Pressure, 1e2, 0],
	hPa: [unitFamilies.Pressure, 1e2, 0],

	kilopascal: [unitFamilies.Pressure, 1e3, 0],
	kilopascals: [unitFamilies.Pressure, 1e3, 0],
	kPa: [unitFamilies.Pressure, 1e3, 0],

	megapascal: [unitFamilies.Pressure, 1e6, 0],
	megapascals: [unitFamilies.Pressure, 1e6, 0],
	MPa: [unitFamilies.Pressure, 1e6, 0],

	gigapascal: [unitFamilies.Pressure, 1e9, 0],
	gigapascals: [unitFamilies.Pressure, 1e9, 0],
	GPa: [unitFamilies.Pressure, 1e9, 0],

	terapascal: [unitFamilies.Pressure, 1e12, 0],
	terapascals: [unitFamilies.Pressure, 1e12, 0],
	TPa: [unitFamilies.Pressure, 1e12, 0],

	petapascal: [unitFamilies.Pressure, 1e15, 0],
	petapascals: [unitFamilies.Pressure, 1e15, 0],
	PPa: [unitFamilies.Pressure, 1e15, 0],

	bar: [unitFamilies.Pressure, 1e5, 0],

	femtobar: [unitFamilies.Pressure, 1e-15, 0],
	femtobars: [unitFamilies.Pressure, 1e-15, 0],
	fbar: [unitFamilies.Pressure, 1e-15, 0],

	picobar: [unitFamilies.Pressure, 1e-12, 0],
	picobars: [unitFamilies.Pressure, 1e-12, 0],
	pbar: [unitFamilies.Pressure, 1e-12, 0],

	nanobar: [unitFamilies.Pressure, 1e-9, 0],
	nanobars: [unitFamilies.Pressure, 1e-9, 0],
	nbar: [unitFamilies.Pressure, 1e-9, 0],

	microbar: [unitFamilies.Pressure, 1e-6, 0],
	microbars: [unitFamilies.Pressure, 1e-6, 0],
	μbar: [unitFamilies.Pressure, 1e-6, 0],

	millibar: [unitFamilies.Pressure, 1e-3, 0],
	millibars: [unitFamilies.Pressure, 1e-3, 0],
	mbar: [unitFamilies.Pressure, 1e-3, 0],

	centibar: [unitFamilies.Pressure, 1e-2, 0],
	centibars: [unitFamilies.Pressure, 1e-2, 0],
	cbar: [unitFamilies.Pressure, 1e-2, 0],

	decibar: [unitFamilies.Pressure, 0.1, 0],
	decibars: [unitFamilies.Pressure, 0.1, 0],
	dbar: [unitFamilies.Pressure, 0.1, 0],

	decabar: [unitFamilies.Pressure, 10, 0],
	decabars: [unitFamilies.Pressure, 10, 0],
	dabar: [unitFamilies.Pressure, 10, 0],

	hectobar: [unitFamilies.Pressure, 1e2, 0],
	hectobars: [unitFamilies.Pressure, 1e2, 0],
	hbar: [unitFamilies.Pressure, 1e2, 0],

	kilobar: [unitFamilies.Pressure, 1e3, 0],
	kilobars: [unitFamilies.Pressure, 1e3, 0],
	kbar: [unitFamilies.Pressure, 1e3, 0],

	megabar: [unitFamilies.Pressure, 1e6, 0],
	megabars: [unitFamilies.Pressure, 1e6, 0],
	Mbar: [unitFamilies.Pressure, 1e6, 0],

	gigabar: [unitFamilies.Pressure, 1e9, 0],
	gigabars: [unitFamilies.Pressure, 1e9, 0],
	Gbar: [unitFamilies.Pressure, 1e9, 0],

	terabar: [unitFamilies.Pressure, 1e12, 0],
	terabars: [unitFamilies.Pressure, 1e12, 0],
	Tbar: [unitFamilies.Pressure, 1e12, 0],

	petabar: [unitFamilies.Pressure, 1e15, 0],
	petabars: [unitFamilies.Pressure, 1e15, 0],
	Pbar: [unitFamilies.Pressure, 1e15, 0],

	torr: [unitFamilies.Pressure, 101325 / 760, 0],

	millitorr: [unitFamilies.Pressure, 101325 / 760 / 1e3, 0],
	millitorrs: [unitFamilies.Pressure, 101325 / 760 / 1e3, 0],
	mTorr: [unitFamilies.Pressure, 101325 / 760 / 1e3, 0],

	atmosphere: [unitFamilies.Pressure, 101325, 0],
	atmospheres: [unitFamilies.Pressure, 101325, 0],
	atm: [unitFamilies.Pressure, 101325, 0],
	//#endregion
	//#region Temperature
	kelvin: [unitFamilies.Temperature, 1, 0],
	kelvins: [unitFamilies.Temperature, 1, 0],
	K: [unitFamilies.Temperature, 1, 0],

	fahrenheit: [unitFamilies.Temperature, 5 / 9, 273.15 - 32],
	F: [unitFamilies.Temperature, 5 / 9, 273.15 - 32],

	celsius: [unitFamilies.Temperature, 1, 273.15],
	C: [unitFamilies.Temperature, 1, 273.15],

	rankine: [unitFamilies.Temperature, 5 / 9, 0],
	R: [unitFamilies.Temperature, 5 / 9, 0],

	delisle: [unitFamilies.Temperature, -2 / 3, 373.15],
	De: [unitFamilies.Temperature, -2 / 3, 373.15],
	//#endregion
	//#region Time
	second: [unitFamilies.Time, 1, 0],
	seconds: [unitFamilies.Time, 1, 0],
	s: [unitFamilies.Time, 1, 0],

	century: [unitFamilies.Time, 3.1556952e9, 0],
	centuries: [unitFamilies.Time, 3.1556952e9, 0],
	c: [unitFamilies.Time, 3.1556952e9, 0],

	day: [unitFamilies.Time, 60 * 60 * 24, 0],
	days: [unitFamilies.Time, 60 * 60 * 24, 0],
	d: [unitFamilies.Time, 60 * 60 * 24, 0],

	decade: [unitFamilies.Time, 315.56952e6, 0],
	decades: [unitFamilies.Time, 315.56952e6, 0],
	dec: [unitFamilies.Time, 315.56952e6, 0],

	fortnight: [unitFamilies.Time, 1.2096e6, 0],
	fortnights: [unitFamilies.Time, 1.2096e6, 0],
	fn: [unitFamilies.Time, 1.2096e6, 0],

	helek: [unitFamilies.Time, 3 + 1 / 3, 0],
	halakim: [unitFamilies.Time, 3 + 1 / 3, 0],

	hour: [unitFamilies.Time, 60 * 60, 0],
	hours: [unitFamilies.Time, 60 * 60, 0],
	h: [unitFamilies.Time, 60 * 60, 0],

	jiffy: [unitFamilies.Time, 1 / 60, 0],
	jiffies: [unitFamilies.Time, 1 / 60, 0],
	j: [unitFamilies.Time, 1 / 60, 0],

	ja: [unitFamilies.Time, 1e-2, 0],

	ke: [unitFamilies.Time, 15 * 60, 0],

	millennium: [unitFamilies.Time, 31.556952e9, 0],
	millennia: [unitFamilies.Time, 31.556952e9, 0],

	milliday: [unitFamilies.Time, (60 * 60 * 24) / 1e3, 0],
	millidays: [unitFamilies.Time, (60 * 60 * 24) / 1e3, 0],
	md: [unitFamilies.Time, (60 * 60 * 24) / 1e3, 0],

	minute: [unitFamilies.Time, 60, 0],
	minutes: [unitFamilies.Time, 60, 0],
	min: [unitFamilies.Time, 60, 0],

	moment: [unitFamilies.Time, 90, 0],
	moments: [unitFamilies.Time, 90, 0],

	month: [unitFamilies.Time, 2.592e6, 0],
	months: [unitFamilies.Time, 2.592e6, 0],
	mo: [unitFamilies.Time, 2.592e6, 0],

	shake: [unitFamilies.Time, 1e-8, 0],
	shakes: [unitFamilies.Time, 1e-8, 0],

	sigma: [unitFamilies.Time, 1e-6, 0],
	sigmas: [unitFamilies.Time, 1e-6, 0],

	svedberg: [unitFamilies.Time, 1e-13, 0],
	svedbergs: [unitFamilies.Time, 1e-13, 0],
	S: [unitFamilies.Time, 1e-13, 0],

	week: [unitFamilies.Time, 60 * 60 * 24 * 7, 0],
	weeks: [unitFamilies.Time, 60 * 60 * 24 * 7, 0],
	wk: [unitFamilies.Time, 60 * 60 * 24 * 7, 0],

	year: [unitFamilies.Time, 31.536e6, 0],
	years: [unitFamilies.Time, 31.536e6, 0],
	a: [unitFamilies.Time, 31.536e6, 0],
	y: [unitFamilies.Time, 31.536e6, 0],
	yr: [unitFamilies.Time, 31.536e6, 0],

	petasecond: [unitFamilies.Time, 1e15, 0],
	petaseconds: [unitFamilies.Time, 1e15, 0],
	Ps: [unitFamilies.Time, 1e15, 0],

	terasecond: [unitFamilies.Time, 1e12, 0],
	teraseconds: [unitFamilies.Time, 1e12, 0],
	Ts: [unitFamilies.Time, 1e12, 0],

	gigasecond: [unitFamilies.Time, 1e9, 0],
	gigaseconds: [unitFamilies.Time, 1e9, 0],
	Gs: [unitFamilies.Time, 1e9, 0],

	megasecond: [unitFamilies.Time, 1e6, 0],
	megaseconds: [unitFamilies.Time, 1e6, 0],
	Ms: [unitFamilies.Time, 1e6, 0],

	kilosecond: [unitFamilies.Time, 1e3, 0],
	kiloseconds: [unitFamilies.Time, 1e3, 0],
	ks: [unitFamilies.Time, 1e3, 0],

	hectosecond: [unitFamilies.Time, 1e2, 0],
	hectoseconds: [unitFamilies.Time, 1e2, 0],
	hs: [unitFamilies.Time, 1e2, 0],

	decasecond: [unitFamilies.Time, 10, 0],
	decaseconds: [unitFamilies.Time, 10, 0],
	das: [unitFamilies.Time, 10, 0],

	decisecond: [unitFamilies.Time, 1e-1, 0],
	deciseconds: [unitFamilies.Time, 1e-1, 0],
	ds: [unitFamilies.Time, 1e-1, 0],

	centisecond: [unitFamilies.Time, 1e-2, 0],
	centiseconds: [unitFamilies.Time, 1e-2, 0],
	cs: [unitFamilies.Time, 1e-2, 0],
	millisecond: [unitFamilies.Time, 1e-3, 0],
	milliseconds: [unitFamilies.Time, 1e-3, 0],
	ms: [unitFamilies.Time, 1e-3, 0],

	microsecond: [unitFamilies.Time, 1e-7, 0],
	microseconds: [unitFamilies.Time, 1e-7, 0],
	μs: [unitFamilies.Time, 1e-7, 0],

	nanosecond: [unitFamilies.Time, 1e-9, 0],
	nanoseconds: [unitFamilies.Time, 1e-9, 0],
	ns: [unitFamilies.Time, 1e-9, 0],

	picosecond: [unitFamilies.Time, 1e-12, 0],
	picoseconds: [unitFamilies.Time, 1e-12, 0],
	ps: [unitFamilies.Time, 1e-12, 0],

	femtosecond: [unitFamilies.Time, 1e-15, 0],
	femtoseconds: [unitFamilies.Time, 1e-15, 0],
	fs: [unitFamilies.Time, 1e-15, 0],
	//#endregion
	//#region Volume
	//#region SI
	'cubic meter': [unitFamilies.Volume, 1, 0],
	'cubic meters': [unitFamilies.Volume, 1, 0],
	'cubic metre': [unitFamilies.Volume, 1, 0],
	'cubic metres': [unitFamilies.Volume, 1, 0],
	'm³': [unitFamilies.Volume, 1, 0],
	m3: [unitFamilies.Volume, 1, 0],

	'cubic kilometer': [unitFamilies.Volume, 1e3, 0],
	'cubic kilometre': [unitFamilies.Volume, 1e3, 0],
	'cubic kilometers': [unitFamilies.Volume, 1e3, 0],
	'cubic kilometres': [unitFamilies.Volume, 1e3, 0],
	'km³': [unitFamilies.Volume, 1e3, 0],
	km3: [unitFamilies.Volume, 1e3, 0],

	'cubic hectometer': [unitFamilies.Volume, 1e6, 0],
	'cubic hectometre': [unitFamilies.Volume, 1e6, 0],
	'cubic hectometers': [unitFamilies.Volume, 1e6, 0],
	'cubic hectometres': [unitFamilies.Volume, 1e6, 0],
	'hm³': [unitFamilies.Volume, 1e6, 0],
	hm3: [unitFamilies.Volume, 1e6, 0],

	'cubic decameter': [unitFamilies.Volume, 10, 0],
	'cubic decametre': [unitFamilies.Volume, 10, 0],
	'cubic decameters': [unitFamilies.Volume, 10, 0],
	'cubic decametres': [unitFamilies.Volume, 10, 0],
	'dam³': [unitFamilies.Volume, 10, 0],
	dam3: [unitFamilies.Volume, 10, 0],

	'cubic decimeter': [unitFamilies.Volume, 1e-1, 0],
	'cubic decimetre': [unitFamilies.Volume, 1e-1, 0],
	'cubic decimeters': [unitFamilies.Volume, 1e-1, 0],
	'cubic decimetres': [unitFamilies.Volume, 1e-1, 0],
	'dm³': [unitFamilies.Volume, 1e-1, 0],
	dm3: [unitFamilies.Volume, 1e-1, 0],

	'cubic centimeter': [unitFamilies.Volume, 1e-6, 0],
	'cubic centimetre': [unitFamilies.Volume, 1e-6, 0],
	'cubic centimeters': [unitFamilies.Volume, 1e-6, 0],
	'cubic centimetres': [unitFamilies.Volume, 1e-6, 0],
	'cm³': [unitFamilies.Volume, 1e-6, 0],
	cc: [unitFamilies.Volume, 1e-6, 0],
	cm3: [unitFamilies.Volume, 1e-6, 0],

	'cubic millimeter': [unitFamilies.Volume, 1e-3, 0],
	'cubic millimetre': [unitFamilies.Volume, 1e-3, 0],
	'cubic millimeters': [unitFamilies.Volume, 1e-3, 0],
	'cubic millimetres': [unitFamilies.Volume, 1e-3, 0],
	'mm³': [unitFamilies.Volume, 1e-3, 0],
	mm3: [unitFamilies.Volume, 1e-3, 0],
	//#endregion

	//#region non-SI metric
	gigaliter: [unitFamilies.Volume, 1e6, 0],
	gigalitre: [unitFamilies.Volume, 1e6, 0],
	gigaliters: [unitFamilies.Volume, 1e6, 0],
	gigalitres: [unitFamilies.Volume, 1e6, 0],
	Gl: [unitFamilies.Volume, 1e6, 0],
	GL: [unitFamilies.Volume, 1e6, 0],

	megaliter: [unitFamilies.Volume, 1e3, 0],
	megalitre: [unitFamilies.Volume, 1e3, 0],
	megaliters: [unitFamilies.Volume, 1e3, 0],
	megalitres: [unitFamilies.Volume, 1e3, 0],
	Ml: [unitFamilies.Volume, 1e3, 0],
	ML: [unitFamilies.Volume, 1e3, 0],

	kiloliter: [unitFamilies.Volume, 1, 0],
	kilolitre: [unitFamilies.Volume, 1, 0],
	kiloliters: [unitFamilies.Volume, 1, 0],
	kilolitres: [unitFamilies.Volume, 1, 0],
	kl: [unitFamilies.Volume, 1, 0],
	kL: [unitFamilies.Volume, 1, 0],

	hectoliter: [unitFamilies.Volume, 1e-1, 0],
	hectolitre: [unitFamilies.Volume, 1e-1, 0],
	hectoliters: [unitFamilies.Volume, 1e-1, 0],
	hectolitres: [unitFamilies.Volume, 1e-1, 0],
	hl: [unitFamilies.Volume, 1e-1, 0],
	hL: [unitFamilies.Volume, 1e-1, 0],

	decaliter: [unitFamilies.Volume, 1e-2, 0],
	decalitre: [unitFamilies.Volume, 1e-2, 0],
	decaliters: [unitFamilies.Volume, 1e-2, 0],
	decalitres: [unitFamilies.Volume, 1e-2, 0],
	dal: [unitFamilies.Volume, 1e-2, 0],
	daL: [unitFamilies.Volume, 1e-2, 0],

	liter: [unitFamilies.Volume, 1e-3, 0],
	litre: [unitFamilies.Volume, 1e-3, 0],
	liters: [unitFamilies.Volume, 1e-3, 0],
	litres: [unitFamilies.Volume, 1e-3, 0],
	l: [unitFamilies.Volume, 1e-3, 0],
	L: [unitFamilies.Volume, 1e-3, 0],

	deciliter: [unitFamilies.Volume, 1e-4, 0],
	decilitre: [unitFamilies.Volume, 1e-4, 0],
	deciliters: [unitFamilies.Volume, 1e-4, 0],
	decilitres: [unitFamilies.Volume, 1e-4, 0],
	dl: [unitFamilies.Volume, 1e-4, 0],
	dL: [unitFamilies.Volume, 1e-4, 0],

	centiliter: [unitFamilies.Volume, 1e-5, 0],
	centilitre: [unitFamilies.Volume, 1e-5, 0],
	centiliters: [unitFamilies.Volume, 1e-5, 0],
	centilitres: [unitFamilies.Volume, 1e-5, 0],
	cl: [unitFamilies.Volume, 1e-5, 0],
	cL: [unitFamilies.Volume, 1e-5, 0],

	milliliter: [unitFamilies.Volume, 1e-6, 0],
	millilitre: [unitFamilies.Volume, 1e-6, 0],
	milliliters: [unitFamilies.Volume, 1e-6, 0],
	millilitres: [unitFamilies.Volume, 1e-6, 0],
	ml: [unitFamilies.Volume, 1e-6, 0],
	mL: [unitFamilies.Volume, 1e-6, 0],

	microliter: [unitFamilies.Volume, 1e9, 0],
	microlitre: [unitFamilies.Volume, 1e9, 0],
	microliters: [unitFamilies.Volume, 1e9, 0],
	microlitres: [unitFamilies.Volume, 1e9, 0],
	μl: [unitFamilies.Volume, 1e9, 0],
	μL: [unitFamilies.Volume, 1e9, 0],

	stere: [unitFamilies.Volume, 1, 0],
	steres: [unitFamilies.Volume, 1, 0],
	//#endregion

	//#region Imperial & US customary
	'cubic mile': [unitFamilies.Volume, 4.2e3, 0],
	'cubic miles': [unitFamilies.Volume, 4.2e3, 0],
	'cu mi': [unitFamilies.Volume, 4.2e3, 0],
	cumi: [unitFamilies.Volume, 4.2e3, 0],
	mi3: [unitFamilies.Volume, 4.2e3, 0],

	'acre-foot': [unitFamilies.Volume, 1233.48183754752, 0],
	'acre-feet': [unitFamilies.Volume, 1233.48183754752, 0],
	'ac⋅ft': [unitFamilies.Volume, 1233.48183754752, 0],
	'ac ft': [unitFamilies.Volume, 1233.48183754752, 0],

	'cubic yard': [unitFamilies.Volume, 0.76, 0],
	'cubic yards': [unitFamilies.Volume, 0.76, 0],
	'cu yd': [unitFamilies.Volume, 0.76, 0],
	cuyd: [unitFamilies.Volume, 0.76, 0],
	yd3: [unitFamilies.Volume, 0.76, 0],

	'cubic foot': [unitFamilies.Volume, 0.028, 0],
	'cubic feet': [unitFamilies.Volume, 0.028, 0],
	'cu ft': [unitFamilies.Volume, 0.028, 0],
	cuft: [unitFamilies.Volume, 0.028, 0],
	ft3: [unitFamilies.Volume, 0.028, 0],
	cufoot: [unitFamilies.Volume, 0.028, 0],
	foot3: [unitFamilies.Volume, 0.028, 0],

	'board foot': [unitFamilies.Volume, 0.002359737, 0],
	'board feet': [unitFamilies.Volume, 0.002359737, 0],

	'cubic inch': [unitFamilies.Volume, 0.000016387064, 0],
	'cubic inches': [unitFamilies.Volume, 0.000016387064, 0],
	'cu in': [unitFamilies.Volume, 0.000016387064, 0],
	cuin: [unitFamilies.Volume, 0.000016387064, 0],
	in3: [unitFamilies.Volume, 0.000016387064, 0],

	'measurement ton': [unitFamilies.Volume, 1.133, 0],
	'measurement tons': [unitFamilies.Volume, 1.133, 0],
	MTON: [unitFamilies.Volume, 1.133, 0],
	//#endregion

	//#region Imperial
	// https://en.wikipedia.org/wiki/Imperial_units#Volume
	'imperial barrel': [unitFamilies.Volume, 0.16, 0],
	'imperial barrels': [unitFamilies.Volume, 0.16, 0],
	'imp bbl': [unitFamilies.Volume, 0.16, 0],
	impbbl: [unitFamilies.Volume, 0.16, 0],

	kilderkin: [unitFamilies.Volume, 0.08318, 0],
	kilderkins: [unitFamilies.Volume, 0.08318, 0],

	firkin: [unitFamilies.Volume, 0.041, 0],
	firkins: [unitFamilies.Volume, 0.041, 0],

	'imperial bushel': [unitFamilies.Volume, 0.03636872, 0],
	'imperial bushels': [unitFamilies.Volume, 0.03636872, 0],
	'imp bsh': [unitFamilies.Volume, 0.03636872, 0],
	'imp bu': [unitFamilies.Volume, 0.03636872, 0],
	impbsh: [unitFamilies.Volume, 0.03636872, 0],
	impbu: [unitFamilies.Volume, 0.03636872, 0],

	'imperial peck': [unitFamilies.Volume, 0.00909218, 0],
	'imperial pecks': [unitFamilies.Volume, 0.00909218, 0],
	pk: [unitFamilies.Volume, 0.00909218, 0],
	imppk: [unitFamilies.Volume, 0.00909218, 0],

	'imperial quart': [unitFamilies.Volume, 0.0011365225, 0],
	'imperial quarts': [unitFamilies.Volume, 0.0011365225, 0],
	'imp qt': [unitFamilies.Volume, 0.0011365225, 0],
	impqt: [unitFamilies.Volume, 0.0011365225, 0],

	'imperial gallon': [unitFamilies.Volume, 0.00454609, 0],
	'imperial gallons': [unitFamilies.Volume, 0.00454609, 0],
	'imp gal': [unitFamilies.Volume, 0.00454609, 0],
	impgal: [unitFamilies.Volume, 0.00454609, 0],

	'imperial pint': [unitFamilies.Volume, 0.00056826125, 0],
	'imperial pints': [unitFamilies.Volume, 0.00056826125, 0],
	'imp pt': [unitFamilies.Volume, 0.00056826125, 0],
	imppt: [unitFamilies.Volume, 0.00056826125, 0],

	gill: [unitFamilies.Volume, 0.0001420653125, 0],
	gills: [unitFamilies.Volume, 0.0001420653125, 0],
	gi: [unitFamilies.Volume, 0.0001420653125, 0],
	impgi: [unitFamilies.Volume, 0.0001420653125, 0],

	'imperial fluid ounce': [unitFamilies.Volume, 2.84130625e-5, 0],
	'imperial fluid ounces': [unitFamilies.Volume, 2.84130625e-5, 0],
	'imp fl oz': [unitFamilies.Volume, 2.84130625e-5, 0],
	impoz: [unitFamilies.Volume, 2.84130625e-5, 0],
	//#endregion

	//#region US customary liquid measure
	'US barrel': [unitFamilies.Volume, 0.164, 0],
	'US barrels': [unitFamilies.Volume, 0.164, 0],
	'US bbl': [unitFamilies.Volume, 0.164, 0],
	'U.S. bbl': [unitFamilies.Volume, 0.164, 0],
	USbbl: [unitFamilies.Volume, 0.164, 0],
	usbbl: [unitFamilies.Volume, 0.164, 0],
	'U.S.bbl': [unitFamilies.Volume, 0.164, 0],

	barrel: [unitFamilies.Volume, 1 / 6.2898, 0],
	barrels: [unitFamilies.Volume, 1 / 6.2898, 0],
	bbl: [unitFamilies.Volume, 1 / 6.2898, 0],
	oilbbl: [unitFamilies.Volume, 1 / 6.2898, 0],

	'US beer barrel': [unitFamilies.Volume, 0.117, 0],
	'US beer barrels': [unitFamilies.Volume, 0.117, 0],
	USbeerbbl: [unitFamilies.Volume, 0.117, 0],
	usbeerbbl: [unitFamilies.Volume, 0.117, 0],
	'U.S.beerbbl': [unitFamilies.Volume, 0.117, 0],

	'US gallon': [unitFamilies.Volume, 1 / 264.1721, 0],
	'US gallons': [unitFamilies.Volume, 1 / 264.1721, 0],
	'US gal': [unitFamilies.Volume, 1 / 264.1721, 0],
	'U.S. gal': [unitFamilies.Volume, 1 / 264.1721, 0],
	USgal: [unitFamilies.Volume, 1 / 264.1721, 0],
	usgal: [unitFamilies.Volume, 1 / 264.1721, 0],
	'U.S.gal': [unitFamilies.Volume, 1 / 264.1721, 0],

	'US quart': [unitFamilies.Volume, 9.46352946e-4, 0],
	'US quarts': [unitFamilies.Volume, 9.46352946e-4, 0],
	'US qt': [unitFamilies.Volume, 9.46352946e-4, 0],
	'U.S. qt': [unitFamilies.Volume, 9.46352946e-4, 0],
	USqt: [unitFamilies.Volume, 9.46352946e-4, 0],
	usqt: [unitFamilies.Volume, 9.46352946e-4, 0],
	'U.S.qt': [unitFamilies.Volume, 9.46352946e-4, 0],

	'US pint': [unitFamilies.Volume, 4.73176473e-4, 0],
	'US pints': [unitFamilies.Volume, 4.73176473e-4, 0],
	'US pt': [unitFamilies.Volume, 4.73176473e-4, 0],
	'U.S. pt': [unitFamilies.Volume, 4.73176473e-4, 0],
	USpt: [unitFamilies.Volume, 4.73176473e-4, 0],
	uspt: [unitFamilies.Volume, 4.73176473e-4, 0],
	'U.S.pt': [unitFamilies.Volume, 4.73176473e-4, 0],

	'US gill': [unitFamilies.Volume, 1.18e-4, 0],
	'US gills': [unitFamilies.Volume, 1.18e-4, 0],
	USgi: [unitFamilies.Volume, 1.18e-4, 0],
	usgi: [unitFamilies.Volume, 1.18e-4, 0],
	'U.S.gi': [unitFamilies.Volume, 1.18e-4, 0],

	'US fluid ounce': [unitFamilies.Volume, 29.5735295625e-6, 0],
	'US fluid ounces': [unitFamilies.Volume, 29.5735295625e-6, 0],
	'US fl oz': [unitFamilies.Volume, 29.5735295625e-6, 0],
	USoz: [unitFamilies.Volume, 29.5735295625e-6, 0],
	USflox: [unitFamilies.Volume, 29.5735295625e-6, 0],
	usoz: [unitFamilies.Volume, 29.5735295625e-6, 0],
	usfloz: [unitFamilies.Volume, 29.5735295625e-6, 0],
	'U.S.oz': [unitFamilies.Volume, 29.5735295625e-6, 0],
	'U.S.floz': [unitFamilies.Volume, 29.5735295625e-6, 0],
	//#endregion

	//#region US customary dry measure
	'US dry barrel': [unitFamilies.Volume, 0.12, 0],
	'US dry barrels': [unitFamilies.Volume, 0.12, 0],
	'US dry bbl': [unitFamilies.Volume, 0.12, 0],
	'U.S. dry bbl': [unitFamilies.Volume, 0.12, 0],
	USdrybbl: [unitFamilies.Volume, 0.12, 0],
	usdrybbl: [unitFamilies.Volume, 0.12, 0],
	drybbl: [unitFamilies.Volume, 0.12, 0],
	'U.S.drybbl': [unitFamilies.Volume, 0.12, 0],

	'US bushel': [unitFamilies.Volume, 3.52391e-2, 0],
	'US bushels': [unitFamilies.Volume, 3.52391e-2, 0],
	'US bsh': [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S. bsh': [unitFamilies.Volume, 3.52391e-2, 0],
	USbsh: [unitFamilies.Volume, 3.52391e-2, 0],
	usbsh: [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S.bsh': [unitFamilies.Volume, 3.52391e-2, 0],
	'US bu': [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S. bu': [unitFamilies.Volume, 3.52391e-2, 0],
	USbu: [unitFamilies.Volume, 3.52391e-2, 0],
	usbu: [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S.bu': [unitFamilies.Volume, 3.52391e-2, 0],

	'US kenning': [unitFamilies.Volume, 0.12, 0],
	'US kennings': [unitFamilies.Volume, 0.12, 0],
	'U.S. kenning': [unitFamilies.Volume, 0.12, 0],
	USkenning: [unitFamilies.Volume, 0.12, 0],
	'U.S.kenning': [unitFamilies.Volume, 0.12, 0],
	uskenning: [unitFamilies.Volume, 0.12, 0],

	'US peck': [unitFamilies.Volume, 9.09218e-3, 0],
	'US pk': [unitFamilies.Volume, 9.09218e-3, 0],
	'U.S. pk': [unitFamilies.Volume, 9.09218e-3, 0],
	Uspk: [unitFamilies.Volume, 9.09218e-3, 0],
	uspk: [unitFamilies.Volume, 9.09218e-3, 0],
	'U.S.pk': [unitFamilies.Volume, 9.09218e-3, 0],

	'US dry gallon': [unitFamilies.Volume, 4.40488377086e-3, 0],
	'US dry gal': [unitFamilies.Volume, 4.40488377086e-3, 0],
	'U.S. dry gal': [unitFamilies.Volume, 4.40488377086e-3, 0],
	USdrygal: [unitFamilies.Volume, 4.40488377086e-3, 0],
	usdrygal: [unitFamilies.Volume, 4.40488377086e-3, 0],
	drygal: [unitFamilies.Volume, 4.40488377086e-3, 0],
	'U.S.drygal': [unitFamilies.Volume, 4.40488377086e-3, 0],

	'US dry quart': [unitFamilies.Volume, 0.946352946e-3, 0],
	'US dry qt': [unitFamilies.Volume, 0.946352946e-3, 0],
	'U.S. dry qt': [unitFamilies.Volume, 0.946352946e-3, 0],
	USdryqt: [unitFamilies.Volume, 0.946352946e-3, 0],
	usdryqt: [unitFamilies.Volume, 0.946352946e-3, 0],
	dryqt: [unitFamilies.Volume, 0.946352946e-3, 0],
	'U.S.dryqt': [unitFamilies.Volume, 0.946352946e-3, 0],

	'US dry pint': [unitFamilies.Volume, 33.6003125, 0],
	'US dry pt': [unitFamilies.Volume, 33.6003125, 0],
	'U.S. dry pt': [unitFamilies.Volume, 33.6003125, 0],
	USdrypt: [unitFamilies.Volume, 33.6003125, 0],
	'U.S.drypt': [unitFamilies.Volume, 33.6003125, 0],
	usdrypt: [unitFamilies.Volume, 33.6003125, 0],
	drypt: [unitFamilies.Volume, 33.6003125, 0]
	//#endregion
	//#endregion
} as const;
