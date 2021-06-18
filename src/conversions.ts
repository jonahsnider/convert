import {unitFamily} from './util';

export const enum UnitIndex {
	Family,
	Ratio,
	Difference
}

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

export const allUnits = {
	__proto__: null,

	//#region Data
	bit: [unitFamily.Data, 1, 0],
	bits: [unitFamily.Data, 1, 0],
	b: [unitFamily.Data, 1, 0],
	unibit: [unitFamily.Data, 1, 0],
	unibits: [unitFamily.Data, 1, 0],

	millibit: [unitFamily.Data, 1e-3, 0],
	millibits: [unitFamily.Data, 1e-3, 0],

	centibit: [unitFamily.Data, 1e-2, 0],
	centibits: [unitFamily.Data, 1e-2, 0],

	decibit: [unitFamily.Data, 1e-1, 0],
	decibits: [unitFamily.Data, 1e-1, 0],

	crumb: [unitFamily.Data, 2, 0],
	crumbs: [unitFamily.Data, 2, 0],
	dibit: [unitFamily.Data, 2, 0],
	dibits: [unitFamily.Data, 2, 0],

	triad: [unitFamily.Data, 3, 0],
	triads: [unitFamily.Data, 3, 0],
	triade: [unitFamily.Data, 3, 0],
	triades: [unitFamily.Data, 3, 0],
	tribit: [unitFamily.Data, 3, 0],
	tribits: [unitFamily.Data, 3, 0],

	nibble: [unitFamily.Data, 4, 0],
	nibbles: [unitFamily.Data, 4, 0],
	tetrad: [unitFamily.Data, 4, 0],
	tetrads: [unitFamily.Data, 4, 0],
	tetrade: [unitFamily.Data, 4, 0],
	tetrades: [unitFamily.Data, 4, 0],
	quadbit: [unitFamily.Data, 4, 0],
	quadbits: [unitFamily.Data, 4, 0],
	semioctet: [unitFamily.Data, 4, 0],
	semioctets: [unitFamily.Data, 4, 0],
	halfbyte: [unitFamily.Data, 4, 0],
	halfbytes: [unitFamily.Data, 4, 0],
	quartet: [unitFamily.Data, 4, 0],
	quartets: [unitFamily.Data, 4, 0],

	pentad: [unitFamily.Data, 5, 0],
	pentads: [unitFamily.Data, 5, 0],

	hexad: [unitFamily.Data, 6, 0],
	hexads: [unitFamily.Data, 6, 0],
	hexade: [unitFamily.Data, 6, 0],
	hexades: [unitFamily.Data, 6, 0],
	sextet: [unitFamily.Data, 6, 0],
	sextets: [unitFamily.Data, 6, 0],

	heptad: [unitFamily.Data, 7, 0],
	heptads: [unitFamily.Data, 7, 0],
	heptade: [unitFamily.Data, 7, 0],
	heptades: [unitFamily.Data, 7, 0],

	byte: [unitFamily.Data, 8, 0],
	bytes: [unitFamily.Data, 8, 0],
	B: [unitFamily.Data, 8, 0],
	octect: [unitFamily.Data, 8, 0],
	octects: [unitFamily.Data, 8, 0],
	octad: [unitFamily.Data, 8, 0],
	octads: [unitFamily.Data, 8, 0],
	octade: [unitFamily.Data, 8, 0],
	octades: [unitFamily.Data, 8, 0],

	decabit: [unitFamily.Data, 10, 0],
	decabits: [unitFamily.Data, 10, 0],
	declet: [unitFamily.Data, 10, 0],
	decle: [unitFamily.Data, 10, 0],
	deckle: [unitFamily.Data, 10, 0],

	slab: [unitFamily.Data, 12, 0],
	slabs: [unitFamily.Data, 12, 0],

	hextet: [unitFamily.Data, 16, 0],
	hextets: [unitFamily.Data, 16, 0],

	catena: [unitFamily.Data, 24, 0],
	catenas: [unitFamily.Data, 24, 0],

	hectobit: [unitFamily.Data, 1e2, 0],
	hectobits: [unitFamily.Data, 1e2, 0],
	hbit: [unitFamily.Data, 1e2, 0],

	kilobit: [unitFamily.Data, 1e3, 0],
	kilobits: [unitFamily.Data, 1e3, 0],
	kbit: [unitFamily.Data, 1e3, 0],

	kibibit: [unitFamily.Data, num2to10, 0],
	kibibits: [unitFamily.Data, num2to10, 0],
	Kibit: [unitFamily.Data, num2to10, 0],

	kilobyte: [unitFamily.Data, 8e3, 0],
	kilobytes: [unitFamily.Data, 8e3, 0],
	kB: [unitFamily.Data, 8e3, 0],

	kibibyte: [unitFamily.Data, num2to13, 0],
	kibibytes: [unitFamily.Data, num2to13, 0],
	KiB: [unitFamily.Data, num2to13, 0],

	megabit: [unitFamily.Data, 1e6, 0],
	megabits: [unitFamily.Data, 1e6, 0],
	Mbit: [unitFamily.Data, 1e6, 0],

	mebibit: [unitFamily.Data, num2to20, 0],
	mebibits: [unitFamily.Data, num2to20, 0],
	Mibit: [unitFamily.Data, num2to20, 0],

	megabyte: [unitFamily.Data, 8e6, 0],
	megabytes: [unitFamily.Data, 8e6, 0],
	MB: [unitFamily.Data, 8e6, 0],

	mebibyte: [unitFamily.Data, num2to23, 0],
	mebibytes: [unitFamily.Data, num2to23, 0],
	MiB: [unitFamily.Data, num2to23, 0],

	gigabit: [unitFamily.Data, 1e9, 0],
	gigabits: [unitFamily.Data, 1e9, 0],
	Gbit: [unitFamily.Data, 1e9, 0],

	gibibit: [unitFamily.Data, num2to30, 0],
	gibibits: [unitFamily.Data, num2to30, 0],
	Gibit: [unitFamily.Data, num2to30, 0],

	gigabyte: [unitFamily.Data, 8e9, 0],
	gigabytes: [unitFamily.Data, 8e9, 0],
	GB: [unitFamily.Data, 8e9, 0],

	gibibyte: [unitFamily.Data, num2to33, 0],
	gibibytes: [unitFamily.Data, num2to33, 0],
	GiB: [unitFamily.Data, num2to33, 0],

	terabit: [unitFamily.Data, 1e12, 0],
	terabits: [unitFamily.Data, 1e12, 0],
	Tbit: [unitFamily.Data, 1e12, 0],

	tebibit: [unitFamily.Data, num2to40, 0],
	tebibits: [unitFamily.Data, num2to40, 0],
	Tibit: [unitFamily.Data, num2to40, 0],

	terabyte: [unitFamily.Data, 8e12, 0],
	terabytes: [unitFamily.Data, 8e12, 0],
	TB: [unitFamily.Data, 8e12, 0],

	tebibyte: [unitFamily.Data, num2to43, 0],
	tebibytes: [unitFamily.Data, num2to43, 0],
	TiB: [unitFamily.Data, num2to43, 0],

	petabit: [unitFamily.Data, 1e15, 0],
	petabits: [unitFamily.Data, 1e15, 0],
	Pbit: [unitFamily.Data, 1e15, 0],

	pebibit: [unitFamily.Data, num2to50, 0],
	pebibits: [unitFamily.Data, num2to50, 0],
	Pibit: [unitFamily.Data, num2to50, 0],

	petabyte: [unitFamily.Data, 8e15, 0],
	petabytes: [unitFamily.Data, 8e15, 0],
	PB: [unitFamily.Data, 8e15, 0],

	pebibyte: [unitFamily.Data, num2to53, 0],
	pebibytes: [unitFamily.Data, num2to53, 0],
	PiB: [unitFamily.Data, num2to53, 0],
	//#endregion
	//#region Length
	meter: [unitFamily.Length, 1, 0],
	meters: [unitFamily.Length, 1, 0],
	metre: [unitFamily.Length, 1, 0],
	metres: [unitFamily.Length, 1, 0],
	m: [unitFamily.Length, 1, 0],

	petameter: [unitFamily.Length, 1e15, 0],
	petametre: [unitFamily.Length, 1e15, 0],
	petameters: [unitFamily.Length, 1e15, 0],
	petametres: [unitFamily.Length, 1e15, 0],
	Pm: [unitFamily.Length, 1e15, 0],

	terameter: [unitFamily.Length, 1e12, 0],
	terametre: [unitFamily.Length, 1e12, 0],
	terameters: [unitFamily.Length, 1e12, 0],
	terametres: [unitFamily.Length, 1e12, 0],
	Tm: [unitFamily.Length, 1e12, 0],

	gigameter: [unitFamily.Length, 1e9, 0],
	gigametre: [unitFamily.Length, 1e9, 0],
	gigameters: [unitFamily.Length, 1e9, 0],
	gigametres: [unitFamily.Length, 1e9, 0],
	Gm: [unitFamily.Length, 1e9, 0],

	megameter: [unitFamily.Length, 1e6, 0],
	megametre: [unitFamily.Length, 1e6, 0],
	megameters: [unitFamily.Length, 1e6, 0],
	megametres: [unitFamily.Length, 1e6, 0],
	Mm: [unitFamily.Length, 1e6, 0],

	kilometer: [unitFamily.Length, 1e3, 0],
	kilometre: [unitFamily.Length, 1e3, 0],
	kilometers: [unitFamily.Length, 1e3, 0],
	kilometres: [unitFamily.Length, 1e3, 0],
	km: [unitFamily.Length, 1e3, 0],

	hectometer: [unitFamily.Length, 1e2, 0],
	hectometre: [unitFamily.Length, 1e2, 0],
	hectometers: [unitFamily.Length, 1e2, 0],
	hectometres: [unitFamily.Length, 1e2, 0],
	hm: [unitFamily.Length, 1e2, 0],

	decameter: [unitFamily.Length, 10, 0],
	decametre: [unitFamily.Length, 10, 0],
	decameters: [unitFamily.Length, 10, 0],
	decametres: [unitFamily.Length, 10, 0],
	dam: [unitFamily.Length, 10, 0],

	decimeter: [unitFamily.Length, 1e-1, 0],
	decimetre: [unitFamily.Length, 1e-1, 0],
	decimeters: [unitFamily.Length, 1e-1, 0],
	decimetres: [unitFamily.Length, 1e-1, 0],
	dm: [unitFamily.Length, 1e-1, 0],

	centimeter: [unitFamily.Length, 1e-2, 0],
	centimetre: [unitFamily.Length, 1e-2, 0],
	centimeters: [unitFamily.Length, 1e-2, 0],
	centimetres: [unitFamily.Length, 1e-2, 0],
	cm: [unitFamily.Length, 1e-2, 0],

	millimeter: [unitFamily.Length, 1e-3, 0],
	millimetre: [unitFamily.Length, 1e-3, 0],
	millimeters: [unitFamily.Length, 1e-3, 0],
	millimetres: [unitFamily.Length, 1e-3, 0],
	mm: [unitFamily.Length, 1e-3, 0],

	micrometer: [unitFamily.Length, 1e-7, 0],
	micrometre: [unitFamily.Length, 1e-7, 0],
	micrometers: [unitFamily.Length, 1e-7, 0],
	micrometres: [unitFamily.Length, 1e-7, 0],
	μm: [unitFamily.Length, 1e-7, 0],

	nanometer: [unitFamily.Length, 1e-9, 0],
	nanometre: [unitFamily.Length, 1e-9, 0],
	nanometers: [unitFamily.Length, 1e-9, 0],
	nanometres: [unitFamily.Length, 1e-9, 0],
	nm: [unitFamily.Length, 1e-9, 0],

	picometer: [unitFamily.Length, 1e-12, 0],
	picometre: [unitFamily.Length, 1e-12, 0],
	picometers: [unitFamily.Length, 1e-12, 0],
	picometres: [unitFamily.Length, 1e-12, 0],
	pm: [unitFamily.Length, 1e-12, 0],

	femtometer: [unitFamily.Length, 1e-15, 0],
	femtometre: [unitFamily.Length, 1e-15, 0],
	femtometers: [unitFamily.Length, 1e-15, 0],
	femtometres: [unitFamily.Length, 1e-15, 0],
	fm: [unitFamily.Length, 1e-15, 0],

	foot: [unitFamily.Length, 0.3048, 0],
	feet: [unitFamily.Length, 0.3048, 0],
	ft: [unitFamily.Length, 0.3048, 0],

	inch: [unitFamily.Length, 0.0254, 0],
	inches: [unitFamily.Length, 0.0254, 0],
	in: [unitFamily.Length, 0.0254, 0],

	yard: [unitFamily.Length, 0.9144, 0],
	yards: [unitFamily.Length, 0.9144, 0],
	yd: [unitFamily.Length, 0.9144, 0],

	mile: [unitFamily.Length, 1609.344, 0],
	miles: [unitFamily.Length, 1609.344, 0],
	mi: [unitFamily.Length, 1609.344, 0],

	'nautical mile': [unitFamily.Length, 1852, 0],
	'nautical miles': [unitFamily.Length, 1852, 0],
	M: [unitFamily.Length, 1852, 0],
	NM: [unitFamily.Length, 1852, 0],
	nmi: [unitFamily.Length, 1852, 0],
	//#endregion
	//#region Mass
	kilogram: [unitFamily.Mass, 1e3, 0],
	kilograms: [unitFamily.Mass, 1e3, 0],
	kg: [unitFamily.Mass, 1e3, 0],

	gram: [unitFamily.Mass, 1, 0],
	grams: [unitFamily.Mass, 1, 0],
	g: [unitFamily.Mass, 1, 0],

	decagram: [unitFamily.Mass, 10, 0],
	decagrams: [unitFamily.Mass, 10, 0],
	dag: [unitFamily.Mass, 10, 0],

	hectogram: [unitFamily.Mass, 1e2, 0],
	hectograms: [unitFamily.Mass, 1e2, 0],
	hg: [unitFamily.Mass, 1e2, 0],

	megagram: [unitFamily.Mass, 1e6, 0],
	megagrams: [unitFamily.Mass, 1e6, 0],
	Mg: [unitFamily.Mass, 1e6, 0],

	tonne: [unitFamily.Mass, 1e6, 0],
	tonnes: [unitFamily.Mass, 1e6, 0],
	'metric ton': [unitFamily.Mass, 1e6, 0],
	'metric tons': [unitFamily.Mass, 1e6, 0],
	t: [unitFamily.Mass, 1e6, 0],

	gigagram: [unitFamily.Mass, 1e9, 0],
	gigagrams: [unitFamily.Mass, 1e9, 0],
	Gg: [unitFamily.Mass, 1e9, 0],

	teragram: [unitFamily.Mass, 1e12, 0],
	teragrams: [unitFamily.Mass, 1e12, 0],
	Tg: [unitFamily.Mass, 1e12, 0],

	petagram: [unitFamily.Mass, 1e15, 0],
	petagrams: [unitFamily.Mass, 1e15, 0],
	Pg: [unitFamily.Mass, 1e15, 0],

	exagram: [unitFamily.Mass, 1e18, 0],
	exagrams: [unitFamily.Mass, 1e18, 0],
	Eg: [unitFamily.Mass, 1e18, 0],

	zettagram: [unitFamily.Mass, 1e21, 0],
	zettagrams: [unitFamily.Mass, 1e21, 0],
	Zg: [unitFamily.Mass, 1e21, 0],

	yottagram: [unitFamily.Mass, 1e24, 0],
	yottagrams: [unitFamily.Mass, 1e24, 0],
	Yg: [unitFamily.Mass, 1e24, 0],

	decigram: [unitFamily.Mass, 1e-1, 0],
	decigrams: [unitFamily.Mass, 1e-1, 0],
	dg: [unitFamily.Mass, 1e-1, 0],

	centigram: [unitFamily.Mass, 1e-2, 0],
	centigrams: [unitFamily.Mass, 1e-2, 0],
	cg: [unitFamily.Mass, 1e-2, 0],

	milligram: [unitFamily.Mass, 1e-3, 0],
	milligrams: [unitFamily.Mass, 1e-3, 0],
	mg: [unitFamily.Mass, 1e-3, 0],

	microgram: [unitFamily.Mass, 1e-6, 0],
	micrograms: [unitFamily.Mass, 1e-6, 0],
	µg: [unitFamily.Mass, 1e-6, 0],

	nanogram: [unitFamily.Mass, 1e-9, 0],
	nanograms: [unitFamily.Mass, 1e-9, 0],
	ng: [unitFamily.Mass, 1e-9, 0],

	picogram: [unitFamily.Mass, 1e-12, 0],
	picograms: [unitFamily.Mass, 1e-12, 0],
	pg: [unitFamily.Mass, 1e-12, 0],

	femtogram: [unitFamily.Mass, 1e-15, 0],
	femtograms: [unitFamily.Mass, 1e-15, 0],
	fg: [unitFamily.Mass, 1e-15, 0],

	attogram: [unitFamily.Mass, 1e-18, 0],
	attograms: [unitFamily.Mass, 1e-18, 0],
	ag: [unitFamily.Mass, 1e-18, 0],

	zeptogram: [unitFamily.Mass, 1e-21, 0],
	zeptograms: [unitFamily.Mass, 1e-21, 0],
	zg: [unitFamily.Mass, 1e-21, 0],

	yoctogram: [unitFamily.Mass, 1e-24, 0],
	yoctograms: [unitFamily.Mass, 1e-24, 0],
	yg: [unitFamily.Mass, 1e-24, 0],

	pound: [unitFamily.Mass, poundInGrams, 0],
	pounds: [unitFamily.Mass, poundInGrams, 0],
	lb: [unitFamily.Mass, poundInGrams, 0],

	stone: [unitFamily.Mass, poundInGrams * 14, 0],
	stones: [unitFamily.Mass, poundInGrams * 14, 0],
	st: [unitFamily.Mass, poundInGrams * 14, 0],

	ounce: [unitFamily.Mass, poundInGrams / 16, 0],
	ounces: [unitFamily.Mass, poundInGrams / 16, 0],
	oz: [unitFamily.Mass, poundInGrams / 16, 0],
	'℥': [unitFamily.Mass, poundInGrams / 16, 0],

	'short ton': [unitFamily.Mass, poundInGrams * 2000, 0],
	'short tons': [unitFamily.Mass, poundInGrams * 2000, 0],
	'us ton': [unitFamily.Mass, poundInGrams * 2000, 0],
	'us tons': [unitFamily.Mass, poundInGrams * 2000, 0],

	'long ton': [unitFamily.Mass, poundInGrams * 2240, 0],
	'long tons': [unitFamily.Mass, poundInGrams * 2240, 0],
	'imperial ton': [unitFamily.Mass, poundInGrams * 2240, 0],
	'imperial tons': [unitFamily.Mass, poundInGrams * 2240, 0],
	'displacement ton': [unitFamily.Mass, poundInGrams * 2240, 0],
	'displacement tons': [unitFamily.Mass, poundInGrams * 2240, 0],
	//#endregion
	//#region Pressure
	pascal: [unitFamily.Pressure, 1, 0],
	pascals: [unitFamily.Pressure, 1, 0],
	Pa: [unitFamily.Pressure, 1, 0],

	femtopascal: [unitFamily.Pressure, 1e-15, 0],
	femtopascals: [unitFamily.Pressure, 1e-15, 0],
	fPa: [unitFamily.Pressure, 1e-15, 0],

	picopascal: [unitFamily.Pressure, 1e-12, 0],
	picopascals: [unitFamily.Pressure, 1e-12, 0],
	pPa: [unitFamily.Pressure, 1e-12, 0],

	nanopascal: [unitFamily.Pressure, 1e-9, 0],
	nanopascals: [unitFamily.Pressure, 1e-9, 0],
	nPa: [unitFamily.Pressure, 1e-9, 0],

	micropascal: [unitFamily.Pressure, 1e-6, 0],
	micropascals: [unitFamily.Pressure, 1e-6, 0],
	μPa: [unitFamily.Pressure, 1e-6, 0],

	millipascal: [unitFamily.Pressure, 1e-3, 0],
	millipascals: [unitFamily.Pressure, 1e-3, 0],
	mPa: [unitFamily.Pressure, 1e-3, 0],

	centipascal: [unitFamily.Pressure, 1e-2, 0],
	centipascals: [unitFamily.Pressure, 1e-2, 0],
	cPa: [unitFamily.Pressure, 1e-2, 0],

	decipascal: [unitFamily.Pressure, 0.1, 0],
	decipascals: [unitFamily.Pressure, 0.1, 0],
	dPa: [unitFamily.Pressure, 0.1, 0],

	decapascal: [unitFamily.Pressure, 10, 0],
	decapascals: [unitFamily.Pressure, 10, 0],
	daPa: [unitFamily.Pressure, 10, 0],

	hectopascal: [unitFamily.Pressure, 1e2, 0],
	hectopascals: [unitFamily.Pressure, 1e2, 0],
	hPa: [unitFamily.Pressure, 1e2, 0],

	kilopascal: [unitFamily.Pressure, 1e3, 0],
	kilopascals: [unitFamily.Pressure, 1e3, 0],
	kPa: [unitFamily.Pressure, 1e3, 0],

	megapascal: [unitFamily.Pressure, 1e6, 0],
	megapascals: [unitFamily.Pressure, 1e6, 0],
	MPa: [unitFamily.Pressure, 1e6, 0],

	gigapascal: [unitFamily.Pressure, 1e9, 0],
	gigapascals: [unitFamily.Pressure, 1e9, 0],
	GPa: [unitFamily.Pressure, 1e9, 0],

	terapascal: [unitFamily.Pressure, 1e12, 0],
	terapascals: [unitFamily.Pressure, 1e12, 0],
	TPa: [unitFamily.Pressure, 1e12, 0],

	petapascal: [unitFamily.Pressure, 1e15, 0],
	petapascals: [unitFamily.Pressure, 1e15, 0],
	PPa: [unitFamily.Pressure, 1e15, 0],

	bar: [unitFamily.Pressure, 1e5, 0],

	femtobar: [unitFamily.Pressure, 1e-15, 0],
	femtobars: [unitFamily.Pressure, 1e-15, 0],
	fbar: [unitFamily.Pressure, 1e-15, 0],

	picobar: [unitFamily.Pressure, 1e-12, 0],
	picobars: [unitFamily.Pressure, 1e-12, 0],
	pbar: [unitFamily.Pressure, 1e-12, 0],

	nanobar: [unitFamily.Pressure, 1e-9, 0],
	nanobars: [unitFamily.Pressure, 1e-9, 0],
	nbar: [unitFamily.Pressure, 1e-9, 0],

	microbar: [unitFamily.Pressure, 1e-6, 0],
	microbars: [unitFamily.Pressure, 1e-6, 0],
	μbar: [unitFamily.Pressure, 1e-6, 0],

	millibar: [unitFamily.Pressure, 1e-3, 0],
	millibars: [unitFamily.Pressure, 1e-3, 0],
	mbar: [unitFamily.Pressure, 1e-3, 0],

	centibar: [unitFamily.Pressure, 1e-2, 0],
	centibars: [unitFamily.Pressure, 1e-2, 0],
	cbar: [unitFamily.Pressure, 1e-2, 0],

	decibar: [unitFamily.Pressure, 0.1, 0],
	decibars: [unitFamily.Pressure, 0.1, 0],
	dbar: [unitFamily.Pressure, 0.1, 0],

	decabar: [unitFamily.Pressure, 10, 0],
	decabars: [unitFamily.Pressure, 10, 0],
	dabar: [unitFamily.Pressure, 10, 0],

	hectobar: [unitFamily.Pressure, 1e2, 0],
	hectobars: [unitFamily.Pressure, 1e2, 0],
	hbar: [unitFamily.Pressure, 1e2, 0],

	kilobar: [unitFamily.Pressure, 1e3, 0],
	kilobars: [unitFamily.Pressure, 1e3, 0],
	kbar: [unitFamily.Pressure, 1e3, 0],

	megabar: [unitFamily.Pressure, 1e6, 0],
	megabars: [unitFamily.Pressure, 1e6, 0],
	Mbar: [unitFamily.Pressure, 1e6, 0],

	gigabar: [unitFamily.Pressure, 1e9, 0],
	gigabars: [unitFamily.Pressure, 1e9, 0],
	Gbar: [unitFamily.Pressure, 1e9, 0],

	terabar: [unitFamily.Pressure, 1e12, 0],
	terabars: [unitFamily.Pressure, 1e12, 0],
	Tbar: [unitFamily.Pressure, 1e12, 0],

	petabar: [unitFamily.Pressure, 1e15, 0],
	petabars: [unitFamily.Pressure, 1e15, 0],
	Pbar: [unitFamily.Pressure, 1e15, 0],

	torr: [unitFamily.Pressure, 101325 / 760, 0],

	millitorr: [unitFamily.Pressure, 101325 / 760 / 1e3, 0],
	millitorrs: [unitFamily.Pressure, 101325 / 760 / 1e3, 0],
	mTorr: [unitFamily.Pressure, 101325 / 760 / 1e3, 0],

	atmosphere: [unitFamily.Pressure, 101325, 0],
	atmospheres: [unitFamily.Pressure, 101325, 0],
	atm: [unitFamily.Pressure, 101325, 0],
	//#endregion
	//#region Temperature
	kelvin: [unitFamily.Temperature, 1, 0],
	kelvins: [unitFamily.Temperature, 1, 0],
	K: [unitFamily.Temperature, 1, 0],

	fahrenheit: [unitFamily.Temperature, 5 / 9, 273.15 - 32],
	F: [unitFamily.Temperature, 5 / 9, 273.15 - 32],

	celsius: [unitFamily.Temperature, 1, 273.15],
	C: [unitFamily.Temperature, 1, 273.15],

	rankine: [unitFamily.Temperature, 5 / 9, 0],
	R: [unitFamily.Temperature, 5 / 9, 0],

	delisle: [unitFamily.Temperature, 2 / -3, 373.15],
	De: [unitFamily.Temperature, 2 / -3, 373.15],
	//#endregion
	//#region Time
	second: [unitFamily.Time, 1, 0],
	seconds: [unitFamily.Time, 1, 0],
	s: [unitFamily.Time, 1, 0],

	century: [unitFamily.Time, 3.1556952e9, 0],
	centuries: [unitFamily.Time, 3.1556952e9, 0],
	c: [unitFamily.Time, 3.1556952e9, 0],

	day: [unitFamily.Time, 60 * 60 * 24, 0],
	days: [unitFamily.Time, 60 * 60 * 24, 0],
	d: [unitFamily.Time, 60 * 60 * 24, 0],

	decade: [unitFamily.Time, 315.56952e6, 0],
	decades: [unitFamily.Time, 315.56952e6, 0],
	dec: [unitFamily.Time, 315.56952e6, 0],

	fortnight: [unitFamily.Time, 1.2096e6, 0],
	fortnights: [unitFamily.Time, 1.2096e6, 0],
	fn: [unitFamily.Time, 1.2096e6, 0],

	helek: [unitFamily.Time, 3 + 1 / 3, 0],
	halakim: [unitFamily.Time, 3 + 1 / 3, 0],

	hour: [unitFamily.Time, 60 * 60, 0],
	hours: [unitFamily.Time, 60 * 60, 0],
	h: [unitFamily.Time, 60 * 60, 0],

	jiffy: [unitFamily.Time, 1 / 60, 0],
	jiffies: [unitFamily.Time, 1 / 60, 0],
	j: [unitFamily.Time, 1 / 60, 0],

	ja: [unitFamily.Time, 1e-2, 0],

	ke: [unitFamily.Time, 15 * 60, 0],

	millennium: [unitFamily.Time, 31.556952e9, 0],
	millennia: [unitFamily.Time, 31.556952e9, 0],

	milliday: [unitFamily.Time, (60 * 60 * 24) / 1e3, 0],
	millidays: [unitFamily.Time, (60 * 60 * 24) / 1e3, 0],
	md: [unitFamily.Time, (60 * 60 * 24) / 1e3, 0],

	minute: [unitFamily.Time, 60, 0],
	minutes: [unitFamily.Time, 60, 0],
	min: [unitFamily.Time, 60, 0],

	moment: [unitFamily.Time, 90, 0],
	moments: [unitFamily.Time, 90, 0],

	month: [unitFamily.Time, 2.592e6, 0],
	months: [unitFamily.Time, 2.592e6, 0],
	mo: [unitFamily.Time, 2.592e6, 0],

	shake: [unitFamily.Time, 1e-8, 0],
	shakes: [unitFamily.Time, 1e-8, 0],

	sigma: [unitFamily.Time, 1e-6, 0],
	sigmas: [unitFamily.Time, 1e-6, 0],

	svedberg: [unitFamily.Time, 1e-13, 0],
	svedbergs: [unitFamily.Time, 1e-13, 0],
	S: [unitFamily.Time, 1e-13, 0],

	week: [unitFamily.Time, 60 * 60 * 24 * 7, 0],
	weeks: [unitFamily.Time, 60 * 60 * 24 * 7, 0],
	wk: [unitFamily.Time, 60 * 60 * 24 * 7, 0],

	year: [unitFamily.Time, 31.536e6, 0],
	years: [unitFamily.Time, 31.536e6, 0],
	a: [unitFamily.Time, 31.536e6, 0],
	y: [unitFamily.Time, 31.536e6, 0],
	yr: [unitFamily.Time, 31.536e6, 0],

	petasecond: [unitFamily.Time, 1e15, 0],
	petaseconds: [unitFamily.Time, 1e15, 0],
	Ps: [unitFamily.Time, 1e15, 0],

	terasecond: [unitFamily.Time, 1e12, 0],
	teraseconds: [unitFamily.Time, 1e12, 0],
	Ts: [unitFamily.Time, 1e12, 0],

	gigasecond: [unitFamily.Time, 1e9, 0],
	gigaseconds: [unitFamily.Time, 1e9, 0],
	Gs: [unitFamily.Time, 1e9, 0],

	megasecond: [unitFamily.Time, 1e6, 0],
	megaseconds: [unitFamily.Time, 1e6, 0],
	Ms: [unitFamily.Time, 1e6, 0],

	kilosecond: [unitFamily.Time, 1e3, 0],
	kiloseconds: [unitFamily.Time, 1e3, 0],
	ks: [unitFamily.Time, 1e3, 0],

	hectosecond: [unitFamily.Time, 1e2, 0],
	hectoseconds: [unitFamily.Time, 1e2, 0],
	hs: [unitFamily.Time, 1e2, 0],

	decasecond: [unitFamily.Time, 10, 0],
	decaseconds: [unitFamily.Time, 10, 0],
	das: [unitFamily.Time, 10, 0],

	decisecond: [unitFamily.Time, 1e-1, 0],
	deciseconds: [unitFamily.Time, 1e-1, 0],
	ds: [unitFamily.Time, 1e-1, 0],

	centisecond: [unitFamily.Time, 1e-2, 0],
	centiseconds: [unitFamily.Time, 1e-2, 0],
	cs: [unitFamily.Time, 1e-2, 0],
	millisecond: [unitFamily.Time, 1e-3, 0],
	milliseconds: [unitFamily.Time, 1e-3, 0],
	ms: [unitFamily.Time, 1e-3, 0],

	microsecond: [unitFamily.Time, 1e-7, 0],
	microseconds: [unitFamily.Time, 1e-7, 0],
	μs: [unitFamily.Time, 1e-7, 0],

	nanosecond: [unitFamily.Time, 1e-9, 0],
	nanoseconds: [unitFamily.Time, 1e-9, 0],
	ns: [unitFamily.Time, 1e-9, 0],

	picosecond: [unitFamily.Time, 1e-12, 0],
	picoseconds: [unitFamily.Time, 1e-12, 0],
	ps: [unitFamily.Time, 1e-12, 0],

	femtosecond: [unitFamily.Time, 1e-15, 0],
	femtoseconds: [unitFamily.Time, 1e-15, 0],
	fs: [unitFamily.Time, 1e-15, 0],
	//#endregion
	//#region Volume
	//#region SI
	'cubic meter': [unitFamily.Volume, 1, 0],
	'cubic meters': [unitFamily.Volume, 1, 0],
	'cubic metre': [unitFamily.Volume, 1, 0],
	'cubic metres': [unitFamily.Volume, 1, 0],
	'm³': [unitFamily.Volume, 1, 0],
	m3: [unitFamily.Volume, 1, 0],

	'cubic kilometer': [unitFamily.Volume, 1e3, 0],
	'cubic kilometre': [unitFamily.Volume, 1e3, 0],
	'cubic kilometers': [unitFamily.Volume, 1e3, 0],
	'cubic kilometres': [unitFamily.Volume, 1e3, 0],
	'km³': [unitFamily.Volume, 1e3, 0],
	km3: [unitFamily.Volume, 1e3, 0],

	'cubic hectometer': [unitFamily.Volume, 1e6, 0],
	'cubic hectometre': [unitFamily.Volume, 1e6, 0],
	'cubic hectometers': [unitFamily.Volume, 1e6, 0],
	'cubic hectometres': [unitFamily.Volume, 1e6, 0],
	'hm³': [unitFamily.Volume, 1e6, 0],
	hm3: [unitFamily.Volume, 1e6, 0],

	'cubic decameter': [unitFamily.Volume, 10, 0],
	'cubic decametre': [unitFamily.Volume, 10, 0],
	'cubic decameters': [unitFamily.Volume, 10, 0],
	'cubic decametres': [unitFamily.Volume, 10, 0],
	'dam³': [unitFamily.Volume, 10, 0],
	dam3: [unitFamily.Volume, 10, 0],

	'cubic decimeter': [unitFamily.Volume, 1e-1, 0],
	'cubic decimetre': [unitFamily.Volume, 1e-1, 0],
	'cubic decimeters': [unitFamily.Volume, 1e-1, 0],
	'cubic decimetres': [unitFamily.Volume, 1e-1, 0],
	'dm³': [unitFamily.Volume, 1e-1, 0],
	dm3: [unitFamily.Volume, 1e-1, 0],

	'cubic centimeter': [unitFamily.Volume, 1e-6, 0],
	'cubic centimetre': [unitFamily.Volume, 1e-6, 0],
	'cubic centimeters': [unitFamily.Volume, 1e-6, 0],
	'cubic centimetres': [unitFamily.Volume, 1e-6, 0],
	'cm³': [unitFamily.Volume, 1e-6, 0],
	cc: [unitFamily.Volume, 1e-6, 0],
	cm3: [unitFamily.Volume, 1e-6, 0],

	'cubic millimeter': [unitFamily.Volume, 1e-3, 0],
	'cubic millimetre': [unitFamily.Volume, 1e-3, 0],
	'cubic millimeters': [unitFamily.Volume, 1e-3, 0],
	'cubic millimetres': [unitFamily.Volume, 1e-3, 0],
	'mm³': [unitFamily.Volume, 1e-3, 0],
	mm3: [unitFamily.Volume, 1e-3, 0],
	//#endregion

	//#region non-SI metric
	gigaliter: [unitFamily.Volume, 1e6, 0],
	gigalitre: [unitFamily.Volume, 1e6, 0],
	gigaliters: [unitFamily.Volume, 1e6, 0],
	gigalitres: [unitFamily.Volume, 1e6, 0],
	Gl: [unitFamily.Volume, 1e6, 0],
	GL: [unitFamily.Volume, 1e6, 0],

	megaliter: [unitFamily.Volume, 1e3, 0],
	megalitre: [unitFamily.Volume, 1e3, 0],
	megaliters: [unitFamily.Volume, 1e3, 0],
	megalitres: [unitFamily.Volume, 1e3, 0],
	Ml: [unitFamily.Volume, 1e3, 0],
	ML: [unitFamily.Volume, 1e3, 0],

	kiloliter: [unitFamily.Volume, 1, 0],
	kilolitre: [unitFamily.Volume, 1, 0],
	kiloliters: [unitFamily.Volume, 1, 0],
	kilolitres: [unitFamily.Volume, 1, 0],
	kl: [unitFamily.Volume, 1, 0],
	kL: [unitFamily.Volume, 1, 0],

	hectoliter: [unitFamily.Volume, 1e-1, 0],
	hectolitre: [unitFamily.Volume, 1e-1, 0],
	hectoliters: [unitFamily.Volume, 1e-1, 0],
	hectolitres: [unitFamily.Volume, 1e-1, 0],
	hl: [unitFamily.Volume, 1e-1, 0],
	hL: [unitFamily.Volume, 1e-1, 0],

	decaliter: [unitFamily.Volume, 1e-2, 0],
	decalitre: [unitFamily.Volume, 1e-2, 0],
	decaliters: [unitFamily.Volume, 1e-2, 0],
	decalitres: [unitFamily.Volume, 1e-2, 0],
	dal: [unitFamily.Volume, 1e-2, 0],
	daL: [unitFamily.Volume, 1e-2, 0],

	liter: [unitFamily.Volume, 1e-3, 0],
	litre: [unitFamily.Volume, 1e-3, 0],
	liters: [unitFamily.Volume, 1e-3, 0],
	litres: [unitFamily.Volume, 1e-3, 0],
	l: [unitFamily.Volume, 1e-3, 0],
	L: [unitFamily.Volume, 1e-3, 0],

	deciliter: [unitFamily.Volume, 1e-4, 0],
	decilitre: [unitFamily.Volume, 1e-4, 0],
	deciliters: [unitFamily.Volume, 1e-4, 0],
	decilitres: [unitFamily.Volume, 1e-4, 0],
	dl: [unitFamily.Volume, 1e-4, 0],
	dL: [unitFamily.Volume, 1e-4, 0],

	centiliter: [unitFamily.Volume, 1e-5, 0],
	centilitre: [unitFamily.Volume, 1e-5, 0],
	centiliters: [unitFamily.Volume, 1e-5, 0],
	centilitres: [unitFamily.Volume, 1e-5, 0],
	cl: [unitFamily.Volume, 1e-5, 0],
	cL: [unitFamily.Volume, 1e-5, 0],

	milliliter: [unitFamily.Volume, 1e-6, 0],
	millilitre: [unitFamily.Volume, 1e-6, 0],
	milliliters: [unitFamily.Volume, 1e-6, 0],
	millilitres: [unitFamily.Volume, 1e-6, 0],
	ml: [unitFamily.Volume, 1e-6, 0],
	mL: [unitFamily.Volume, 1e-6, 0],

	microliter: [unitFamily.Volume, 1e9, 0],
	microlitre: [unitFamily.Volume, 1e9, 0],
	microliters: [unitFamily.Volume, 1e9, 0],
	microlitres: [unitFamily.Volume, 1e9, 0],
	μl: [unitFamily.Volume, 1e9, 0],
	μL: [unitFamily.Volume, 1e9, 0],

	stere: [unitFamily.Volume, 1, 0],
	steres: [unitFamily.Volume, 1, 0],
	//#endregion

	//#region Imperial & US customary
	'cubic mile': [unitFamily.Volume, 4.2e3, 0],
	'cubic miles': [unitFamily.Volume, 4.2e3, 0],
	'cu mi': [unitFamily.Volume, 4.2e3, 0],
	cumi: [unitFamily.Volume, 4.2e3, 0],
	mi3: [unitFamily.Volume, 4.2e3, 0],

	'acre-foot': [unitFamily.Volume, 1233.48183754752, 0],
	'acre-feet': [unitFamily.Volume, 1233.48183754752, 0],
	'ac⋅ft': [unitFamily.Volume, 1233.48183754752, 0],
	'ac ft': [unitFamily.Volume, 1233.48183754752, 0],

	'cubic yard': [unitFamily.Volume, 0.76, 0],
	'cubic yards': [unitFamily.Volume, 0.76, 0],
	'cu yd': [unitFamily.Volume, 0.76, 0],
	cuyd: [unitFamily.Volume, 0.76, 0],
	yd3: [unitFamily.Volume, 0.76, 0],

	'cubic foot': [unitFamily.Volume, 0.028, 0],
	'cubic feet': [unitFamily.Volume, 0.028, 0],
	'cu ft': [unitFamily.Volume, 0.028, 0],
	cuft: [unitFamily.Volume, 0.028, 0],
	ft3: [unitFamily.Volume, 0.028, 0],
	cufoot: [unitFamily.Volume, 0.028, 0],
	foot3: [unitFamily.Volume, 0.028, 0],

	'board foot': [unitFamily.Volume, 0.002359737, 0],
	'board feet': [unitFamily.Volume, 0.002359737, 0],

	'cubic inch': [unitFamily.Volume, 0.000016387064, 0],
	'cubic inches': [unitFamily.Volume, 0.000016387064, 0],
	'cu in': [unitFamily.Volume, 0.000016387064, 0],
	cuin: [unitFamily.Volume, 0.000016387064, 0],
	in3: [unitFamily.Volume, 0.000016387064, 0],

	'measurement ton': [unitFamily.Volume, 1.133, 0],
	'measurement tons': [unitFamily.Volume, 1.133, 0],
	MTON: [unitFamily.Volume, 1.133, 0],
	//#endregion

	//#region Imperial
	// https://en.wikipedia.org/wiki/Imperial_units#Volume
	'imperial barrel': [unitFamily.Volume, 0.16, 0],
	'imperial barrels': [unitFamily.Volume, 0.16, 0],
	'imp bbl': [unitFamily.Volume, 0.16, 0],
	impbbl: [unitFamily.Volume, 0.16, 0],

	kilderkin: [unitFamily.Volume, 0.08318, 0],
	kilderkins: [unitFamily.Volume, 0.08318, 0],

	firkin: [unitFamily.Volume, 0.041, 0],
	firkins: [unitFamily.Volume, 0.041, 0],

	'imperial bushel': [unitFamily.Volume, 0.03636872, 0],
	'imperial bushels': [unitFamily.Volume, 0.03636872, 0],
	'imp bsh': [unitFamily.Volume, 0.03636872, 0],
	'imp bu': [unitFamily.Volume, 0.03636872, 0],
	impbsh: [unitFamily.Volume, 0.03636872, 0],
	impbu: [unitFamily.Volume, 0.03636872, 0],

	'imperial peck': [unitFamily.Volume, 0.00909218, 0],
	'imperial pecks': [unitFamily.Volume, 0.00909218, 0],
	pk: [unitFamily.Volume, 0.00909218, 0],
	imppk: [unitFamily.Volume, 0.00909218, 0],

	'imperial quart': [unitFamily.Volume, 0.0011365225, 0],
	'imperial quarts': [unitFamily.Volume, 0.0011365225, 0],
	'imp qt': [unitFamily.Volume, 0.0011365225, 0],
	impqt: [unitFamily.Volume, 0.0011365225, 0],

	'imperial gallon': [unitFamily.Volume, 0.00454609, 0],
	'imperial gallons': [unitFamily.Volume, 0.00454609, 0],
	'imp gal': [unitFamily.Volume, 0.00454609, 0],
	impgal: [unitFamily.Volume, 0.00454609, 0],

	'imperial pint': [unitFamily.Volume, 0.00056826125, 0],
	'imperial pints': [unitFamily.Volume, 0.00056826125, 0],
	'imp pt': [unitFamily.Volume, 0.00056826125, 0],
	imppt: [unitFamily.Volume, 0.00056826125, 0],

	gill: [unitFamily.Volume, 0.0001420653125, 0],
	gills: [unitFamily.Volume, 0.0001420653125, 0],
	gi: [unitFamily.Volume, 0.0001420653125, 0],
	impgi: [unitFamily.Volume, 0.0001420653125, 0],

	'imperial fluid ounce': [unitFamily.Volume, 2.84130625e-5, 0],
	'imperial fluid ounces': [unitFamily.Volume, 2.84130625e-5, 0],
	'imp fl oz': [unitFamily.Volume, 2.84130625e-5, 0],
	impoz: [unitFamily.Volume, 2.84130625e-5, 0],
	//#endregion

	//#region US customary liquid measure
	'US barrel': [unitFamily.Volume, 0.164, 0],
	'US barrels': [unitFamily.Volume, 0.164, 0],
	'US bbl': [unitFamily.Volume, 0.164, 0],
	'U.S. bbl': [unitFamily.Volume, 0.164, 0],
	USbbl: [unitFamily.Volume, 0.164, 0],
	usbbl: [unitFamily.Volume, 0.164, 0],
	'U.S.bbl': [unitFamily.Volume, 0.164, 0],

	barrel: [unitFamily.Volume, 1 / 6.2898, 0],
	barrels: [unitFamily.Volume, 1 / 6.2898, 0],
	bbl: [unitFamily.Volume, 1 / 6.2898, 0],
	oilbbl: [unitFamily.Volume, 1 / 6.2898, 0],

	'US beer barrel': [unitFamily.Volume, 0.117, 0],
	'US beer barrels': [unitFamily.Volume, 0.117, 0],
	USbeerbbl: [unitFamily.Volume, 0.117, 0],
	usbeerbbl: [unitFamily.Volume, 0.117, 0],
	'U.S.beerbbl': [unitFamily.Volume, 0.117, 0],

	'US gallon': [unitFamily.Volume, 1 / 264.1721, 0],
	'US gallons': [unitFamily.Volume, 1 / 264.1721, 0],
	'US gal': [unitFamily.Volume, 1 / 264.1721, 0],
	'U.S. gal': [unitFamily.Volume, 1 / 264.1721, 0],
	USgal: [unitFamily.Volume, 1 / 264.1721, 0],
	usgal: [unitFamily.Volume, 1 / 264.1721, 0],
	'U.S.gal': [unitFamily.Volume, 1 / 264.1721, 0],

	'US quart': [unitFamily.Volume, 9.46352946e-4, 0],
	'US quarts': [unitFamily.Volume, 9.46352946e-4, 0],
	'US qt': [unitFamily.Volume, 9.46352946e-4, 0],
	'U.S. qt': [unitFamily.Volume, 9.46352946e-4, 0],
	USqt: [unitFamily.Volume, 9.46352946e-4, 0],
	usqt: [unitFamily.Volume, 9.46352946e-4, 0],
	'U.S.qt': [unitFamily.Volume, 9.46352946e-4, 0],

	'US pint': [unitFamily.Volume, 4.73176473e-4, 0],
	'US pints': [unitFamily.Volume, 4.73176473e-4, 0],
	'US pt': [unitFamily.Volume, 4.73176473e-4, 0],
	'U.S. pt': [unitFamily.Volume, 4.73176473e-4, 0],
	USpt: [unitFamily.Volume, 4.73176473e-4, 0],
	uspt: [unitFamily.Volume, 4.73176473e-4, 0],
	'U.S.pt': [unitFamily.Volume, 4.73176473e-4, 0],

	'US gill': [unitFamily.Volume, 1.18e-4, 0],
	'US gills': [unitFamily.Volume, 1.18e-4, 0],
	USgi: [unitFamily.Volume, 1.18e-4, 0],
	usgi: [unitFamily.Volume, 1.18e-4, 0],
	'U.S.gi': [unitFamily.Volume, 1.18e-4, 0],

	'US fluid ounce': [unitFamily.Volume, 29.5735295625e-6, 0],
	'US fluid ounces': [unitFamily.Volume, 29.5735295625e-6, 0],
	'US fl oz': [unitFamily.Volume, 29.5735295625e-6, 0],
	USoz: [unitFamily.Volume, 29.5735295625e-6, 0],
	USflox: [unitFamily.Volume, 29.5735295625e-6, 0],
	usoz: [unitFamily.Volume, 29.5735295625e-6, 0],
	usfloz: [unitFamily.Volume, 29.5735295625e-6, 0],
	'U.S.oz': [unitFamily.Volume, 29.5735295625e-6, 0],
	'U.S.floz': [unitFamily.Volume, 29.5735295625e-6, 0],
	//#endregion

	//#region US customary dry measure
	'US dry barrel': [unitFamily.Volume, 0.12, 0],
	'US dry barrels': [unitFamily.Volume, 0.12, 0],
	'US dry bbl': [unitFamily.Volume, 0.12, 0],
	'U.S. dry bbl': [unitFamily.Volume, 0.12, 0],
	USdrybbl: [unitFamily.Volume, 0.12, 0],
	usdrybbl: [unitFamily.Volume, 0.12, 0],
	drybbl: [unitFamily.Volume, 0.12, 0],
	'U.S.drybbl': [unitFamily.Volume, 0.12, 0],

	'US bushel': [unitFamily.Volume, 3.52391e-2, 0],
	'US bushels': [unitFamily.Volume, 3.52391e-2, 0],
	'US bsh': [unitFamily.Volume, 3.52391e-2, 0],
	'U.S. bsh': [unitFamily.Volume, 3.52391e-2, 0],
	USbsh: [unitFamily.Volume, 3.52391e-2, 0],
	usbsh: [unitFamily.Volume, 3.52391e-2, 0],
	'U.S.bsh': [unitFamily.Volume, 3.52391e-2, 0],
	'US bu': [unitFamily.Volume, 3.52391e-2, 0],
	'U.S. bu': [unitFamily.Volume, 3.52391e-2, 0],
	USbu: [unitFamily.Volume, 3.52391e-2, 0],
	usbu: [unitFamily.Volume, 3.52391e-2, 0],
	'U.S.bu': [unitFamily.Volume, 3.52391e-2, 0],

	'US kenning': [unitFamily.Volume, 0.12, 0],
	'US kennings': [unitFamily.Volume, 0.12, 0],
	'U.S. kenning': [unitFamily.Volume, 0.12, 0],
	USkenning: [unitFamily.Volume, 0.12, 0],
	'U.S.kenning': [unitFamily.Volume, 0.12, 0],
	uskenning: [unitFamily.Volume, 0.12, 0],

	'US peck': [unitFamily.Volume, 9.09218e-3, 0],
	'US pk': [unitFamily.Volume, 9.09218e-3, 0],
	'U.S. pk': [unitFamily.Volume, 9.09218e-3, 0],
	Uspk: [unitFamily.Volume, 9.09218e-3, 0],
	uspk: [unitFamily.Volume, 9.09218e-3, 0],
	'U.S.pk': [unitFamily.Volume, 9.09218e-3, 0],

	'US dry gallon': [unitFamily.Volume, 4.40488377086e-3, 0],
	'US dry gal': [unitFamily.Volume, 4.40488377086e-3, 0],
	'U.S. dry gal': [unitFamily.Volume, 4.40488377086e-3, 0],
	USdrygal: [unitFamily.Volume, 4.40488377086e-3, 0],
	usdrygal: [unitFamily.Volume, 4.40488377086e-3, 0],
	drygal: [unitFamily.Volume, 4.40488377086e-3, 0],
	'U.S.drygal': [unitFamily.Volume, 4.40488377086e-3, 0],

	'US dry quart': [unitFamily.Volume, 0.946352946e-3, 0],
	'US dry qt': [unitFamily.Volume, 0.946352946e-3, 0],
	'U.S. dry qt': [unitFamily.Volume, 0.946352946e-3, 0],
	USdryqt: [unitFamily.Volume, 0.946352946e-3, 0],
	usdryqt: [unitFamily.Volume, 0.946352946e-3, 0],
	dryqt: [unitFamily.Volume, 0.946352946e-3, 0],
	'U.S.dryqt': [unitFamily.Volume, 0.946352946e-3, 0],

	'US dry pint': [unitFamily.Volume, 33.6003125, 0],
	'US dry pt': [unitFamily.Volume, 33.6003125, 0],
	'U.S. dry pt': [unitFamily.Volume, 33.6003125, 0],
	USdrypt: [unitFamily.Volume, 33.6003125, 0],
	'U.S.drypt': [unitFamily.Volume, 33.6003125, 0],
	usdrypt: [unitFamily.Volume, 33.6003125, 0],
	drypt: [unitFamily.Volume, 33.6003125, 0],
	//#endregion
	//#endregion
	//#region Angle
	radian: [unitFamily.Angle, 1, 0],
	radians: [unitFamily.Angle, 1, 0],
	rad: [unitFamily.Angle, 1, 0],
	rads: [unitFamily.Angle, 1, 0],
	r: [unitFamily.Angle, 1, 0],

	turn: [unitFamily.Angle, 2 * Math.PI, 0],
	turns: [unitFamily.Angle, 2 * Math.PI, 0],

	degree: [unitFamily.Angle, Math.PI / 180, 0],
	degrees: [unitFamily.Angle, Math.PI / 180, 0],
	deg: [unitFamily.Angle, Math.PI / 180, 0],
	degs: [unitFamily.Angle, Math.PI / 180, 0],
	'°': [unitFamily.Angle, Math.PI / 180, 0],

	gradian: [unitFamily.Angle, Math.PI / 200, 0],
	gradians: [unitFamily.Angle, Math.PI / 200, 0],
	gon: [unitFamily.Angle, Math.PI / 200, 0],
	gons: [unitFamily.Angle, Math.PI / 200, 0],
	grad: [unitFamily.Angle, Math.PI / 200, 0],
	grads: [unitFamily.Angle, Math.PI / 200, 0],
	grade: [unitFamily.Angle, Math.PI / 200, 0],
	grades: [unitFamily.Angle, Math.PI / 200, 0],
	//#endregion
	//#region Force
	newton: [unitFamily.Force, 1, 0],
	newtons: [unitFamily.Force, 1, 0],
	N: [unitFamily.Force, 1, 0],

	dyne: [unitFamily.Force, 1e-5, 0],
	dynes: [unitFamily.Force, 1e-5, 0],
	dyn: [unitFamily.Force, 1e-5, 0],

	'kilogram-force': [unitFamily.Force, 9.80665, 0],
	kgf: [unitFamily.Force, 9.80665, 0],
	kilopond: [unitFamily.Force, 9.80665, 0],
	kiloponds: [unitFamily.Force, 9.80665, 0],
	kp: [unitFamily.Force, 9.80665, 0],

	'pound of force': [unitFamily.Force, 4.448222, 0],
	'pound-force': [unitFamily.Force, 4.448222, 0],
	lbf: [unitFamily.Force, 4.448222, 0],

	poundal: [unitFamily.Force, 0.138255, 0],
	poundals: [unitFamily.Force, 0.138255, 0],
	pdl: [unitFamily.Force, 0.138255, 0]
	//#endregion
} as const;
