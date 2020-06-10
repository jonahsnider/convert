interface SIPrefix {
	aliases: readonly [string, string];
	ratio: number;
}

const siPrefixes: readonly SIPrefix[] = [
	{aliases: ['peta', 'P'] as const, ratio: 1e15},
	{aliases: ['tera', 'T'] as const, ratio: 1e12},
	{aliases: ['giga', 'G'] as const, ratio: 1e9},
	{aliases: ['mega', 'M'] as const, ratio: 1e6},
	{aliases: ['kilo', 'k'] as const, ratio: 1e3},
	{aliases: ['hecto', 'h'] as const, ratio: 1e2},
	{aliases: ['deca', 'da'] as const, ratio: 1e1},
	{aliases: ['deci', 'd'] as const, ratio: 1e-1},
	{aliases: ['centi', 'c'] as const, ratio: 1e-2},
	{aliases: ['milli', 'm'] as const, ratio: 1e-3},
	{aliases: ['micro', 'μ'] as const, ratio: 1e-6},
	{aliases: ['nano', 'n'] as const, ratio: 1e-9},
	{aliases: ['pico', 'p'] as const, ratio: 1e-12},
	{aliases: ['femto', 'f'] as const, ratio: 1e-15}
] as const;

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
}): readonly SIPrefix[] {
	return siPrefixes.map(prefix => ({...prefix, aliases: [`${prefix.aliases[0]}${unit.full}`, `${prefix.aliases[1]}${unit.symbol}`]}));
}

const prefix: string = 'convert: Invariant failed';

/**
 * Throws an errror if `condition` is falsy.
 * @param condition The condition to check
 * @param message The error message to display in development builds
 */
export function invariant(condition: unknown, message?: string): asserts condition {
	if (!condition) {
		if (__DEV__) {
			// Message is only in development
			throw new Error(`${prefix}: ${message || ''}`);
		}

		throw new Error(prefix);
	}
}
