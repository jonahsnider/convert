import {Except} from 'type-fest';

interface SIPrefix {
	aliases: readonly [string, string];
	ratio: number;
}

interface PluralSIPrefix extends Except<SIPrefix, 'aliases'> {
	aliases: readonly [string, string, string];
}

/**
 * SI prefixes.
 * @see https://en.wikipedia.org/wiki/Metric_prefix
 */
export const siPrefixes: readonly SIPrefix[] = [
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

/**
 * Binary SI prefixes.
 * @see https://en.wikipedia.org/wiki/Binary_prefix
 */
export const binaryPrefixes: readonly SIPrefix[] = [
	{aliases: ['pebi', 'Pi'] as const, ratio: 2 ** 50},
	{aliases: ['tebi', 'Ti'] as const, ratio: 2 ** 40},
	{aliases: ['gibi', 'Gi'] as const, ratio: 2 ** 30},
	{aliases: ['mibi', 'Mi'] as const, ratio: 2 ** 20},
	{aliases: ['kibi', 'Ki'] as const, ratio: 2 ** 10}
] as const;

/**
 *
 * @private
 * @param unit Unit to generate prefixes for
 * @param prefixes Prefixes to use (default is decimal SI)
 */
export function prefixer<T>(
	unit: {
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
	},
	prefixes = siPrefixes
): readonly PluralSIPrefix[] {
	return prefixes.map(prefix => ({
		...prefix,
		aliases: [`${prefix.aliases[0]}${unit.full}`, `${prefix.aliases[0]}${unit.full}s`, `${prefix.aliases[1]}${unit.symbol}`]
	}));
}

const prefix: string = 'convert: Invariant failed';

/**
 * Throws an errror if `condition` is falsy.
 * @param condition The condition to check
 * @param message The error message to display in development builds
 */
export function invariant(condition: unknown, message?: string): asserts condition {
	if (!condition) {
		if (true) {
			// Message is only in development
			throw new Error(`${prefix}: ${message || ''}`);
		}

		throw new Error(prefix);
	}
}
