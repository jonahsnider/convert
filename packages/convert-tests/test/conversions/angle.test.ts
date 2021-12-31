import test from 'ava';
import * as macros from '../util/macros.js';

test(macros.convert, [360, 'degrees'], [Math.PI * 2, 'radians']);
test(macros.convert, [1, 'gradian'], [1 / 400, 'turns']);
