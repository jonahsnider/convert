import { describe, expect, expectTypeOf, test } from 'vitest';
import { convert } from './convert.ts';

test('basic conversions', () => {
	expect(convert(1, 'm').to('cm')).toBe(100);
	expect(convert(1, 's').to('s')).toBe(1);
});

test('bigints', () => {
	expect(convert(2n, 'hours').to('minute')).toBe(120n);
});

describe('best conversions', () => {
	test('basic functionality', () => {
		const result = convert(1.5, 'days').to('best');

		expect(result.unit).toBe('d');

		expect(result.quantity).toMatchInlineSnapshot('1.5');
		expect(result.toString()).toMatchInlineSnapshot(`"1.5 d"`);
	});

	describe('with rounding', () => {
		test('works when removing decimal places', () => {
			expect(convert(123_456, 'm').to('best').toString(2)).toMatchInlineSnapshot(`"123.46 km"`);
			expect(convert(123_456, 'm').to('best').toString(0)).toMatchInlineSnapshot(`"123 km"`);
			expect(convert(1000, 'micrometer').to('best').toString(1)).toMatchInlineSnapshot(`"1.0 mm"`);
			expect(convert(1000, 'micrometer').to('best').toString(0)).toMatchInlineSnapshot(`"1 mm"`);
		});

		test('works when adding decimal places', () => {
			expect(convert(1000, 'm').to('best').toString(4)).toMatchInlineSnapshot(`"1.0000 km"`);
			expect(convert(1000, 'm').to('best').toString(0)).toMatchInlineSnapshot(`"1 km"`);
			expect(convert(1000, 'micrometer').to('best').toString(4)).toMatchInlineSnapshot(`"1.0000 mm"`);
			expect(convert(1000, 'micrometer').to('best').toString(0)).toMatchInlineSnapshot(`"1 mm"`);
		});

		test('does nothing when omitted', () => {
			expect(convert(123_456, 'm').to('best').toString()).toMatchInlineSnapshot(`"123.456 km"`);
			expect(convert(123_456, 'm').to('best').toString(undefined)).toMatchInlineSnapshot(`"123.456 km"`);
			expect(convert(1000, 'micrometer').to('best').toString()).toMatchInlineSnapshot(`"1 mm"`);
			expect(convert(1000, 'micrometer').to('best').toString(undefined)).toMatchInlineSnapshot(`"1 mm"`);
		});
	});

	test('works with metric', () => {
		expect(convert(0.001, 'days').to('best', 'metric').toString()).toMatchInlineSnapshot(`"1.44 min"`);
	});

	describe('exclude', () => {
		test('skips excluded units', () => {
			expect(convert(1200, 'm').to('best', 'imperial').unit).toBe('yd');

			const result = convert(1200, 'm').to('best', 'imperial', { exclude: ['yd'] });

			expect(result.unit).toBe('ft');
			expect(result.quantity).toBeCloseTo(3937.007_874);
		});

		test('falls back to the smallest unit that is not excluded', () => {
			expect(
				convert(5, 'mm')
					.to('best', 'metric', { exclude: ['mm'] })
					.toString(),
			).toBe('0.5 cm');
		});

		test('handles negative quantities', () => {
			expect(convert(-1200, 'm').to('best', 'imperial', { exclude: ['yd'] }).unit).toBe('ft');
		});

		test('does nothing with an empty list', () => {
			expect(convert(1200, 'm').to('best', 'imperial', { exclude: [] }).unit).toBe('yd');
		});

		test('narrows the result unit type', () => {
			const result = convert(1200, 'm').to('best', 'imperial', { exclude: ['yd'] });

			expectTypeOf(result.unit).toEqualTypeOf<'in' | 'ft' | 'mi'>();
		});

		test('only accepts best units for the measure', () => {
			convert(1200, 'm').to('best', 'imperial', {
				// @ts-expect-error Intentionally incorrect
				exclude: ['kg'],
			});
		});

		test('throws when every unit is excluded', () => {
			expect(() =>
				convert(1, 'm').to('best', 'metric', { exclude: ['mm', 'cm', 'm', 'km'] }),
			).toThrowErrorMatchingInlineSnapshot('[RangeError: All best units for m were excluded]');
		});
	});
});

test('errors', () => {
	expect(() =>
		convert(1, 'm').to(
			// @ts-expect-error Intentionally incorrect
			'kg',
		),
	).toThrowErrorMatchingInlineSnapshot('[RangeError: Cannot convert between different measures: m and kg]');
});
