import { FlattenedConversion, flattenConversions } from '../conversions/flatten';
import { Conversions } from '../conversions/types';

function compressUnit(unit: FlattenedConversion): string {
	return unit.names.map((name) => `  '${name}': [${unit.measure}, ${unit.ratio}],`).join('\n');
}

function compressDifference(unit: FlattenedConversion): string {
	if (unit.difference === 0) {
		return '';
	}

	return unit.names.map((name) => `  '${name}': ${unit.difference},`).join('\n');
}

/** Generates the source code for the unit parsing function used in conversion. */
export function generateParseUnit(conversions: Conversions): string {
	const flattened = flattenConversions(conversions);

	const code: string[] = [
		`// Generated at ${new Date().toLocaleString()}`,
		'',
		'export const unitsObject = {',
		...flattened.map((unit) => compressUnit(unit)),
		'} as const;',
		'',
		'export const differences = {',
		...flattened.map((unit) => compressDifference(unit)).filter(Boolean),
		'} as const;',
	];

	return code.join('\n');
}
