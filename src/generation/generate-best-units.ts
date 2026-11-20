import assert from 'node:assert/strict';
import BigNumber from 'bignumber.js';
import { flattenMeasure } from '../conversions/flatten.ts';
import type { Conversions, Measure } from '../conversions/types.ts';
import type { BestKind } from '../types/public.ts';

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

	let previous: BestEntry | undefined;

	for (const unit of best) {
		const entry = flattened.get(unit);
		assert(entry, new TypeError(`Unit ${unit} is not defined`));

		const ratio: BestEntry['ratio'] =
			unit === smallestName ? 1 : new BigNumber(entry.ratio).div(smallest.ratio).toString();

		// convertToBest stops at the first unit that's too large, so best units must be in ascending order
		assert(
			previous === undefined || new BigNumber(ratio).gt(previous.ratio),
			new RangeError(`Best units must be sorted from smallest to largest, but ${unit} comes after ${previous?.unit}`),
		);

		previous = { ratio: ratio, unit };
		result.push(previous);
	}

	return result;
}

type CompressedBestUnit = [unit: string, ratio: number];

function createLookupArray(measures: Conversions, kind: BestKind): string {
	// Result is an array where indexes match up with the values of MeasureKind
	// It will have tuples of the best units for each measure
	const result: CompressedBestUnit[][] = [];

	for (const measure of measures.values()) {
		const best = getBestUnitsByMeasure(measure, kind);
		result.push(best.map((entry) => [entry.unit, Number(entry.ratio)]));
	}

	return JSON.stringify(result);
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
		'export const bestUnits = [',
		`  ${createLookupArray(measures, 'metric')},`,
		`  ${createLookupArray(measures, 'imperial')}`,
		'] as const;',
		'',
		'export type BestUnits = {',
		`  imperial: ${bestUnits.imperial.join(' | ')};`,
		`  metric: ${bestUnits.metric.join(' | ')};`,
		'};',
	];

	return code.join('\n');
}
