import {describe} from 'vitest';
import {assertConversions} from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{from: [360, 'degrees'], to: [Math.PI * 2, 'radians']},
		{from: [1, 'gradian'], to: [1 / 400, 'turns']},
	]);
});
