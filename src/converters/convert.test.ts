import { describe, expect, test } from 'vitest';
import { convert } from './convert.js';

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
		expect(result.toString()).toMatchInlineSnapshot(`"1.5d"`);
	});

	describe('with rounding', () => {
		test('works when removing decimal places', () => {
			expect(convert(123_456, 'm').to('best').toString(2)).toMatchInlineSnapshot(`"123.46km"`);
			expect(convert(123_456, 'm').to('best').toString(0)).toMatchInlineSnapshot(`"123km"`);
			expect(convert(1000, 'micrometer').to('best').toString(1)).toMatchInlineSnapshot(`"1.0mm"`);
			expect(convert(1000, 'micrometer').to('best').toString(0)).toMatchInlineSnapshot(`"1mm"`);
		});

		test('works when adding decimal places', () => {
			expect(convert(1000, 'm').to('best').toString(4)).toMatchInlineSnapshot(`"1.0000km"`);
			expect(convert(1000, 'm').to('best').toString(0)).toMatchInlineSnapshot(`"1km"`);
			expect(convert(1000, 'micrometer').to('best').toString(4)).toMatchInlineSnapshot(`"1.0000mm"`);
			expect(convert(1000, 'micrometer').to('best').toString(0)).toMatchInlineSnapshot(`"1mm"`);
		});

		test('does nothing when omitted', () => {
			expect(convert(123_456, 'm').to('best').toString()).toMatchInlineSnapshot(`"123.456km"`);
			expect(convert(123_456, 'm').to('best').toString(undefined)).toMatchInlineSnapshot(`"123.456km"`);
			expect(convert(1000, 'micrometer').to('best').toString()).toMatchInlineSnapshot(`"1mm"`);
			expect(convert(1000, 'micrometer').to('best').toString(undefined)).toMatchInlineSnapshot(`"1mm"`);
		});
	});

	test('works with metric', () => {
		expect(convert(0.001, 'days').to('best', 'metric').toString()).toMatchInlineSnapshot(`"1.44min"`);
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
