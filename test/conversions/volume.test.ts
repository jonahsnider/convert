import {convertAssert} from '../util';

describe('volume', () => {
	convertAssert(1, 'cubic kilometre', 0.24, 'cu mi', true);
	convertAssert(1, 'cubic metre', 1, 'cubic metre');
	convertAssert(1, 'acre foot', 1233.48183754752, 'm3', true);
	convertAssert(1, 'cubic mile', 4.2, 'km3');
	convertAssert(1, 'gigalitre', 1e9, 'liter');
	convertAssert(1000, 'liter', 1, 'm3');
	convertAssert(1, 'liter', 10, 'deciliters');
	convertAssert(1, 'stere', 1, 'm3');
	convertAssert(1, 'cubic yard', 0.76, 'm3');
	convertAssert(1, 'cubic foot', 0.028, 'm3');
	convertAssert(1, 'board foot', 0.002359737, 'm3');
	convertAssert(1, 'cubic inch', 16, 'cm3');
	convertAssert(1, 'measurement ton', 1.2, 'm3');

	convertAssert(6.2898, 'oilbbl', 1, 'm3', true);
	convertAssert(0.0238, 'bbl', 1, 'US gallon', true);
	convertAssert(1, 'US beer barrel', 117, 'liter');
	convertAssert(264.1721, 'US gallons', 1, 'm3');
	convertAssert(1, 'US quart', 0.946352946, 'l');
	convertAssert(1, 'US pint', 473.176473, 'ml');
	convertAssert(1, 'US gill', 118, 'ml');
	convertAssert(1, 'US fluid ounce', 29.5735295625, 'ml');

	convertAssert(1, 'US dry barrel', 0.12, 'm3');
	convertAssert(1, 'US bushel', 35.2391, 'liters');
	convertAssert(1, 'US peck', 9.09218, 'liters', true);
	convertAssert(1, 'US dry gallon', 4.40488377086, 'liters');
	convertAssert(1, 'US dry quart', 0.946352946, 'liters');
	convertAssert(1, 'US dry pint', 33.6003125, 'm3');

	convertAssert(219.9692, 'imperial gallons', 1, 'm3');
});
