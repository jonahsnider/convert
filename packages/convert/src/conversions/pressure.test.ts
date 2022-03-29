import {assertConversions} from '../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{from: [1, 'psi'], to: [6.894_757 - Number.EPSILON * 3, 'kPa']}]);
});
