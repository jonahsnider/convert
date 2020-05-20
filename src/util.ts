interface SIPrefix {
	aliases: [string, string];
	ratio: number;
}

const siPrefixes: SIPrefix[] = [
	{aliases: ['peta', 'P'], ratio: 1e15},
	{aliases: ['tera', 'T'], ratio: 1e12},
	{aliases: ['giga', 'G'], ratio: 1e9},
	{aliases: ['mega', 'M'], ratio: 1e6},
	{aliases: ['kilo', 'k'], ratio: 1e3},
	{aliases: ['hecto', 'h'], ratio: 1e2},
	{aliases: ['deca', 'da'], ratio: 1e1},
	{aliases: ['deci', 'd'], ratio: 1e-1},
	{aliases: ['centi', 'c'], ratio: 1e-2},
	{aliases: ['milli', 'm'], ratio: 1e-3},
	{aliases: ['micro', 'μ'], ratio: 1e-6},
	{aliases: ['nano', 'n'], ratio: 1e-9},
	{aliases: ['pico', 'p'], ratio: 1e-12},
	{aliases: ['femto', 'f'], ratio: 1e-15}
];

export function siPrefix<T>(unit: {
	/**
	 * The full name of the unit.
	 * @example 'second'
	 */
	full: T;
	/**
	 * The symbol for the unit.
	 * @example 's'
	 */
	symbol: T;
}): SIPrefix[] {
	return siPrefixes.map(prefix => ({...prefix, aliases: [`${prefix.aliases[0]}${unit.full}`, `${prefix.aliases[1]}${unit.symbol}`]}));
}
