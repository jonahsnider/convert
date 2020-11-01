import {invariant, ratioer} from '../util';

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
	bit: ratioer(1),
	bits: ratioer(1),
	b: ratioer(1),
	unibit: ratioer(1),
	unibits: ratioer(1),

	millibit: ratioer(1e-3),
	millibits: ratioer(1e-3),

	centibit: ratioer(1e-2),
	centibits: ratioer(1e-2),

	decibit: ratioer(1e-1),
	decibits: ratioer(1e-1),

	crumb: ratioer(2),
	crumbs: ratioer(2),
	dibit: ratioer(2),
	dibits: ratioer(2),

	triad: ratioer(3),
	triads: ratioer(3),
	triade: ratioer(3),
	triades: ratioer(3),
	tribit: ratioer(3),
	tribits: ratioer(3),

	nibble: ratioer(4),
	nibbles: ratioer(4),
	tetrad: ratioer(4),
	tetrads: ratioer(4),
	tetrade: ratioer(4),
	tetrades: ratioer(4),
	quadbit: ratioer(4),
	quadbits: ratioer(4),
	semioctet: ratioer(4),
	semioctets: ratioer(4),
	halfbyte: ratioer(4),
	halfbytes: ratioer(4),
	quartet: ratioer(4),
	quartets: ratioer(4),

	pentad: ratioer(5),
	pentads: ratioer(5),

	hexad: ratioer(6),
	hexads: ratioer(6),
	hexade: ratioer(6),
	hexades: ratioer(6),
	sextet: ratioer(6),
	sextets: ratioer(6),

	heptad: ratioer(7),
	heptads: ratioer(7),
	heptade: ratioer(7),
	heptades: ratioer(7),

	byte: ratioer(8),
	bytes: ratioer(8),
	B: ratioer(8),
	octect: ratioer(8),
	octects: ratioer(8),
	octad: ratioer(8),
	octads: ratioer(8),
	octade: ratioer(8),
	octades: ratioer(8),

	decabit: ratioer(10),
	decabits: ratioer(10),
	declet: ratioer(10),
	decle: ratioer(10),
	deckle: ratioer(10),

	slab: ratioer(12),
	slabs: ratioer(12),

	hextet: ratioer(16),
	hextets: ratioer(16),

	catena: ratioer(24),
	catenas: ratioer(24),

	hectobit: ratioer(1e2),
	hectobits: ratioer(1e2),
	hbit: ratioer(1e2),

	kilobit: ratioer(1e3),
	kilobits: ratioer(1e3),
	kbit: ratioer(1e3),

	kibibit: ratioer(num2to10),
	kibibits: ratioer(num2to10),
	Kibit: ratioer(num2to10),

	kilobyte: ratioer(8e3),
	kilobytes: ratioer(8e3),
	kB: ratioer(8e3),

	kibibyte: ratioer(num2to13),
	kibibytes: ratioer(num2to13),
	KiB: ratioer(num2to13),

	megabit: ratioer(1e6),
	megabits: ratioer(1e6),
	Mbit: ratioer(1e6),

	mebibit: ratioer(num2to20),
	mebibits: ratioer(num2to20),
	Mibit: ratioer(num2to20),

	megabyte: ratioer(8e6),
	megabytes: ratioer(8e6),
	MB: ratioer(8e6),

	mebibyte: ratioer(num2to23),
	mebibytes: ratioer(num2to23),
	MiB: ratioer(num2to23),

	gigabit: ratioer(1e9),
	gigabits: ratioer(1e9),
	Gbit: ratioer(1e9),

	gibibit: ratioer(num2to30),
	gibibits: ratioer(num2to30),
	Gibit: ratioer(num2to30),

	gigabyte: ratioer(8e9),
	gigabytes: ratioer(8e9),
	GB: ratioer(8e9),

	gibibyte: ratioer(num2to33),
	gibibytes: ratioer(num2to33),
	GiB: ratioer(num2to33),

	terabit: ratioer(1e12),
	terabits: ratioer(1e12),
	Tbit: ratioer(1e12),

	tebibit: ratioer(num2to40),
	tebibits: ratioer(num2to40),
	Tibit: ratioer(num2to40),

	terabyte: ratioer(8e12),
	terabytes: ratioer(8e12),
	TB: ratioer(8e12),

	tebibyte: ratioer(num2to43),
	tebibytes: ratioer(num2to43),
	TiB: ratioer(num2to43),

	petabit: ratioer(1e15),
	petabits: ratioer(1e15),
	Pbit: ratioer(1e15),

	pebibit: ratioer(num2to50),
	pebibits: ratioer(num2to50),
	Pibit: ratioer(num2to50),

	petabyte: ratioer(1e15),
	petabytes: ratioer(1e15),
	PB: ratioer(1e15),

	pebibyte: ratioer(num2to53),
	pebibytes: ratioer(num2to53),
	PiB: ratioer(num2to53)
};
