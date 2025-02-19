import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'psi'], to: [6.894_757 - Number.EPSILON * 3, 'kPa'] },
		{ from: [1, 'inAq'], to: [2.490889, 'mbar'] },
		{ from: [1, 'inHg'], to: [3386.389, 'Pa'] },
	]);
});
