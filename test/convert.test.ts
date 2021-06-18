import {convert} from '../src/convert';

describe('convert', () => {
	it("doesn't convert when not necessary", () => {
		expect(convert(1, 'second').to('second')).toBe(1);
	});

	it('supports `BigInt`s', () => expect(convert(BigInt(2), 'hour').to('minute')).toBe(BigInt(120)));

	it('throws when appropriate', () => {
		expect(() => convert(60, 'second').to('kilogram' as any)).toThrow();

		expect(() => convert(60, 'kilogram').to('minute' as any)).toThrow();

		expect(() => convert(1, 'not a unit' as any).to('also not a unit' as any)).toThrow();

		expect(() => convert(BigInt(1), 'grams').to('kilogram')).toThrow("Conversion for grams to kilogram can't be expressed as an integer");

		expect(() => {
			// @ts-expect-error
			global.__DEV__ = false;
			convert(BigInt(1), 'grams').to('kilogram');
		}).toThrow('The number 0.001 cannot be converted to a BigInt because it is not an integer');
	});

	it('handles converting units that are special keys', () => {
		const units = [
			['__proto__', '__proto__'],
			['constructor', 'constructor'],

			['constructor', '__proto__'],
			['__proto__', 'constructor'],

			['seconds', 'constructor'],
			['seconds', '__proto__'],

			['__proto__', 'seconds'],
			['constructor', 'seconds']
		] as const;

		for (const [a, b] of units) {
			const fn = () => convert(1, a as any).to(b as any);

			// @ts-expect-error
			global.__DEV__ = false;
			expect(fn).toThrow("Cannot read property '0' of undefined");

			// @ts-expect-error
			global.__DEV__ = true;
			expect(fn).toThrow(/is not a valid unit$/i);
		}
	});
});
