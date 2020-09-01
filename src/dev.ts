/* istanbul ignore file */
/**
 * @file Dev tooling
 * @private
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
 * @private
 */
export const siPrefixes = [
	{aliases: ['femto', 'f'], ratio: 1e-15},
	{aliases: ['pico', 'p'], ratio: 1e-12},
	{aliases: ['nano', 'n'], ratio: 1e-9},
	{aliases: ['micro', 'μ'], ratio: 1e-6},
	{aliases: ['milli', 'm'], ratio: 1e-3},
	{aliases: ['centi', 'c'], ratio: 1e-2},
	{aliases: ['deci', 'd'], ratio: 1e-1},
	{aliases: ['deca', 'da'], ratio: 1e1},
	{aliases: ['hecto', 'h'], ratio: 1e2},
	{aliases: ['kilo', 'k'], ratio: 1e3},
	{aliases: ['mega', 'M'], ratio: 1e6},
	{aliases: ['giga', 'G'], ratio: 1e9},
	{aliases: ['tera', 'T'], ratio: 1e12},
	{aliases: ['peta', 'P'], ratio: 1e15}
] as const;

/**
 * Binary SI prefixes.
 * @see https://en.wikipedia.org/wiki/Binary_prefix
 * @private
 */
export const binaryPrefixes = [
	{aliases: ['kibi', 'Ki'], ratio: 2 ** 10},
	{aliases: ['mibi', 'Mi'], ratio: 2 ** 20},
	{aliases: ['gibi', 'Gi'], ratio: 2 ** 30},
	{aliases: ['tebi', 'Ti'], ratio: 2 ** 40},
	{aliases: ['pebi', 'Pi'], ratio: 2 ** 50}
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
	prefixes: SIPrefix[] = (siPrefixes as unknown) as SIPrefix[]
) {
	const generated = prefixes.map((prefix: SIPrefix) => ({
		...prefix,
		aliases: [`${prefix.aliases[0]}${unit.full}`, `${prefix.aliases[0]}${unit.full}s`, `${prefix.aliases[1]}${unit.symbol}`]
	}));

	const object: Record<string, {ratio: number}> = {};

	generated.forEach(item => item.aliases.forEach(alias => (object[alias] = {ratio: item.ratio})));

	return object;
}
