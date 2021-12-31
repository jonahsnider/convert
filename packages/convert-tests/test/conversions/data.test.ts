import test from 'ava';
import * as macros from '../util/macros.js';

test(macros.convert, [1, 'bit'], [0.001, 'kb']);
test(macros.convert, [1, 'kilobit'], [0.001, 'Mb']);
