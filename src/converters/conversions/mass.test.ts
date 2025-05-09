import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{ from: [1, 'tonne'], to: [1, 'megagram'] }]);
	assertConversions([{ from: [1, 'kt'], to: [1102.3 + 0.011_310_924_388, 'short ton'] }]);
	assertConversions([{ from: [1, 'megatonne'], to: [1e6, 'tonne'] }]);
	assertConversions([{ from: [1, 'gigatonne'], to: [1, 'petagram'] }]);
	assertConversions([{ from: [1, 'troy ounce'], to: [31.1034768, 'grams'] }]);
	assertConversions([{ from: [1, 'microgram'], to: [1, 'mcg'] }]);

	assertConversions([{ from: [1, 'grain'], to: [64.79891, 'mg'] }]);

	assertConversions([{ from: [1, 'short hundredweight'], to: [45.36, 'kg'] }]);
	assertConversions([{ from: [1, 'long hundredweight'], to: [50.8, 'kg'] }]);
});
