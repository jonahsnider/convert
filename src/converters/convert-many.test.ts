import { describe, expect, test } from 'vitest';
import type { BestKind } from '../conversions/types';
import { convertMany } from './convert-many';

describe('conversions', () => {
	test.each([
		{ from: '1min 30s', to: [90, 'seconds'] },
		{ from: '51h 13min 56s', to: [51 + 13 / 60 + 56 / 60 / 60, 'hours'] },
		{ from: '51h 13min 56s', to: [51 + 13 / 60 + 56 / 60 / 60, 'h'] },

		{ from: '1m3', to: [1, 'm3'] },

		{ from: '.1m', to: [0.1, 'm'] },
		{ from: '-.1m', to: [-0.1, 'm'] },
		{ from: '-1m', to: [-1, 'm'] },
		{ from: '0.1m', to: [0.1, 'm'] },
		{ from: '-0.1m', to: [-0.1, 'm'] },
	])('$from -> $to', ({ from, to }) => {
		// biome-ignore lint/suspicious/noExplicitAny:
		expect(convertMany(from).to(to[1] as any)).toBe(to[0]);
	});

	describe('convert to best', () => {
		type TestCase = {
			from: [value: string] | [value: string, bestKind: BestKind];
			to: [quantity: number, unit: string];
		};

		test.each<TestCase>([
			{ from: ['500m 3km'], to: [3.5, 'km'] },
			{ from: ['500m 3km', 'metric'], to: [3.5, 'km'] },
			{ from: ['500m 3km', 'imperial'], to: [2.174_799_172_830_668_6, 'mi'] },
		])('$from -> $to', ({ from, to }) => {
			// biome-ignore lint/suspicious/noExplicitAny:
			const result = convertMany(from[0] as any).to('best', from[1] as any);

			expect(result.quantity).toBe(to[0]);
			expect(result.unit).toBe(to[1]);

			expect(result.toString()).toBe(to[0].toString() + to[1]);
		});
	});
});
