import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{ from: [1, 'tonne'], to: [1, 'megagram'] }]);
	assertConversions([{ from: [1, 'kt'], to: [1102.3 + 0.011_310_924_388, 'short ton'] }]);
	assertConversions([{ from: [1, 'megatonne'], to: [1e6, 'tonne'] }]);
	assertConversions([{ from: [1, 'gigatonne'], to: [1, 'petagram'] }]);
});
