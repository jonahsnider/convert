import assert from 'assert';
import BigNumber from 'bignumber.js';
import { flattenMeasure } from '../conversions/flatten';
import { BestKind, Conversions, Measure, MeasureKind } from '../conversions/types';

type BestEntry = {
	ratio: string | number;
	unit: string;
};

function getBestUnitsByMeasure(measure: Measure, kind: BestKind): BestEntry[] {
	const flattened = new Map(flattenMeasure(measure).flatMap((entry) => entry.names.map((name) => [name, entry])));
	const best = Array.isArray(measure.best) ? measure.best : measure.best[kind];

	const result: BestEntry[] = [];

	const smallestName = best[0];
	assert(smallestName, new TypeError('No best units defined'));
	const smallest = flattened.get(smallestName);
	assert(smallest, new TypeError(`Unit ${smallestName} is not defined`));

	for (const unit of best) {
		const entry = flattened.get(unit);
		assert(entry, new TypeError(`Unit ${unit} is not defined`));

		const ratio = unit === smallestName ? 1 : new BigNumber(entry.ratio).div(smallest.ratio).toString();
		result.push({ ratio: ratio, unit });
	}

	return result;
}

export type CompressedBestUnit = [unit: string, ratio: number];

function compressBestUnits(best: BestEntry[]): string {
	const inner = best.map((entry) => `['${entry.unit}', ${entry.ratio}]`);
	return `[${inner.join(', ')}] as const`;
}

export function generateBestUnits(measures: Conversions): string {
	const bestUnits: Record<BestKind, string[]> = {
		imperial: [],
		metric: [],
	};

	for (const measure of measures.values()) {
		if (Array.isArray(measure.best)) {
			for (const element of measure.best) {
				bestUnits.metric.push(element);
				bestUnits.imperial.push(element);
			}
		} else {
			for (const element of measure.best.metric) {
				bestUnits.metric.push(element);
			}

			for (const element of measure.best.imperial) {
				bestUnits.imperial.push(element);
			}
		}
	}

	bestUnits.imperial = bestUnits.imperial.map((unit) => `'${unit}'`);
	bestUnits.metric = bestUnits.metric.map((unit) => `'${unit}'`);

	const code: string[] = [
		`// Generated at ${new Date().toLocaleString()}`,
		'',
		'export function getBestUnitsByMeasure(measure: number, kind: "metric" | "imperial") {',
		'  switch (measure) {',
		Object.values(MeasureKind)
			.filter((kind): kind is MeasureKind => typeof kind !== 'string')
			.map((kind) => {
				const measure = measures.get(kind);
				assert(measure, new TypeError(`Measure ${kind} is not defined`));

				const bestMetric = compressBestUnits(getBestUnitsByMeasure(measure, 'metric'));
				const bestImperial = compressBestUnits(getBestUnitsByMeasure(measure, 'imperial'));

				if (Array.isArray(measure.best)) {
					// No logic
					return [`    case ${kind}:`, `      return ${bestMetric};`].join('\n');
				}

				// Check whether kind is metric
				return [`    case ${kind}:`, `      return kind === 'imperial' ? ${bestImperial} : ${bestMetric};`].join('\n');
			})
			.join('\n'),
		'    default:',
		'      throw new RangeError(`Unknown measure: ${measure}`);',
		'  }',
		'}',
		'',
		'export type BestUnits = {',
		`  imperial: ${bestUnits.imperial.join(' | ')};`,
		`  metric: ${bestUnits.metric.join(' | ')};`,
		'};',
	];

	return code.join('\n');
}
