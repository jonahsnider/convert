import { describe, expect } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';
import type { Length, Time } from '../../types/units';
import { convert } from '../convert';

describe('special case for m', () => {
	assertConversions([{ from: [1, 'm'], to: [1, 'm'] }]);

	assertConversions([{ from: [1, 'm'], to: [60, 's'] }]);
	assertConversions([{ from: [60, 's'], to: [1, 'm'] }]);
	assertConversions([{ from: [1, 'm'], to: [1 / 1000, 'km'] }]);

	// Compilation tests
	convert(1, 'm').to('s');
	convert(60, 's').to('m');

	const best1m: `${number} ${Length}` = convert(1, 'm').to('best').toString();
	const best60s: `${number} ${Time}` = convert(1, 'min').to('best').toString();

	expect(best1m).toBe('1 m');
	expect(best60s).toBe('60 s');
});
