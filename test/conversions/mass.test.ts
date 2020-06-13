import {convertAssert} from '../util';

describe('mass', () => {
	convertAssert(1, 'kilogram', 1e3, 'grams');
	convertAssert(1e3, 'kilogram', 1, 'metric ton');
	// Imperial ton has the same symbol (t), so we check that there isn't any mismatched value here
	convertAssert(1, 'metric ton', 1, 't');
	convertAssert(1, 'kilogram', 1e6, 'milligrams');
	convertAssert(1, 'kilogram', 1e9, 'micrograms');
	convertAssert(0.45359237, 'kilogram', 1, 'pound');

	convertAssert(1, 'short ton', 2000, 'pounds');
	convertAssert(1.12, 'short ton', 1, 'long ton', true);
	convertAssert(1, 'long ton', 2240, 'pounds', true);

	convertAssert(1, 'stone', 14, 'pounds', true);

	convertAssert(1, 'pound', 16, 'ounces', true);
});
