/**
 * @file Dev tooling
 */

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
export const siPrefixes = [
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
] as const;

/**
 * Binary SI prefixes.
 * @see https://en.wikipedia.org/wiki/Binary_prefix
 */
export const binaryPrefixes = [
	{aliases: ['pebi', 'Pi'], ratio: 2 ** 50},
	{aliases: ['tebi', 'Ti'], ratio: 2 ** 40},
	{aliases: ['gibi', 'Gi'], ratio: 2 ** 30},
	{aliases: ['mibi', 'Mi'], ratio: 2 ** 20},
	{aliases: ['kibi', 'Ki'], ratio: 2 ** 1e1}
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
