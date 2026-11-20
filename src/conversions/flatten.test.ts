import BigNumber from 'bignumber.js';
import { expect, test } from 'vitest';
import { flattenConversions } from './flatten.ts';
import { type Conversions, MeasureKind } from './types.ts';

test('flattens every measure', () => {
	const conversions: Conversions = new Map([
		[
			MeasureKind.Length,
			{ kind: MeasureKind.Length, best: ['m'], units: [{ names: ['meter'], symbols: ['m'], ratio: 1 }] },
		],
		[MeasureKind.Mass, { kind: MeasureKind.Mass, best: ['g'], units: [{ names: ['gram'], symbols: ['g'], ratio: 1 }] }],
	]);

	expect(flattenConversions(conversions)).toStrictEqual([
		{ measure: MeasureKind.Length, names: ['meter', 'm'], ratio: 1, difference: 0 },
		{ measure: MeasureKind.Mass, names: ['gram', 'g'], ratio: 1, difference: 0 },
	]);
});

test('throws on invalid ratios', () => {
	const conversions: Conversions = new Map([
		[
			MeasureKind.Length,
			{
				kind: MeasureKind.Length,
				best: ['m'],
				units: [{ names: ['meter'], symbols: ['m'], ratio: new BigNumber(Number.NaN) }],
			},
		],
	]);

	expect(() => flattenConversions(conversions)).toThrowErrorMatchingInlineSnapshot(
		'[RangeError: Invalid numeric value: NaN]',
	);
});
