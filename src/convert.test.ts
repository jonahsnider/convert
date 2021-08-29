import test from 'ava';
import defaultExport, {convert} from '.';
import * as macros from './test/macros';

const invalidUnit = 'not a valid unit';

test('exports', t => {
	t.is(defaultExport, convert);
});

test('production errors', t => {
	__DEV__ = false;

	t.throws(
		() => convert(123, invalidUnit as any),
		{instanceOf: RangeError, message: `${invalidUnit} is not a valid unit`},
		'early error if from unit is invalid'
	);

	t.throws(
		() =>
			convert(123, 'ms')
				// @ts-expect-error
				.to(invalidUnit),
		{instanceOf: TypeError}
	);

	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error
				.to('meters'),
		{instanceOf: TypeError},
		'error if units are not in the same family'
	);

	t.throws(() => convert(1000n, 'ms').to('seconds'), {
		instanceOf: RangeError,
		message: /the number \d+\.\d+ cannot be converted to a bigint because it is not an integer/i
	});
});

test('development errors', t => {
	__DEV__ = true;

	t.throws(() => convert(123, invalidUnit as any), {instanceOf: RangeError, message: /.+/});
	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error
				.to(invalidUnit),
		{instanceOf: RangeError, message: /.+/}
	);

	t.throws(
		() =>
			convert(1000, 'meters')
				// @ts-expect-error
				.to('ms'),
		{instanceOf: RangeError, message: /ms belongs to a different unit family/i}
	);

	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error
				.to('meters'),
		{instanceOf: RangeError, message: /meters belongs to a different unit family/i}
	);

	t.throws(() => convert(1000n, 'ms').to('seconds'), {instanceOf: TypeError, message: /conversion.+integer/i});
});

test(macros.convert, [1, 'second'], [1, 'second']);
test(macros.convert, [2n, 'hours'], [120n, 'minute']);

convert(1, 'm').to('second');
convert(1, 'second').to('m');
convert(1, 'm').to('kilometer');
convert(1, 'kilometer').to('m');

convert(1, 'a').to('square kilometer');
convert(1, 'square kilometer').to('a');
convert(1, 'a').to('minute');
convert(1, 'minute').to('a');

convert(1, 'c').to('liter');
convert(1, 'liter').to('c');
convert(1, 'c').to('year');
convert(1, 'year').to('c');
