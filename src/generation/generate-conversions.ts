import { type Conversions, type MeasureEntry, MeasureKind } from '../conversions/types';

function escapeString(s: string): string {
	return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function serializeStringArray(arr: string[]): string {
	return `[${arr.map((s) => `'${escapeString(s)}'`).join(', ')}]`;
}

function serializeUnit(unit: MeasureEntry): string {
	const parts: string[] = [
		`names: ${serializeStringArray(unit.names)}`,
		`symbols: ${serializeStringArray(unit.symbols ?? [])}`,
	];

	return `\t\t\t{ ${parts.join(', ')} }`;
}

/** Generates the source code for the conversions data file used by the `convert/conversions` entry point. */
export function generateConversions(conversions: Conversions): string {
	const entries: string[] = [];

	for (const [kind, measure] of conversions) {
		const kindName = `MeasureKind.${MeasureKind[kind]}`;

		const metric = Array.isArray(measure.best) ? measure.best : measure.best.metric;
		const imperial = Array.isArray(measure.best) ? measure.best : measure.best.imperial;
		const bestStr = `{ metric: ${serializeStringArray(metric)}, imperial: ${serializeStringArray(imperial)} }`;

		const units = measure.units.map((u) => serializeUnit(u)).join(',\n');

		entries.push(`\t[${kindName}, {
\t\tkind: ${kindName},
\t\tbest: ${bestStr},
\t\tunits: [
${units},
\t\t],
\t}]`);
	}

	return [
		`// Generated at ${new Date().toLocaleString()}`,
		"import { MeasureKind } from '../conversions/types';",
		'',
		'export const conversions = new Map([',
		entries.join(',\n'),
		']);',
		'',
	].join('\n');
}
