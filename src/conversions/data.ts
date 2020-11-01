import {invariant} from '../util';

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

/**
 * Conversions for data.
 * @private
 * @see https://en.wikipedia.org/wiki/Orders_of_magnitude_(data)
 * @see https://en.wikipedia.org/wiki/Units_of_information
 * @see https://en.wikipedia.org/wiki/Template:Information_units
 */
export const data = {
	bit: {ratio: 1},
	bits: {ratio: 1},
	b: {ratio: 1},
	unibit: {ratio: 1},
	unibits: {ratio: 1},

	millibit: {ratio: 1e-3},
	millibits: {ratio: 1e-3},

	centibit: {ratio: 1e-2},
	centibits: {ratio: 1e-2},

	decibit: {ratio: 1e-1},
	decibits: {ratio: 1e-1},

	crumb: {ratio: 2},
	crumbs: {ratio: 2},
	dibit: {ratio: 2},
	dibits: {ratio: 2},

	triad: {ratio: 3},
	triads: {ratio: 3},
	triade: {ratio: 3},
	triades: {ratio: 3},
	tribit: {ratio: 3},
	tribits: {ratio: 3},

	nibble: {ratio: 4},
	nibbles: {ratio: 4},
	tetrad: {ratio: 4},
	tetrads: {ratio: 4},
	tetrade: {ratio: 4},
	tetrades: {ratio: 4},
	quadbit: {ratio: 4},
	quadbits: {ratio: 4},
	semioctet: {ratio: 4},
	semioctets: {ratio: 4},
	halfbyte: {ratio: 4},
	halfbytes: {ratio: 4},
	quartet: {ratio: 4},
	quartets: {ratio: 4},

	pentad: {ratio: 5},
	pentads: {ratio: 5},

	hexad: {ratio: 6},
	hexads: {ratio: 6},
	hexade: {ratio: 6},
	hexades: {ratio: 6},
	sextet: {ratio: 6},
	sextets: {ratio: 6},

	heptad: {ratio: 7},
	heptads: {ratio: 7},
	heptade: {ratio: 7},
	heptades: {ratio: 7},

	byte: {ratio: 8},
	bytes: {ratio: 8},
	B: {ratio: 8},
	octect: {ratio: 8},
	octects: {ratio: 8},
	octad: {ratio: 8},
	octads: {ratio: 8},
	octade: {ratio: 8},
	octades: {ratio: 8},

	decabit: {ratio: 10},
	decabits: {ratio: 10},
	declet: {ratio: 10},
	decle: {ratio: 10},
	deckle: {ratio: 10},

	slab: {ratio: 12},
	slabs: {ratio: 12},

	hextet: {ratio: 16},
	hextets: {ratio: 16},

	catena: {ratio: 24},
	catenas: {ratio: 24},

	hectobit: {ratio: 1e2},
	hectobits: {ratio: 1e2},
	hbit: {ratio: 1e2},

	kilobit: {ratio: 1e3},
	kilobits: {ratio: 1e3},
	kbit: {ratio: 1e3},

	kibibit: {ratio: num2to10},
	kibibits: {ratio: num2to10},
	Kibit: {ratio: num2to10},

	kilobyte: {ratio: 8e3},
	kilobytes: {ratio: 8e3},
	kB: {ratio: 8e3},

	kibibyte: {ratio: num2to13},
	kibibytes: {ratio: num2to13},
	KiB: {ratio: num2to13},

	megabit: {ratio: 1e6},
	megabits: {ratio: 1e6},
	Mbit: {ratio: 1e6},

	mebibit: {ratio: num2to20},
	mebibits: {ratio: num2to20},
	Mibit: {ratio: num2to20},

	megabyte: {ratio: 8e6},
	megabytes: {ratio: 8e6},
	MB: {ratio: 8e6},

	mebibyte: {ratio: num2to23},
	mebibytes: {ratio: num2to23},
	MiB: {ratio: num2to23},

	gigabit: {ratio: 1e9},
	gigabits: {ratio: 1e9},
	Gbit: {ratio: 1e9},

	gibibit: {ratio: num2to30},
	gibibits: {ratio: num2to30},
	Gibit: {ratio: num2to30},

	gigabyte: {ratio: 8e9},
	gigabytes: {ratio: 8e9},
	GB: {ratio: 8e9},

	gibibyte: {ratio: num2to33},
	gibibytes: {ratio: num2to33},
	GiB: {ratio: num2to33},

	terabit: {ratio: 1e12},
	terabits: {ratio: 1e12},
	Tbit: {ratio: 1e12},

	tebibit: {ratio: num2to40},
	tebibits: {ratio: num2to40},
	Tibit: {ratio: num2to40},

	terabyte: {ratio: 8e12},
	terabytes: {ratio: 8e12},
	TB: {ratio: 8e12},

	tebibyte: {ratio: num2to43},
	tebibytes: {ratio: num2to43},
	TiB: {ratio: num2to43},

	petabit: {ratio: 1e15},
	petabits: {ratio: 1e15},
	Pbit: {ratio: 1e15},

	pebibit: {ratio: num2to50},
	pebibits: {ratio: num2to50},
	Pibit: {ratio: num2to50},

	petabyte: {ratio: 1e15},
	petabytes: {ratio: 1e15},
	PB: {ratio: 1e15},

	pebibyte: {ratio: num2to53},
	pebibytes: {ratio: num2to53},
	PiB: {ratio: num2to53}
};
