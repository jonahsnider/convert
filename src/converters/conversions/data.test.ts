import { describe } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'bit'], to: [0.001, 'kb'] },
		{ from: [1, 'kilobit'], to: [0.001, 'Mb'] },
	]);
});
