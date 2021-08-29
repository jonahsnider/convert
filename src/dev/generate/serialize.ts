import {UnitToFamily} from '../types/common';
import * as Generated from '../types/generated';

function stringify(value: unknown): string {
	const stringified = JSON.stringify(value, undefined, '\t');

	return stringified;
}

export function serialize({unitToFamily, allFamilies, best}: {unitToFamily: UnitToFamily; allFamilies: Generated.AllFamilies; best: Generated.Best}): string {
	const unitToFamilyVariable = `{
		${Object.entries(unitToFamily)
			.map(([unit, familyId]) => {
				const value = familyId === null ? null : `allFamilies[${familyId}]`;

				return `"${unit}": ${value}`;
			})
			.join(',')}
	}`;

	const unitToFamilyVariableTypeMap: Map<string, string[]> = new Map();

	for (const [unit, familyId] of Object.entries(unitToFamily)) {
		const key = familyId === null ? 'null' : `allFamilies[${familyId}]`;

		if (!unitToFamilyVariableTypeMap.has(key)) {
			unitToFamilyVariableTypeMap.set(key, []);
		}

		const array = unitToFamilyVariableTypeMap.get(key)!;

		array.push(unit);
	}

	const unitToFamilyVariableType = [...unitToFamilyVariableTypeMap.entries()]
		.map(([variable, units]) => `Record<${units.map(unit => `"${unit}"`).join('|')}, ${variable === 'null' ? 'null' : `typeof ${variable}`}>`)
		.join('&');

	return [
		`export const allFamilies = ${stringify(allFamilies)} as const;`,
		'',
		`export const unitToFamily: ${unitToFamilyVariableType} = ${unitToFamilyVariable} as any;`,
		'',
		`export const bestUnits = ${stringify(best)} as const;`
	].join('\n');
}
