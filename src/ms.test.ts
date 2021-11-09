import test from 'ava';
import * as macros from './test/macros.js';

test(macros.ms, '1s', 1000);
test(macros.ms, '1d', 86_400_000);
test(macros.ms, '1d 24h', 86_400_000 * 2);

test(macros.ms, 60_000, '1min');
test(macros.ms, 2 * 60_000, '2min');
test(macros.ms, -3 * 60_000, '-3min');
test(macros.ms, 10 * 60_000 * 60, '10h');
