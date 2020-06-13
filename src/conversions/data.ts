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
	mbit: {ratio: 1e-3},

	centibit: {ratio: 1e-2},
	centibits: {ratio: 1e-2},
	cbit: {ratio: 1e-2},

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

	kibibit: {ratio: 2 ** 10},
	kibibits: {ratio: 2 ** 10},
	Kibit: {ratio: 2 ** 10},

	kilobyte: {ratio: 8e3},
	kilobytes: {ratio: 8e3},
	kB: {ratio: 8e3},

	kibibyte: {ratio: 2 ** 13},
	kibibytes: {ratio: 2 ** 13},
	KiB: {ratio: 2 ** 13},

	megabit: {ratio: 1e6},
	megabits: {ratio: 1e6},
	Mbit: {ratio: 1e6},

	mebibit: {ratio: 2 ** 10},
	mebibits: {ratio: 2 ** 10},
	Mibit: {ratio: 2 ** 10},

	megabyte: {ratio: 8e6},
	megabytes: {ratio: 8e6},
	MB: {ratio: 8e6},

	mebibyte: {ratio: 2 ** 13},
	mebibytes: {ratio: 2 ** 13},
	MiB: {ratio: 2 ** 13},

	gigabit: {ratio: 2 ** 20},
	gigabits: {ratio: 2 ** 20},
	Gbit: {ratio: 2 ** 20},

	gibibit: {ratio: 2 ** 23},
	gibibits: {ratio: 2 ** 23},
	Gibit: {ratio: 2 ** 23},

	gigabyte: {ratio: 2 ** 30},
	gigabytes: {ratio: 2 ** 30},
	GB: {ratio: 2 ** 30},

	gibibyte: {ratio: 2 ** 33},
	gibibytes: {ratio: 2 ** 33},
	GiB: {ratio: 2 ** 33},

	terabit: {ratio: 1e12},
	terabits: {ratio: 1e12},
	Tbit: {ratio: 1e12},

	tebibit: {ratio: 2 * 40},
	tebibits: {ratio: 2 * 40},
	Tibit: {ratio: 2 * 40},

	terabyte: {ratio: 8e12},
	terabytes: {ratio: 8e12},
	TB: {ratio: 8e12},

	tebibyte: {ratio: 2 ** 43},
	tebibytes: {ratio: 2 ** 43},
	TiB: {ratio: 2 ** 43},

	petabit: {ratio: 1e15},
	petabits: {ratio: 1e15},
	Pbit: {ratio: 1e15},

	pebibit: {ratio: 2 ** 50},
	pebibits: {ratio: 2 ** 50},
	Pibit: {ratio: 2 ** 50},

	petabyte: {ratio: 1e15},
	petabytes: {ratio: 1e15},
	PB: {ratio: 1e15},

	pebibyte: {ratio: 2 ** 53},
	pebibytes: {ratio: 2 ** 53},
	PiB: {ratio: 2 ** 53}
};
