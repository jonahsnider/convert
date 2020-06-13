import {convertAssert} from '../util';

describe('mass', () => {
	convertAssert(1, 'kilogram', 'grams', 1e3);
	convertAssert(1e3, 'kilogram', 'metric ton', 1);
	// Imperial ton has the same symbol (t), so we check that there isn't any mismatched value here
	convertAssert(1, 'metric ton', 't', 1);
	convertAssert(1, 'kilogram', 'milligrams', 1e6);
	convertAssert(1, 'kilogram', 'micrograms', 1e9);
	convertAssert(0.45359237, 'kilogram', 'pound', 1);

	convertAssert(1, 'short ton', 'pounds', 2000);
	convertAssert(1.12, 'short ton', 'long ton', 1, true);
	convertAssert(1, 'long ton', 'pounds', 2240, true);

	convertAssert(1, 'stone', 'pounds', 14, true);

	convertAssert(1, 'pound', 'ounces', 16, true);
});
