import {convert} from '../../src';
import {convertAssert} from '../util';
import {ValidTimeUnits} from '../../types/units';

const assertHelper = (seconds: number, from: ValidTimeUnits) => {
	convertAssert(seconds, 'second', from, 1);
};

describe('time', () => {
	assertHelper(3.1556952e9, 'centuries');

	assertHelper(86_400, 'days');

	assertHelper(315.56952e6, 'decade');

	assertHelper(1.2096e6, 'fortnights');

	assertHelper(315.56952e6, 'decades');

	assertHelper(3 + 1 / 3, 'halakim');

	assertHelper(60 * 60, 'hours');

	assertHelper(1 / 60, 'jiffies');

	assertHelper(1 / 100, 'ja');

	assertHelper(900, 'ke');

	it('converts millennia', () =>
		expect(
			convert(1)
				.from('millennium')
				.to('second')
			// Floating point math is hard
			// TODO: We should have a better way of handling problems that occur with very precise numbers like this
			// In a perfect world the output would be 31556952000
			// In reality it's                        31556951999.999996
		).toBeCloseTo(31.556952e9));

	assertHelper(60, 'minutes');

	assertHelper(90, 'moments');

	assertHelper(1 / 1000, 'milliseconds');
});
