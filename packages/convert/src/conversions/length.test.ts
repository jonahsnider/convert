import {assertConversions} from '../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{from: [1, 'pica'], to: [12 - 0.000_850_340_136_056_004_8, 'points']}]);
});
