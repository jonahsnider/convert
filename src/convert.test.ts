import test from 'ava';
import defaultExport, {convert} from '.';
import * as macros from './test/macros';

const invalidUnit = 'not a valid unit';

test('exports', t => {
	t.is(defaultExport, convert);
});

test('production errors', t => {
	__DEV__ = false;

	t.throws(() => convert(123, invalidUnit as any), {instanceOf: RangeError, message: ''});
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
		{instanceOf: RangeError, message: ''}
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
			convert(123, 'ms')
				// @ts-expect-error
				.to('km'),
		{instanceOf: RangeError, message: /not minutes.+min/i}
	);

	t.throws(
		() =>
			convert(1000, 'ms')
				// @ts-expect-error
				.to('meters'),
		{instanceOf: RangeError, message: /.+/}
	);

	t.throws(() => convert(1000n, 'ms').to('seconds'), {instanceOf: TypeError, message: /conversion.+integer/i});
});

test(macros.convert, [1, 'second'], [1, 'second']);
test(macros.convert, [2n, 'hours'], [120n, 'minute']);

convert(100, 'm').to('s');
convert(100, 's').to('m');
