import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{ from: [1, 'pica'], to: [12 - 0.000_850_340_136_056_004_8, 'points'] }]);

	assertConversions([{ from: [9.461, 'Pm'], to: [1.000_028_489_070_688_8, 'light-year'] }]);

	// https://en.wikipedia.org/wiki/Parsec
	assertConversions([{ from: [1, 'pc'], to: [3.26156 + 0.0000037771674333, 'ly'] }]);
});
