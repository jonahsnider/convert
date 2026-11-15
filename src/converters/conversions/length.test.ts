import { describe, expect, test } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';
import { convert } from '../convert.ts';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'pica'], to: [12, 'points'] },
		{ from: [6, 'picas'], to: [1, 'inches'] },
		{ from: [72, 'points'], to: [1, 'inches'] },
	]);

	test('selects feet for 72 picas', () => {
		const result = convert(72, 'picas').to('best', 'imperial');
		expect(result.unit).toBe('ft');
		expect(result.quantity).toBeCloseTo(1, 12);
		expect(result.toString(0)).toBe('1 ft');
	});

	assertConversions([{ from: [9.461, 'Pm'], to: [1.000_028_489_070_688_8, 'light-year'] }]);

	// https://en.wikipedia.org/wiki/Parsec
	assertConversions([{ from: [1, 'pc'], to: [3.26156 + 0.0000037771674333, 'ly'] }]);
});
