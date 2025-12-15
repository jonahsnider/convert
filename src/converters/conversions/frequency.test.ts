import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{ from: [1, 'kHz'], to: [1000, 'Hz'] }]);

	assertConversions([{ from: [1, 'MHz'], to: [1_000_000, 'Hz'] }]);

	assertConversions([{ from: [1, 'GHz'], to: [1_000_000_000, 'Hz'] }]);
});
