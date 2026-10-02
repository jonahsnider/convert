import assert from 'node:assert/strict';
import * as Macros from '../conversions/macros/definitions/index.ts';
import type { Conversions } from '../conversions/types.ts';

function stringUnion(strings: string[]): string {
	return [...new Set(strings)].map((value) => JSON.stringify(value)).join(' | ') || 'never';
}

export function generateTypes(conversions: Conversions): string {
	const macroNames = new Map(
		Object.entries(Macros).map(([name, macro]) => [macro, name[0]?.toUpperCase() + name.slice(1)]),
	);
	const macroTypes = [...macroNames].flatMap(([macro, name]) => [
		'/** @internal */',
		`export type ${name}Prefix = ${stringUnion(macro.map((group) => group.prefix))};`,
		'/** @internal */',
		`export type ${name}Symbol = ${stringUnion(macro.flatMap((group) => group.symbol))};`,
	]);
	const unitsByMeasure: string[] = [];

	for (const measure of conversions.values()) {
		const units: string[] = [];
		for (const unit of measure.units) {
			if ('macro' in unit) {
				const name = macroNames.get(unit.macro);
				assert(name, 'Unknown unit macro');
				units.push(
					`\`\${${name}Prefix}\${${stringUnion(unit.names)}}\``,
					`\`\${${name}Symbol}\${${stringUnion(unit.symbols)}}\``,
				);
			} else {
				units.push(stringUnion([...unit.names, ...(unit.symbols ?? [])]));
			}
		}

		unitsByMeasure.push(`  ${measure.kind}: ${units.join(' | ')};`);
	}

	return [
		`// Generated at ${new Date().toLocaleString()}`,
		'',
		...macroTypes,
		'',
		'/** @internal */',
		'export type UnitsByMeasure = {',
		...unitsByMeasure,
		'}',
	].join('\n');
}
