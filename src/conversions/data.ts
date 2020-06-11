/**
 * Conversions for data.
 * @private
 * @see https://en.wikipedia.org/wiki/Orders_of_magnitude_(data)
 * @see https://en.wikipedia.org/wiki/Units_of_information
 * @see https://en.wikipedia.org/wiki/Template:Information_units
 */
export const data = [
	{aliases: ['bit', 'bits', 'b', 'unibit', 'unibits'], ratio: 1},
	{aliases: ['millibit', 'millibits', 'mbit'], ratio: 1e-3},
	{aliases: ['centibit', 'centibits', 'cbit'], ratio: 1e-2},
	{aliases: ['decibit', 'decibits'], ratio: 1e-1},
	{aliases: ['crumb', 'crumbs', 'dibit', 'dibits'], ratio: 2},
	{aliases: ['triad', 'triads', 'triade', 'triades', 'tribit', 'tribits'], ratio: 3},
	{
		aliases: [
			'nibble',
			'nibbles',
			'tetrad',
			'tetrads',
			'tetrade',
			'tetrades',
			'quadbit',
			'quadbits',
			'semioctect',
			'semioctets',
			'halfbyte',
			'halfbytes',
			'quartet',
			'quartets'
		],
		ratio: 4
	},
	{aliases: ['pentad', 'pentads'], ratio: 5},
	{aliases: ['hexad', 'hexads', 'hexade', 'hexades', 'sextet', 'sextets'], ratio: 6},
	{aliases: ['heptad', 'heptdades'], ratio: 7},
	{aliases: ['byte', 'bytes', 'B', 'octect', 'octects', 'octad', 'octads', 'octade', 'octades'], ratio: 8},
	{aliases: ['decabit', 'decabits', 'declet', 'decle', 'deckle'], ratio: 10},
	{aliases: ['slab', 'slabs'], ratio: 12},
	{aliases: ['hextet', 'hextets'], ratio: 16},
	{aliases: ['catena', 'catenas'], ratio: 24},
	{aliases: ['hectobit', 'hectobits', 'hbit'], ratio: 1e2},
	{aliases: ['kilobit', 'kilobits', 'kbit'], ratio: 1e3},
	{aliases: ['kibibit', 'kibibits', 'Kibit'], ratio: 2 ** 10},
	{aliases: ['kilobyte', 'kilobytes', 'kB'], ratio: 8e3},
	{aliases: ['kibibyte', 'kibibytes', 'KiB'], ratio: 2 ** 13},
	{aliases: ['megabit', 'megabits', 'Mbit'], ratio: 1e6},
	{aliases: ['mebibit', 'mebibits', 'Mibit'], ratio: 2 ** 20},
	{aliases: ['megabyte', 'megabytes', 'MB'], ratio: 8e6},
	{aliases: ['mebibyte', 'mebibytes', 'MiB'], ratio: 2 ** 23},
	{aliases: ['gigabit', 'gigabits', 'Gbit'], ratio: 1e9},
	{aliases: ['gibibit', 'gibibits', 'Gibit'], ratio: 2 ** 30},
	{aliases: ['gigabyte', 'gigabytes', 'GB'], ratio: 8e9},
	{aliases: ['gibibyte', 'gibibytes', 'GiB'], ratio: 2 ** 33},
	{aliases: ['terabit', 'terabits', 'Tbit'], ratio: 1e12},
	{aliases: ['tebibit', 'tebibits', 'Tibit'], ratio: 2 ** 40},
	{aliases: ['terabyte', 'terabytes', 'TB'], ratio: 8e12},
	{aliases: ['tebibyte', 'tebibytes', 'TiB'], ratio: 2 ** 43},
	{aliases: ['petabit', 'petabits', 'Pbit'], ratio: 1e15},
	{aliases: ['pebibit', 'pebibits', 'Pibit'], ratio: 2 ** 50},
	{aliases: ['petabyte', 'petabytes', 'PB'], ratio: 1e15},
	{aliases: ['pebibyte', 'pebibytes', 'PiB'], ratio: 2 ** 53}
] as const;
