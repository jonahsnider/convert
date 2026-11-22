import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'psi'], to: [6894.757_293_168_362, 'Pa'] },
		{ from: [1, 'inAq'], to: [2.490889, 'mbar'] },
		{ from: [1, 'inHg'], to: [3386.389, 'Pa'] },
	]);
});
