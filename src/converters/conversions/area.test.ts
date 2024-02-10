import {describe} from 'vitest';
import {assertConversions} from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{from: [1, 'centiare'], to: [1, 'm2']},
		{from: [1, 'deciare'], to: [1e1, 'm2']},
		{from: [1, 'are'], to: [1e2, 'm2']},
		{from: [1, 'decare'], to: [1e3, 'm2']},
		{from: [1, 'hectare'], to: [1e4, 'm2']},

		{from: [2, 'square meter'], to: [2_000_000, 'square millimeter']},
		{from: [2, 'square meter'], to: [2e-6, 'square kilometer']},
		{from: [2, 'square meter'], to: [20_000, 'square centimeter']},
		{from: [2, 'square centimeter'], to: [200.000_000_000_000_03, 'square millimeter']},

		{from: [1, 'square inch'], to: [6.451_599_999_999_999, 'square centimeters']},
		{from: [1, 'square foot'], to: [0.092_903_04, 'square meters']},
		{from: [1, 'square yard'], to: [0.836_127_36, 'square meters']},
		{from: [1, 'square mile'], to: [2.589_988_110_336_000_3, 'square kilometers']},

		{from: [1, 'sq ft'], to: [12 ** 2, 'sq in']},
		{from: [1, 'sq yd'], to: [9, 'sq ft']},
		{from: [1, 'm2'], to: [3.861_021_585_424_458e-7, 'sq mi']},
	]);
});
