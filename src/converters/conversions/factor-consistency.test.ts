import { describe, expect, test } from 'vitest';
import { area } from '../../conversions/measures/area';
import { length } from '../../conversions/measures/length';
import { volume } from '../../conversions/measures/volume';
import type { Measure } from '../../conversions/types';

function ratioOf(measure: Measure, name: string): number {
	const entry = measure.units.find((unit) => unit.names.includes(name));
	if (entry === undefined) {
		throw new Error(`No unit named ${name}`);
	}

	const { ratio } = entry;
	return typeof ratio === 'function' ? ratio() : Number(ratio);
}

// A squared/cubed unit's factor must be the linear unit's factor raised to that power.
// Guards the hand-written tables against exponent/transcription drift like the cubic mile
// factor, which read 4.2e3 (a swimming pool) instead of 1609.344^3 ≈ 4.2e9.
const families = [
	{ linear: 'mile', square: 'square mile', cubic: 'cubic mile' },
	{ linear: 'yard', square: 'square yard', cubic: 'cubic yard' },
	{ linear: 'foot', square: 'square foot', cubic: 'cubic foot' },
	{ linear: 'inch', square: 'square inch', cubic: 'cubic inch' },
];

describe('imperial length/area/volume factor consistency', () => {
	test.each(families)('$linear: square = length^2, cubic = length^3', ({ linear, square, cubic }) => {
		const lengthRatio = ratioOf(length, linear);
		expect(ratioOf(area, square) / lengthRatio ** 2).toBeCloseTo(1, 12);
		expect(ratioOf(volume, cubic) / lengthRatio ** 3).toBeCloseTo(1, 12);
	});
});
