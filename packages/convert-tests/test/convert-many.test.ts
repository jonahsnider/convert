import test from 'ava';
import {dev, prod} from './util/convert.js';
import * as macros from './util/macros.js';

const invalidValue = 'not a valid value';
const invalidUnit = 'not a valid unit';

test('production errors', t => {
	t.throws(() => prod.convertMany(invalidValue), {instanceOf: RangeError, message: ''});
	t.throws(
		() =>
			prod
				.convertMany('1000ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		{instanceOf: TypeError},
	);
});

test('development errors', t => {
	t.throws(() => dev.convertMany(invalidValue), {instanceOf: RangeError, message: /.+/});
	t.throws(
		() =>
			dev
				.convertMany('1000ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		{instanceOf: RangeError, message: /.+/},
	);
});

test(macros.convertMany, '1min 30s', [90, 'seconds']);
test(macros.convertMany, '51h 13min 56s', [51 + 13 / 60 + 56 / 60 / 60, 'hours']);
test(macros.convertMany, '51h 13min 56s', [51 + 13 / 60 + 56 / 60 / 60, 'h']);

test(macros.convertMany, '1m3', [1, 'm3']);

test(macros.convertMany, '.1m', [0.1, 'm']);
test(macros.convertMany, '-.1m', [-0.1, 'm']);
test(macros.convertMany, '-1m', [-1, 'm']);
test(macros.convertMany, '0.1m', [0.1, 'm']);
test(macros.convertMany, '-0.1m', [-0.1, 'm']);

test(macros.convertManyBest, ['500m 3km'], [3.5, 'km']);
test(macros.convertManyBest, ['500m 3km', 'metric'], [3.5, 'km']);
test(macros.convertManyBest, ['500m 3km', 'imperial'], [2.174_799_172_830_668_6, 'mi']);
