import { describe, expect, test } from 'vitest';
import { MeasureKind } from '../conversions/types';
import { getMeasureKind } from './get-measure-kind';

describe('get measure kind', () => {
	test('returns measure kind for valid units', () => {
		expect(getMeasureKind('m')).toBe(MeasureKind.Length);
		expect(getMeasureKind('s')).toBe(MeasureKind.Time);
		expect(getMeasureKind('kg')).toBe(MeasureKind.Mass);
	});

	test('returns undefined on invalid units', () => {
		expect(getMeasureKind('invalid')).toBeUndefined();
		expect(getMeasureKind('__proto__')).toBeUndefined();
	});
});
