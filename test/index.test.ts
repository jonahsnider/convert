import {convert} from '../src';

describe('index', () => {
	it('converts time', () => {
		expect(
			convert(1)
				.from('second')
				.to('second')
		).toBe(1);
		expect(
			convert(1)
				.from('century')
				.to('second')
		).toBe(3.1556952 * 1e9);
		expect(
			convert(60)
				.from('second')
				.to('minute')
		).toBe(1);
		expect(
			convert(1)
				.from('day')
				.to('second')
		).toBe(86400);
		expect(
			convert(1)
				.from('week')
				.to('second')
		).toBe(604800);
		expect(
			convert(1)
				.from('year')
				.to('second')
		).toBe(31.536 * 1e6);
	});

	it('supports `BigInt`s', () => {
		expect(
			convert(BigInt(2))
				.from('minute')
				.to('second')
		).toBe(BigInt(120));
	});

	it('throws when appropriate', () => {
		expect(() =>
			convert(60)
				.from('second')
				.to('not a real value')
		).toThrow();
		expect(() =>
			convert(60)
				.from('not a real value')
				.to('minute')
		).toThrow();
	});
});
