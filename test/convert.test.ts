import {convert} from '../src/convert';

describe('convert', () => {
	it("doesn't convert when not necessary", () => {
		expect(convert(1).from('second').to('second')).toBe(1);
	});

	it('supports `BigInt`s', () => expect(convert(BigInt(2)).from('hour').to('minute')).toBe(BigInt(120)));

	it('throws when appropriate', () => {
		// @ts-expect-error
		expect(() => convert(60).from('second').to('kilogram')).toThrow();

		// @ts-expect-error
		expect(() => convert(60).from('kilogram').to('minute')).toThrow();

		// @ts-expect-error
		expect(() => convert(1).from('not a unit').to('also not a unit')).toThrow();

		expect(() => convert(BigInt(1)).from('grams').to('kilogram')).toThrow("Conversion for grams to kilogram can't be expressed as an integer");

		expect(() => {
			// @ts-expect-error
			global.__DEV__ = false;
			convert(BigInt(1)).from('grams').to('kilogram');
		}).toThrow('The number 0.001 cannot be converted to a BigInt because it is not an integer');
	});
});
