import {stddev} from '@jonahsnider/util';
import test from 'ava';
import {ConversionIndex} from './dev/types/generated.js';
import {conversions} from './generated/generated.js';
import * as macros from './test/macros.js';
import defaultExport, {convert} from './index.js';
import type {Unit} from './index.js';

const invalidUnit = 'not a valid unit';

test('exports', t => {
	t.is(defaultExport, convert);
});

test('production errors', t => {
	__DEV__ = false;

	t.throws(() => convert('123' as any, 'meters'), {instanceOf: TypeError, message: ''}, 'quantity type');

	t.throws(() => convert(123, invalidUnit as any), {instanceOf: RangeError, message: ''});
	t.throws(
		() =>
			convert(123, 'ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		{instanceOf: TypeError},
	);

	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to('meters'),
		{instanceOf: RangeError, message: ''},
	);

	t.throws(() => convert(1000n, 'ms').to('seconds'), {
		instanceOf: RangeError,
		message: /the number \d+\.\d+ cannot be converted to a bigint because it is not an integer/i,
	});

	t.throws(
		() =>
			convert(123, 'in').to(
				'best',
				// @ts-expect-error Invalid best kind
				'invalid',
			),
		{instanceOf: RangeError, message: ''},
		'invalid best unit kind',
	);
});

test('development errors', t => {
	__DEV__ = true;

	t.throws(() => convert('123' as any, 'meters'), {instanceOf: TypeError, message: /.+/}, 'quantity type');

	t.throws(() => convert(123, invalidUnit as any), {instanceOf: RangeError, message: /.+/});
	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		{instanceOf: RangeError, message: /.+/},
	);

	t.throws(
		() =>
			convert(123, 'ms')
				// @ts-expect-error Invalid unit
				.to('m'),
		{instanceOf: RangeError, message: /not minutes.+min/i},
	);

	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error Invalid unit
				.to('meters'),
		{instanceOf: RangeError, message: /.+/},
	);

	t.throws(() => convert(1000n, 'ms').to('seconds'), {instanceOf: TypeError, message: /conversion.+integer/i});

	t.throws(
		() =>
			convert(123, 'in').to(
				'best',
				// @ts-expect-error Invalid unit
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
		const desiredFamilyId = conversions[baseUnit][ConversionIndex.Family];

		for (const [unit, data] of Object.entries(conversions)) {
			if (!data) {
				continue;
			}

			const familyId = data[ConversionIndex.Family];

			if (familyId !== desiredFamilyId) {
				continue;
			}

			const value = 123;

			const aToB = convert(value, baseUnit as any).to(unit as any) as unknown as number;
			const bToA = convert(aToB as any, unit as any).to(baseUnit as any) as unknown as number;

			const difference = stddev([value, bToA]);

			if (difference !== 0) {
				// Not sure exactly why this value keeps showing up
				t.is(difference, Number.EPSILON * 64, `${baseUnit} <-> ${unit}`);
			}
		}
	}
});
