import { concatIterables, multiReplace } from '@jonahsnider/util';
import BigNumber from 'bignumber.js';
import type { Conversions, Measure, MeasureEntry, MeasureKind, Numeric } from './types';

export type FlattenedConversion = {
	measure: MeasureKind;
	names: string[];
	ratio: number | string;
	difference: number | string;
};

export function flattenConversions(conversions: Conversions): FlattenedConversion[] {
	const compressed: FlattenedConversion[] = [];

	for (const measure of conversions.values()) {
		compressed.push(...flattenMeasure(measure));
	}

	return compressed;
}

export function flattenMeasure(measure: Measure): FlattenedConversion[] {
	const compressed: FlattenedConversion[] = [];

	for (const unit of measure.units) {
		compressed.push(flattenUnit(measure.kind, unit));
	}

	return compressed;
}

function flattenUnit(measure: MeasureKind, unit: MeasureEntry): FlattenedConversion {
	const names = [...new Set(concatIterables(unit.names, unit.symbols ?? []))].map(escapeName);
	const ratio = flattenNumeric(unit.ratio);
	const difference = flattenNumeric(unit.difference ?? 0);

	return { measure, names, ratio, difference };
}

function flattenNumeric(numeric: Numeric): number | string {
	if (typeof numeric === 'number') {
		return numeric;
	}

	if (numeric instanceof BigNumber) {
		if (Number.isNaN(numeric.toNumber())) {
			throw new RangeError(`Invalid numeric value: ${numeric}`);
		}
		return numeric.toString();
	}

	// Convert function to string and remove initial declaration
	const fn = numeric.toString();

	return fn.replace('() => ', '');
}

function escapeName(name: string): string {
	return multiReplace(name, {
		"'": "\\'",
		'\\': '\\\\',
		'"': '\\"',
	});
}
