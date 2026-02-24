import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'candlepower'], to: [1, 'candela'] },
		{ from: [1, 'hefnerkerze'], to: [0.92, 'candela'] },
		{ from: [1000, 'millicandela'], to: [1, 'candela'] },
	]);
});
