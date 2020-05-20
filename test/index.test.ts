import {convert} from '../src';

describe('convert', () => {
	it("doesn't convert when not necessary", () => {
		expect(
			convert(1)
				.from('second')
				.to('second')
		).toBe(1);
	});

	it('supports `BigInt`s', () =>
		expect(
			convert(BigInt(1))
				.from('minute')
				.to('second')
		).toBe(BigInt(60)));

	it('throws when appropriate', () => {
		expect(() =>
			convert(60)
				.from('second')
				// @ts-expect-error
				.to('not a real value')
		).toThrow();

		expect(() =>
			convert(60)
				// @ts-expect-error
				.from('not a real value')
				.to('minute')
		).toThrow();
	});
});
