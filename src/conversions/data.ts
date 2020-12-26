import {invariant, unitFamilies} from '../util';

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
const data = {
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
	PiB: [unitFamilies.Data, num2to53, 0]
};

export default data;
