import { describe, expect, test } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';
import { convert } from '../convert';

describe('conversions', () => {
	assertConversions([
		{ from: [100, 'C'], to: [373.15, 'K'] },
		{ from: [212, 'F'], to: [100.00000000000006, 'C'] },
		{ from: [100, 'C'], to: [211.99999999999983, 'F'] },

		{ from: [1391.67, 'R'], to: [932, 'F'] },
		{ from: [932, 'F'], to: [1391.67, 'R'] },

		{ from: [1n, 'C'], to: [1n, 'C'] },
		{ from: [1n, '°C'], to: [1n, '°C'] },
		{ from: [1n, '°C'], to: [1n, 'C'] },
		{ from: [1n, 'C'], to: [1n, '°C'] },
		// Converting fahrenheit or rankine fails with bigints, so they are omitted
		{ from: [1n, 'K'], to: [1n, 'K'] },
	]);
});

describe('prevent converting bigints with differences', () => {
	test('strict error assertions', () => {
		expect(() => convert(1n, 'C').to('K')).toThrowErrorMatchingInlineSnapshot(
			'[RangeError: Conversion for C to K cannot be calculated as one of the units has a conversion difference which cannot be expressed with bigints]',
		);
		expect(() => convert(1n, 'K').to('C')).toThrowErrorMatchingInlineSnapshot(
			'[RangeError: Conversion for K to C cannot be calculated as one of the units has a conversion difference which cannot be expressed with bigints]',
		);

		expect(() => convert(1n, 'celsius').to('K')).toThrowErrorMatchingInlineSnapshot(
			'[RangeError: Conversion for celsius to K cannot be calculated as one of the units has a conversion difference which cannot be expressed with bigints]',
		);
		expect(() => convert(1n, 'K').to('celsius')).toThrowErrorMatchingInlineSnapshot(
			'[RangeError: Conversion for K to celsius cannot be calculated as one of the units has a conversion difference which cannot be expressed with bigints]',
		);
	});
});
