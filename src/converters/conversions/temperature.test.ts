import { describe, test, expect } from 'vitest';
import { assertConversions } from '../../../test/assert-conversion';
import { Temperature } from '../../types/units.js';
import { convert } from '../convert.js';

describe('conversions', () => {
	assertConversions([
		{ from: [100, 'C'], to: [373.15, 'K'] },
		{ from: [212, 'F'], to: [100, 'C'] },
		{ from: [100, 'C'], to: [212, 'F'] },

		{ from: [1391.67, 'R'], to: [932, 'F'] },
		{ from: [932, 'F'], to: [1391.67, 'R'] },

		// { from: [1n, 'C'], to: [1n, 'C'] },
		// { from: [1n, 'F'], to: [1n, 'F'] },
		// { from: [1n, 'R'], to: [1n, 'R'] },
		// { from: [1n, 'K'], to: [1n, 'K'] },
	]);
});

describe('prevent converting bigints with differences', () => {
	test('strict error assertions', () => {
		expect(() => convert(1n, 'C').to('K')).toThrowErrorMatchingInlineSnapshot(
			`[RangeError: Conversion for C to K cannot be calculated as C has a conversion difference which cannot be expressed with bigints]`,
		);
		expect(() => convert(1n, 'K').to('C')).toThrowErrorMatchingInlineSnapshot(
			`[RangeError: Conversion for K to C cannot be calculated as K has a conversion difference which cannot be expressed with bigints]`,
		);

		expect(() => convert(1n, 'celsius').to('K')).toThrowErrorMatchingInlineSnapshot(
			`[RangeError: Conversion for celsius to K cannot be calculated as celsius has a conversion difference which cannot be expressed with bigints]`,
		);
		expect(() => convert(1n, 'K').to('celsius')).toThrowErrorMatchingInlineSnapshot(
			`[RangeError: Conversion for K to celsius cannot be calculated as K has a conversion difference which cannot be expressed with bigints]`,
		);
	});
});
