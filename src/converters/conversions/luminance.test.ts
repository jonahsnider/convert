import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'nt'], to: [1, 'cd/m2'] },
		{ from: [1, 'sb'], to: [1e4, 'cd/m2'] },
		{ from: [1, 'asb'], to: [1 / Math.PI, 'cd/m2'] },
		{ from: [1, 'ft-L'], to: [1 / 0.3048 ** 2 / Math.PI, 'cd/m2'] },
		{ from: [1, 'lambert'], to: [1e4 / Math.PI, 'cd/m2'] },
		{ from: [1, 'kilonit'], to: [1000, 'nt'] },
	]);
});
