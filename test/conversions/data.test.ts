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

	convertAssert(1, 'gigabyte', 8e9, 'bits');
});
