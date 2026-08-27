import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';

describe('conversions', () => {
	assertConversions([{ from: [1, 'nt'], to: [1, 'cd/m2'] }]);
});
