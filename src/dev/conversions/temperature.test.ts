import test from 'ava';
import convert, {Temperature} from '../..';
import * as macros from '../../test/macros';

test(macros.convert, [100, 'C'], [373.15, 'K']);
test(macros.convert, [212, 'F'], [100 + 0.00000000000006, 'C']);
test(macros.convert, [100, 'C'], [212 - 0.00000000000006, 'F']);

test(macros.convert, [1391.67, 'R'], [932, 'F']);
test(macros.convert, [932, 'F'], [1391.67, 'R']);

test(macros.convert, [1n, 'C'], [1n, 'C']);
test(macros.convert, [1n, 'F'], [1n, 'F']);
test(macros.convert, [1n, 'R'], [1n, 'R']);
test(macros.convert, [1n, 'K'], [1n, 'K']);
test(macros.convert, [1n, 'C'], [1n, 'K']);
test(macros.convert, [1n, 'K'], [1n, 'C']);

test('__proto__', t => {
	t.throws(() => convert(1, 'K').to('__proto__' as Temperature));
	t.throws(() => convert(1, '__proto__' as Temperature).to('K'));

	t.throws(() => convert(1, 'F').to('__proto__' as Temperature));
	t.throws(() => convert(1, '__proto__' as Temperature).to('F'));

	t.throws(() => convert(1, '__proto__' as any).to('__proto__' as any));
});
