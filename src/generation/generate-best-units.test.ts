import { expect, test } from 'vitest';
import { type Conversions, MeasureKind } from '../conversions/types.ts';
import { generateBestUnits } from './generate-best-units.ts';

test('throws when best units are not sorted from smallest to largest', () => {
	const conversions: Conversions = new Map([
		[
			MeasureKind.Length,
			{
				kind: MeasureKind.Length,
				best: ['m', 'km', 'cm'],
				units: [
					{ names: ['meter'], symbols: ['m'], ratio: 1 },
					{ names: ['kilometer'], symbols: ['km'], ratio: 1000 },
					{ names: ['centimeter'], symbols: ['cm'], ratio: 0.01 },
				],
			},
		],
	]);

	expect(() => generateBestUnits(conversions)).toThrowErrorMatchingInlineSnapshot(
		'[RangeError: Best units must be sorted from smallest to largest, but cm comes after km]',
	);
});
