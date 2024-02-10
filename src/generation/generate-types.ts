import { flattenConversions } from '../conversions/flatten.js';
import { Conversions, MeasureKind } from '../conversions/types.js';

export function generateTypes(conversions: Conversions): string {
	const flat = flattenConversions(conversions);
	const unitsByMeasure: Map<MeasureKind, string[]> = new Map();

	for (const conversion of flat) {
		for (const name of conversion.names) {
			const units = unitsByMeasure.get(conversion.measure) ?? [];
			units.push(name);
			unitsByMeasure.set(conversion.measure, units);
		}
	}

	const code: string[] = [
		`// Generated at ${new Date().toLocaleString()}`,
		'',
		'export type UnitsByMeasure = {',
		...Array.from(unitsByMeasure.entries()).map(
			([measure, units]) => `  ${measure}: ${units.map((unit) => `'${unit}'`).join(' | ')};`,
		),
		'}',
	];

	return code.join('\n');
}
