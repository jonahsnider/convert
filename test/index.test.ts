import {convert} from '../src';

describe('index', () => {
	it('converts time', () => {
		expect(
			convert(1)
				.from('seconds')
				.to('seconds')
		).toBe(1);
		expect(
			convert(60)
				.from('seconds')
				.to('minutes')
		).toBe(1);
	});
	it('supports `BigInt`s', () => {
		expect(
			convert(BigInt(2))
				.from('minutes')
				.to('seconds')
		).toBe(BigInt(120));
	});

	it('throws when appropriate', () => {
		expect(() =>
			convert(60)
				.from('seconds')
				.to('not a real value')
		).toThrow();
		expect(() =>
			convert(60)
				.from('not a real value')
				.to('minutes')
		).toThrow();
	});
});
