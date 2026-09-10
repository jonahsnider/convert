import { describe, expect, test } from 'vitest';
import { areaSi, si, volumeSi } from '../../conversions/macros/definitions/index.ts';
import type { Macro } from '../../conversions/macros/types.ts';
import { area } from '../../conversions/measures/area.ts';
import { length } from '../../conversions/measures/length.ts';
import { volume } from '../../conversions/measures/volume.ts';
import type { Measure } from '../../conversions/types.ts';

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

// The SI prefix macros are three hand-written copies of the same prefix list, so the squared and cubed tables must be the linear one raised to that power
// Guards against a prefix being left un-exponentiated
function factorOf(macro: Macro, prefix: string): number {
	const group = macro.find((entry) => entry.prefix === prefix);
	if (group === undefined) {
		throw new Error(`No prefix named ${prefix}`);
	}

	return Number(group.value);
}

describe('SI prefix macro factor consistency', () => {
	test.each(si.map(({ prefix }) => ({ prefix })))('$prefix: square = linear^2, cubic = linear^3', ({ prefix }) => {
		const linear = factorOf(si, prefix);
		expect(factorOf(areaSi, `square ${prefix}`) / linear ** 2).toBeCloseTo(1, 12);
		expect(factorOf(volumeSi, `cubic ${prefix}`) / linear ** 3).toBeCloseTo(1, 12);
	});
});
