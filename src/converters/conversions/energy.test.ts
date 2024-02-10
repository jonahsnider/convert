import {describe} from 'vitest';
import {assertConversions} from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([{from: [1, 'kWh'], to: [60 * 60 * 1000, 'joules']}]);
	assertConversions([{from: [1000, 'J'], to: [1, 'kilojoule']}]);
});
