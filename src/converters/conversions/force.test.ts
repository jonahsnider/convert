import { describe, expect, test } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';
import { convert } from '../convert.ts';

describe('conversions', () => {
	// 1 lbf = 0.45359237 kg × 9.80665 m/s² and 1 pdl = 0.45359237 kg × 0.3048 m/s², exactly
	assertConversions([
		{ from: [1, 'lbf'], to: [4.448_221_615_260_5, 'N'] },
		{ from: [1, 'kip'], to: [4448.221_615_260_5, 'N'] },
		{ from: [1, 'pdl'], to: [0.138_254_954_376, 'N'] },
	]);

	test('1 lbf is 0.45359237 kgf', () => {
		expect(convert(1, 'lbf').to('kgf')).toBeCloseTo(0.453_592_37, 15);
	});

	test('1 lbf is g₀ / 1 ft/s² poundals', () => {
		expect(convert(1, 'lbf').to('pdl')).toBeCloseTo(9.806_65 / 0.3048, 13);
	});
});
