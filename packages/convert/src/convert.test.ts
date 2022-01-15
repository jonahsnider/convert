import {stddev} from '@jonahsnider/util';
import {conversions} from 'bundled-conversions';
import type {Indexes} from 'optimized-conversions';
import {prod, dev} from '../test/convert';
import {assertConversions} from '../test/assert-conversion';
import {testWithBuilds} from '../test/with-builds';
import type {Unit} from './index';

const invalidUnit = 'not a valid unit';

/**
 * Manually defining this value is required instead of using `Indexes.Conversion.Family`.
 * This is because either Jest's custom module resolver, their Babel setup, or a mix of both doesn't properly handle the `const enum`s.
 * Instead of magically using the TypeScript source to get the enum values it uses the emitted code, which is undefined.
 *
 * The long-term solution to this is to simply stop using `const enum`s when exporting across package boundaries.
 * Unfortunately, Terser doesn't constant-fold the emitted 2-way lookup table that TypeScript emits for `enum` expressions.
 * A feature request for this has been opened on the Terser repository: https://github.com/terser/terser/issues/1064.
 */
const INDEXES_CONVERSION_FAMILY: Indexes.Conversion.Family = 0;

describe('errors', () => {
	describe('production', () => {
		test('quantity type', () => {
			expect(() => prod.convert('123' as any, 'meters')).toThrow(new TypeError(''));
		});

		expect(() => prod.convert(123, invalidUnit as any)).toThrow(new RangeError(''));

		expect(() =>
			prod
				.convert(123, 'ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		).toThrow(TypeError);

		expect(() =>
			prod
				.convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to('meters'),
		).toThrow(new RangeError(''));

		expect(() => prod.convert(1000n, 'ms').to('seconds')).toThrow(
			new RangeError('The number 0.001 cannot be converted to a BigInt because it is not an integer'),
		);

		test('invalid best unit kind', () => {
			expect(() =>
				prod.convert(123, 'in').to(
					'best',
					// @ts-expect-error Invalid best kind
					'invalid',
				),
			).toThrow(new RangeError(''));
		});
	});

	describe('development', () => {
		test.each([
			// Quantity type
			{fn: () => dev.convert('123' as any, 'meters'), error: TypeError},

			{fn: () => dev.convert(123, invalidUnit as any), error: RangeError},
			{
				fn: () =>
					dev
						.convert(1000, 'ms')
						// @ts-expect-error Invalid unit
						.to(invalidUnit),
				error: RangeError,
			},

			{
				fn: () =>
					dev
						.convert(1000, 'ms')
						// @ts-expect-error Invalid unit
						.to('meters'),
				error: RangeError,
			},

			// Invalid best unit kind
			{
				fn: () =>
					dev.convert(123, 'in').to(
						'best',
						// @ts-expect-error Invalid best kind
						'invalid',
					),
				error: RangeError,
			},
		])('%p', ({fn, error}) => {
			expect(fn).toThrow(error);
			expect(fn).toThrow(/.+/);
		});

		expect(() =>
			dev
				.convert(123, 'ms')
				// @ts-expect-error Invalid unit
				.to('m'),
		).toThrow(
			new RangeError(
				'No conversion could be found from ms to m. Also, are you trying to convert quantities of time? Because "m" is treated as meters, not minutes. You probably want to use the "min" unit instead.',
			),
		);

		expect(() => dev.convert(1000n, 'ms').to('seconds')).toThrow(
			new RangeError('Conversion for ms to seconds cannot be calculated as a BigInt because the conversion ratio is not an integer'),
		);
	});
});

assertConversions([
	{from: [1, 'second'], to: [1, 'second']},
	{from: [2n, 'hours'], to: [120n, 'minute']},
]);

describe('roundtrip conversion', () => {
	describe.each<Unit>(['m2', 'b', 'B', 'N', 'pdl', 'm', 'g', 'Pa', 'K', 's', 'm3'])('%p', baseUnit => {
		const desiredFamilyId = conversions[baseUnit][INDEXES_CONVERSION_FAMILY];

		test.each(Object.entries(conversions))(`${baseUnit} <-> $0`, (unit, data) => {
			if (!data) {
				return;
			}

			const familyId = data[INDEXES_CONVERSION_FAMILY];

			if (familyId !== desiredFamilyId) {
				return;
			}

			const value = 123;

			const aToB = prod.convert(value, baseUnit as any).to(unit as any) as unknown as number;
			const bToA = prod.convert(aToB, unit as any).to(baseUnit as any) as unknown as number;

			const difference = stddev([value, bToA]);

			if (difference !== 0) {
				// Not sure exactly why this value keeps showing up
				expect(difference).toBe(Number.EPSILON * 64);
			}
		});
	});
});

describe('precision loss from converting to best', () => {
	assertConversions([{from: [1.5, 'days'], to: [1.5, 'd']}]);

	testWithBuilds(mod => {
		const result = mod.convert(1.5, 'days').to('best');

		expect(result.unit).toBe('d');

		// TODO: Fix this
		expect(result.quantity).not.toBe(1.5);
		expect(result.toString()).not.toBe('1.5d');

		expect(result.quantity).toBe(1.5 + Number.EPSILON);
		expect(result.toString()).toBe(`${1.5 + Number.EPSILON}d`);
	});
});
