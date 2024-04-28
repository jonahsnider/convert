import { describe, expect, test } from 'vitest';
import { ms } from './ms';

describe('conversions', () => {
	describe('duration string to ms', () => {
		test.each([
			['1s', 1000],
			['1m', 60_000],
			['1d', 86_400_000],
			['1d 24h', 86_400_000 * 2],
		])('%p -> %p', (from, to) => {
			expect(ms(from)).toBe(to);
		});
	});

	describe('ms to duration string', () => {
		test.each([
			[60_000, '1min'],
			[2 * 60_000, '2min'],
			[-3 * 60_000, '-3min'],
			[10 * 60_000 * 60, '10h'],
		])('%p -> %p', (from, to) => {
			expect(ms(from)).toBe(to);
		});
	});
});
