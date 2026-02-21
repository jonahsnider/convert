import { describe, expect, test } from 'vitest';
import { MeasureKind } from '../conversions/types';
import { unitsByMeasure } from './units-by-measure';

describe('units by measure', () => {
	test('has an entry for every MeasureKind', () => {
		for (const measureKind of Object.values(MeasureKind)) {
			if (typeof measureKind === 'number') {
				expect(unitsByMeasure).toHaveProperty(String(measureKind));
			}
		}
	});

	test('each entry is a non-empty array', () => {
		for (const measureKind of Object.values(MeasureKind)) {
			if (typeof measureKind === 'number') {
				const units = unitsByMeasure[measureKind as MeasureKind];
				expect(units).toBeInstanceOf(Array);
				expect(units.length).toBeGreaterThan(0);
			}
		}
	});

	test('length units include "m"', () => {
		expect(unitsByMeasure[MeasureKind.Length]).toContain('m');
	});

	test('time units include "s"', () => {
		expect(unitsByMeasure[MeasureKind.Time]).toContain('s');
	});

	test('mass units include "kg"', () => {
		expect(unitsByMeasure[MeasureKind.Mass]).toContain('kg');
	});
});
