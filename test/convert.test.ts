import {convert} from '../src/convert';

describe('convert', () => {
	it("doesn't convert when not necessary", () => {
		expect(convert(1).from('second').to('second')).toBe(1);
	});

	it('supports `BigInt`s', () => expect(convert(BigInt(2)).from('hour').to('minute')).toBe(BigInt(120)));

	it('throws when appropriate', () => {
		// @ts-expect-error
		expect(() => convert(60).from('second').to('kilogram')).toThrow(/invariant/i);

		// @ts-expect-error
		expect(() => convert(60).from('kilogram').to('minute')).toThrow(/invariant/i);
	});
});
