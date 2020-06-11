/**
 * Conversions for data.
 * @private
 */
export const data = [
	{aliases: ['byte', 'bytes', 'B'], ratio: 1},
	{aliases: ['bit', 'bits', 'b'], ratio: 1 / 8},
	{aliases: ['crumb', 'crumbs'], ratio: 1 / 4},
	{aliases: ['nibble', 'nibbles'], ratio: 1 / 2},
	{aliases: ['word', 'words'], ratio: 2},
	{
		aliases: ['petabyte', 'petabytes', 'PB'],
		ratio: 1e15
	},
	{aliases: ['terabyte', 'terabytes', 'TB'], ratio: 1e12},
	{aliases: ['gigabyte', 'gigabytes', 'GB'], ratio: 1e9},
	{aliases: ['megabyte', 'megabytes', 'MB'], ratio: 1e6},
	{aliases: ['kilobyte', 'kilobytes', 'kB'], ratio: 1e3},
	{aliases: ['hectobyte', 'hectobytes', 'hB'], ratio: 1e2},
	{aliases: ['decabyte', 'decabytes', 'daB'], ratio: 1e1},
	{aliases: ['pebibit', 'Pib'], ratio: 2 ** 50},
	{aliases: ['tebibit', 'Tib'], ratio: 2 ** 40},
	{aliases: ['gibibit', 'Gib'], ratio: 2 ** 30},
	{aliases: ['mibibit', 'Mib'], ratio: 2 ** 20},
	{aliases: ['kibibit', 'Kib'], ratio: 2 ** 10},
	{aliases: ['pebibyte', 'PiB'], ratio: 2 ** 50},
	{aliases: ['tebibyte', 'TiB'], ratio: 2 ** 40},
	{aliases: ['gibibyte', 'GiB'], ratio: 2 ** 30},
	{aliases: ['mibibyte', 'MiB'], ratio: 2 ** 20},
	{aliases: ['kibibyte', 'KiB'], ratio: 2 ** 10}
] as const;
