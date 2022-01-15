import {assertConversions} from '../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{from: [1, 'centiare'], to: [1, 'm2']},
		{from: [1, 'deciare'], to: [1e1, 'm2']},
		{from: [1, 'are'], to: [1e2, 'm2']},
		{from: [1, 'decare'], to: [1e3, 'm2']},
		{from: [1, 'hectare'], to: [1e4, 'm2']},

		{from: [1, 'square meter'], to: [1000, 'square millimeter']},

		{from: [1, 'sq ft'], to: [12 ** 2, 'sq in']},
		{from: [1, 'sq yd'], to: [9, 'sq ft']},
		{from: [1, 'm2'], to: [3.861_021_585_424_458e-7, 'sq mi']},
	]);
});
