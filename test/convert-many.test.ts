import {convertMany} from '../src/';

describe('convertMany', () => {
	it('combines several units', () => {
		expect(convertMany('1min 30s').to('second')).toBe(90);
	});

	it("doesn't convert when not necessary", () => {
		expect(convertMany('1min').to('second')).toBe(60);
	});

	it('throws when appropriate', () => {
		expect(() => convertMany('invalid')).toThrow();
		expect(() => convertMany('1km 2s').to('seconds')).toThrow();

		// @ts-expect-error
		global.__DEV__ = true;
		expect(() => convertMany('1year2bytes').to('seconds')).toThrow("Couldn't convert bytes to seconds");
		// @ts-expect-error
		global.__DEV__ = false;
		expect(() => convertMany('1year2bytes').to('seconds')).toThrow('');
	});
});
