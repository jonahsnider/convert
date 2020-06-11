import {convert} from '../../src';

describe('time', () => {
	it('converts centuries', () =>
		expect(
			convert(1)
				.from('century')
				.to('second')
		).toBe(3.1556952e9));

	it('converts days', () =>
		expect(
			convert(1)
				.from('day')
				.to('second')
		).toBe(86400));

	it('converts decades', () =>
		expect(
			convert(1)
				.from('decade')
				.to('second')
		).toBe(315.56952e6));

	it('converts fortnights', () =>
		expect(
			convert(1)
				.from('fortnight')
				.to('second')
		).toBe(1.2096e6));

	it('converts decades', () =>
		expect(
			convert(1)
				.from('decade')
				.to('second')
		).toBe(315.56952e6));

	it('converts halakim', () =>
		expect(
			convert(1)
				.from('helek')
				.to('second')
		).toBe(3 + 1 / 3));

	it('converts hours', () =>
		expect(
			convert(1)
				.from('hour')
				.to('second')
		).toBe(60 * 60));

	it('converts jiffies', () =>
		expect(
			convert(1)
				.from('jiffy')
				.to('second')
		).toBe(1 / 60));

	it('converts jiffies (alternative)', () =>
		expect(
			convert(1)
				.from('ja')
				.to('second')
		).toBe(1 / 100));

	it('converts ke (what is the plural of this)', () =>
		expect(
			convert(1)
				.from('ke')
				.to('second')
		).toBe(900));

	it('converts millennia', () =>
		expect(
			convert(1)
				.from('millennium')
				.to('second')
			// Floating point math is hard
			// TODO: We should have a better way of handling problems that occur with very precise numbers like this
			// In a perfect world the output would be 31556952000
			// In reality it's                        31556951999.999996
		).toBeCloseTo(31.556952e9));

	it('converts minutes', () =>
		expect(
			convert(1)
				.from('minute')
				.to('second')
		).toBe(60));

	it('converts moments', () =>
		expect(
			convert(1)
				.from('moment')
				.to('second')
		).toBe(90));
});
