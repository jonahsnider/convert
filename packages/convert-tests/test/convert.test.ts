import {stddev} from '@jonahsnider/util';
import test from 'ava';
import {conversions} from 'bundled-conversions';
import {Indexes} from 'optimized-conversions';
import type {Unit} from 'convert';
import {dev, prod} from './util/convert.js';
import * as macros from './util/macros.js';

const invalidUnit = 'not a valid unit';

test('exports', t => {
	t.is(dev.default, dev.convert);
	t.is(prod.default, prod.convert);
});

test('production errors', t => {
	t.throws(() => prod.convert('123' as any, 'meters'), {instanceOf: TypeError, message: ''}, 'quantity type');

	t.throws(() => prod.convert(123, invalidUnit as any), {instanceOf: RangeError, message: ''});
	t.throws(
		() =>
			prod
				.convert(123, 'ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		{instanceOf: TypeError},
	);

	t.throws(
		() =>
			prod
				.convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to('meters'),
		{instanceOf: RangeError, message: ''},
	);

	t.throws(() => prod.convert(1000n, 'ms').to('seconds'), {
		instanceOf: RangeError,
		message: /the number \d+\.\d+ cannot be converted to a bigint because it is not an integer/i,
	});

	t.throws(
		() =>
			prod.convert(123, 'in').to(
				'best',
				// @ts-expect-error Invalid best kind
				'invalid',
			),
		{instanceOf: RangeError, message: ''},
		'invalid best unit kind',
	);
});

test('development errors', t => {
	t.throws(() => dev.convert('123' as any, 'meters'), {instanceOf: TypeError, message: /.+/}, 'quantity type');

	t.throws(() => dev.convert(123, invalidUnit as any), {instanceOf: RangeError, message: /.+/});
	t.throws(
		() =>
			dev
				.convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		{instanceOf: RangeError, message: /.+/},
	);

	t.throws(
		() =>
			dev
				.convert(123, 'ms')
				// @ts-expect-error Invalid unit
				.to('m'),
		{instanceOf: RangeError, message: /not minutes.+min/i},
	);

	t.throws(
		() =>
			dev
				.convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to('meters'),
		{instanceOf: RangeError, message: /.+/},
	);

	t.throws(() => dev.convert(1000n, 'ms').to('seconds'), {instanceOf: TypeError, message: /conversion.+integer/i});

	t.throws(
		() =>
			dev.convert(123, 'in').to(
				'best',
				// @ts-expect-error Invalid best kind
				'invalid',
			),
		{instanceOf: RangeError, message: /.+/},
		'invalid best unit kind',
	);
});

test(macros.convert, [1, 'second'], [1, 'second']);
test(macros.convert, [2n, 'hours'], [120n, 'minute']);

const baseUnits: Unit[] = ['m2', 'b', 'B', 'N', 'pdl', 'm', 'g', 'Pa', 'K', 's', 'm3'];

test('roundtrip conversion', t => {
	for (const baseUnit of baseUnits) {
		// The plugin is bugged, see https://github.com/xojs/eslint-config-xo-typescript/issues/49
		// eslint-disable-next-line import/namespace
		const desiredFamilyId = conversions[baseUnit][Indexes.Conversion.Family];

		for (const [unit, data] of Object.entries(conversions)) {
			if (!data) {
				continue;
			}

			// The plugin is bugged, see https://github.com/xojs/eslint-config-xo-typescript/issues/49
			// eslint-disable-next-line import/namespace
			const familyId = data[Indexes.Conversion.Family];

			if (familyId !== desiredFamilyId) {
				continue;
			}

			const value = 123;

			const aToB = prod.convert(value, baseUnit as any).to(unit as any) as unknown as number;
			const bToA = prod.convert(aToB, unit as any).to(baseUnit as any) as unknown as number;

			const difference = stddev([value, bToA]);

			if (difference !== 0) {
				// Not sure exactly why this value keeps showing up
				t.is(difference, Number.EPSILON * 64, `${baseUnit} <-> ${unit}`);
			}
		}
	}
});
