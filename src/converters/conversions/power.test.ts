import {describe} from 'vitest';
import {assertConversions} from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{from: [1, 'kW'], to: [1000, 'watts']}]);

	assertConversions([{from: [1, 'hp'], to: [745.699_872, 'watts']}]);
});
