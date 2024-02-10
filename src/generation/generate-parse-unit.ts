import { FlattenedConversion, flattenConversions } from '../conversions/flatten';
import { Conversions } from '../conversions/types';

function compressUnit(unit: FlattenedConversion): string {
	return [
		...unit.names.map((name) => `    case '${name}':`),
		`      return [${unit.measure}, ${unit.ratio}, ${unit.difference}] as const;`,
	].join('\n');
}

/** Generates the source code for the unit parsing function used in conversion. */
export function generateParseUnit(conversions: Conversions): string {
	const code: string[] = [
		`// Generated at ${new Date().toLocaleString()}`,
		'',
		'export function parseUnit(unit: string) {',
		'  switch (unit) {',
		...flattenConversions(conversions).map(compressUnit),
		'    default:',
		'      throw new RangeError(`Unknown unit: ${unit}`);',
		'  }',
		'}',
	];

	return code.join('\n');
}
