// eslint-disable-next-line ava/use-test
import type {ThrowsExpectation} from 'ava';
import test from 'ava';
import type {Temperature} from '../../index.js';
import {convert} from '../../index.js';
import * as macros from '../../test/macros.js';

test(macros.convert, [100, 'C'], [373.15, 'K']);
test(macros.convert, [212, 'F'], [100 + 6e-14, 'C']);
test(macros.convert, [100, 'C'], [212 - 6e-14, 'F']);

test(macros.convert, [1391.67, 'R'], [932, 'F']);
test(macros.convert, [932, 'F'], [1391.67, 'R']);

test(macros.convert, [1n, 'C'], [1n, 'C']);
test(macros.convert, [1n, 'F'], [1n, 'F']);
test(macros.convert, [1n, 'R'], [1n, 'R']);
test(macros.convert, [1n, 'K'], [1n, 'K']);

test('prevent converting bigints with differences', t => {
	function buildDevExpectation<U1 extends Temperature, U2 extends Temperature>(from: U1, to: U2, reason: U1 | U2): ThrowsExpectation {
		return {
			instanceOf: RangeError,
			message: `Conversion for ${from} to ${to} cannot be calculated as ${reason} has a conversion difference which cannot be converted with bigints`,
		};
	}

	__DEV__ = true;
	t.throws(() => convert(1n, 'C').to('K'), buildDevExpectation('C', 'K', 'C'));
	t.throws(() => convert(1n, 'K').to('C'), buildDevExpectation('K', 'C', 'C'));

	t.throws(() => convert(1n, 'F').to('K'));
	t.throws(() => convert(1n, 'K').to('F'));

	t.throws(() => convert(1n, 'celsius').to('K'), buildDevExpectation('celsius', 'K', 'celsius'));
	t.throws(() => convert(1n, 'K').to('celsius'), buildDevExpectation('K', 'celsius', 'celsius'));

	t.throws(() => convert(1n, 'fahrenheit').to('K'));
	t.throws(() => convert(1n, 'K').to('fahrenheit'));

	__DEV__ = false;
	t.throws(() => convert(1n, 'C').to('K'), {instanceOf: RangeError, message: ''});
	t.throws(() => convert(1n, 'K').to('C'), {instanceOf: RangeError, message: ''});

	t.throws(() => convert(1n, 'F').to('K'));
	t.throws(() => convert(1n, 'K').to('F'));

	t.throws(() => convert(1n, 'celsius').to('K'), {instanceOf: RangeError, message: ''});
	t.throws(() => convert(1n, 'K').to('celsius'), {instanceOf: RangeError, message: ''});

	t.throws(() => convert(1n, 'fahrenheit').to('K'));
	t.throws(() => convert(1n, 'K').to('fahrenheit'));
});

test('__proto__', t => {
	t.throws(() => convert(1, 'K').to('__proto__' as Temperature));
	t.throws(() => convert(1, '__proto__' as Temperature).to('K'));

	t.throws(() => convert(1, 'F').to('__proto__' as Temperature));
	t.throws(() => convert(1, '__proto__' as Temperature).to('F'));

	t.throws(() => convert(1, '__proto__' as any).to('__proto__' as any));
});
