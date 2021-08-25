import test from 'ava';
import * as macros from '../../test/macros';

test(macros.convert, [1, 'centiare'], [1, 'm2']);
test(macros.convert, [1, 'deciare'], [1e1, 'm2']);
test(macros.convert, [1, 'are'], [1e2, 'm2']);
test(macros.convert, [1, 'decare'], [1e3, 'm2']);
test(macros.convert, [1, 'hectare'], [1e4, 'm2']);

test(macros.convert, [1, 'square meter'], [1000, 'square millimeter']);

test(macros.convert, [1, 'sq ft'], [12 ** 2, 'sq in']);
test(macros.convert, [1, 'sq yd'], [9, 'sq ft']);
test(macros.convert, [1, 'm2'], [3.861021585424458e-7, 'sq mi']);
