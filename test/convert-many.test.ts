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
		expect(() => convertMany('1F 2s').to('seconds')).toThrow();
	});
});
