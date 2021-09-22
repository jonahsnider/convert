import test from 'ava';
import * as macros from '../../test/macros';

test(macros.convert, [100, 'C'], [373.15, 'K']);
test(macros.convert, [212, 'F'], [100 + 0.00000000000006, 'C']);
test(macros.convert, [100, 'C'], [212 - 0.00000000000006, 'F']);

test(macros.convert, [1391.67, 'R'], [932, 'F']);
test(macros.convert, [932, 'F'], [1391.67, 'R']);

test(macros.convert, [1n, 'C'], [1n, 'C']);
test(macros.convert, [1n, 'K'], [1n, 'K']);
