import { describe, expect, test } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';
import { convert } from '../convert.ts';

describe('conversions', () => {
	assertConversions([{ from: [1, 'tonne'], to: [1, 'megagram'] }]);
	assertConversions([{ from: [1, 'kt'], to: [1102.3 + 0.011_310_924_388, 'short ton'] }]);
	assertConversions([{ from: [1, 'megatonne'], to: [1e6, 'tonne'] }]);
	assertConversions([{ from: [1, 'gigatonne'], to: [1, 'petagram'] }]);
	assertConversions([{ from: [1, 'troy ounce'], to: [31.1034768, 'grams'] }]);
	assertConversions([{ from: [1, 'microgram'], to: [1, 'mcg'] }]);

	assertConversions([{ from: [1, 'grain'], to: [64.79891, 'mg'] }]);

	test.each([
		['short hundredweight', 100, 45.359237],
		['long hundredweight', 112, 50.80234544],
	] as const)('%s equals %i pounds', (unit, pounds, kilograms) => {
		expect(convert(1, unit).to('pounds')).toBeCloseTo(pounds, 12);
		expect(convert(1, unit).to('kg')).toBeCloseTo(kilograms, 12);
	});
});
