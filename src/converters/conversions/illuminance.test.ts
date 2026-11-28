import { describe, expect, test } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion.ts';
import { convert } from '../convert.ts';

describe('conversions', () => {
	assertConversions([
		{ from: [1, 'lux'], to: [1, 'lm/m2'] },
		{ from: [1, 'ph'], to: [10_000, 'lx'] },
		{ from: [1, 'fc'], to: [10.764, 'lx'] },
		{ from: [1, 'klx'], to: [1000, 'lx'] },
		{ from: [1000, 'mlx'], to: [1, 'lx'] },
	]);
});

test('best units', () => {
	expect(convert(5, 'lux').to('best').toString()).toBe('5 lux');
	expect(convert(5000, 'lux').to('best').toString()).toBe('5 klx');
	expect(convert(0.005, 'lux').to('best').toString()).toBe('5000 µlx');
	expect(convert(0.000_005, 'lux').to('best').toString()).toBe('5 µlx');
	expect(convert(0.000_000_5, 'lux').to('best').toString(0)).toBe('500 nlx');
});
