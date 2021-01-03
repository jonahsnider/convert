import {convert} from '../../src';
import {convertAssert} from '../util';

describe('data', () => {
	it('converts bytes', () => expect(convert(8).from('bits').to('bytes')).toBe(1));

	it('converts bytes in production mode', () => {
		// @ts-expect-error
		global.__DEV__ = false;

		expect(convert(8).from('bits').to('bytes')).toBe(1);
	});

	it('converts bytes in dev mode', () => {
		// @ts-expect-error
		global.__DEV__ = true;

		expect(convert(8).from('bits').to('bytes')).toBe(1);
	});

	it('converts millibits', () => expect(convert(1_000).from('millibits').to('bits')).toBe(1));

	convertAssert(1, 'nibble', 2 ** 2, 'bits');

	convertAssert(1, 'byte', 2 ** 3, 'bits');

	convertAssert(1, 'decabit', 10, 'bits');

	convertAssert(1, 'hectobit', 1e2, 'bits');

	convertAssert(1, 'kilobit', 1e3, 'bits');
	convertAssert(1, 'kibibit', 2 ** 10, 'bits');
	convertAssert(1, 'kilobyte', 8e3, 'bits');
	convertAssert(1, 'kibibyte', 2 ** 13, 'bits');

	convertAssert(1, 'megabit', 1e6, 'bits');
	convertAssert(1, 'mebibit', 2 ** 20, 'bits');
	convertAssert(1, 'megabyte', 8e6, 'bits');
	convertAssert(1, 'mebibyte', 2 ** 23, 'bits');

	convertAssert(1, 'gigabit', 1e9, 'bits');
	convertAssert(1, 'gibibit', 2 ** 30, 'bits');
	convertAssert(1, 'gigabyte', 8e9, 'bits');
	convertAssert(1, 'gibibyte', 2 ** 33, 'bits');

	convertAssert(1, 'terabit', 1e12, 'bits');
	convertAssert(1, 'tebibit', 2 ** 40, 'bits');
	convertAssert(1, 'terabyte', 8e12, 'bits');
	convertAssert(1, 'tebibyte', 2 ** 43, 'bits');

	convertAssert(1, 'petabit', 1e15, 'bits');
	convertAssert(1, 'pebibit', 2 ** 50, 'bits');
	convertAssert(1, 'petabyte', 8e15, 'bits');
	convertAssert(1, 'pebibyte', 2 ** 53, 'bits');
});
