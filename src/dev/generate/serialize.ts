import * as Generated from '../types/generated';
import {prefixUnits, UnitGroup} from './si-prefix.js';

function optimizeUnitGroups(group: UnitGroup[]): Generated.UnitGroup[] {
	return group.map(unit => [unit.prefix, unit.symbol, unit.value]);
}

function stringify(value: unknown): string {
	return JSON.stringify(value, undefined, '\t');
}

export function serialize({
	conversions,
	macros,
	best,
	prefixed
}: {
	conversions: Generated.Conversions;
	macros: Generated.PrefixMacro[];
	best: Generated.Best[];
	prefixed: Generated.Conversions;
}): string {
	const prefixMacros: Generated.PrefixMacros = [
		optimizeUnitGroups(prefixUnits.si),
		optimizeUnitGroups(prefixUnits.binary),
		optimizeUnitGroups(prefixUnits.si.filter(unit => unit.kind === 'big')),
		optimizeUnitGroups(prefixUnits.volumeSi)
	];

	return [
		`export const conversions = {__proto__:null, ${stringify({...conversions}).slice(1)} as const;`,
		'',
		`export const macros = ${stringify(macros)} as const;`,
		'',
		`export const prefixMacros = ${stringify(prefixMacros)} as const;`,
		'',
		`export const bestUnits = ${stringify(best)} as const;`,
		'',
		`export const prefixed = ${stringify(prefixed)} as const;`,
		'',
		`export const conversionsWithMacrosApplied = {__proto__:null, ${stringify({...conversions, ...prefixed}).slice(1)} as const;`
	].join('\n');
}
