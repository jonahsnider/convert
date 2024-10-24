import { describe, expect } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';
import { convert } from '../convert';

describe('conversions', () => {
	assertConversions([{ from: [1, 'kWh'], to: [60 * 60 * 1000, 'joules'] }]);
	assertConversions([{ from: [1000, 'J'], to: [1, 'kilojoule'] }]);
	assertConversions([{ from: [1000000, 'kWh'], to: [1, 'GWh'] }]);

	// biome-ignore lint/style/useNamingConvention: This is in camelcase
	const best1GWh = convert(1000000, 'kWh').to('best').toString();
	const best1Wh = convert(3600, 'J').to('best').toString();

	expect(best1GWh).toBe('1 GWh');
	expect(best1Wh).toBe('1 Wh');
});
