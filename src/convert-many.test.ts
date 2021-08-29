import test from 'ava';
import {convertMany} from './';
import * as macros from './test/macros';

const invalidValue = 'not a valid value';
const invalidUnit = 'not a valid unit';

test('production errors', t => {
	__DEV__ = false;

	t.throws(() => convertMany(invalidValue), {instanceOf: RangeError, message: /value did not match expression \/.+\//i});
	t.throws(
		() =>
			convertMany('1000ms')
				// @ts-expect-error
				.to(invalidUnit),
		{instanceOf: TypeError}
	);
});

test('development errors', t => {
	__DEV__ = true;

	t.throws(() => convertMany(invalidValue), {instanceOf: RangeError, message: /.+/});
	t.throws(
		() =>
			convertMany('1000ms')
				// @ts-expect-error
				.to(invalidUnit),
		{instanceOf: RangeError, message: /.+/}
	);
});

test(macros.convertMany, '1min 30s', [90, 'seconds']);
test(macros.convertMany, '51h 13min 56s', [51 + 13 / 60 + 56 / 60 / 60, 'hours']);
test(macros.convertMany, '51h 13min 56s', [51 + 13 / 60 + 56 / 60 / 60, 'h']);
test(macros.convertMany, '1m3', [1, 'm3']);

test(macros.convertMany, '.1km', [0.1, 'km']);
test(macros.convertMany, '-.1km', [-0.1, 'km']);
test(macros.convertMany, '-1km', [-1, 'km']);
test(macros.convertMany, '0.1km', [0.1, 'km']);
test(macros.convertMany, '-0.1km', [-0.1, 'km']);

// TODO: Failing from ambiguous units
test.failing(macros.convertManyBest, '500m 3km', [3.5, 'km']);

test(macros.ms, '1s', 1000);
test(macros.ms, '1d', 86_400_000);
test(macros.ms, '1d 24h', 86_400_000 * 2);
