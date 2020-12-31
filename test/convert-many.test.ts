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

		expect(() => {
			// @ts-expect-error
			global.__DEV__ = false;

			convertMany('1year2bytes').to('seconds');
		}).toThrow('');

		expect(() => {
			// @ts-expect-error
			global.__DEV__ = true;

			convertMany('1min 2hours').to('seconds');
			convertMany('1min2km').to('seconds');
		}).toThrow("Couldn't convert km to seconds");
	});
});
