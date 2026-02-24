import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'lux'], to: [1, 'lm/m2'] },
		{ from: [1, 'ph'], to: [10_000, 'lx'] },
		{ from: [1, 'fc'], to: [10.764, 'lx'] },
		{ from: [1, 'klx'], to: [1000, 'lx'] },
		{ from: [1000, 'mlx'], to: [1, 'lx'] },
	]);
});
