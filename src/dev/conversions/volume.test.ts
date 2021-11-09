import test from 'ava';
import * as macros from '../../test/macros.js';

test(macros.convert, [1, 'US dry barrel'], [115.6, 'L']);

test(macros.convert, [1, 'US peck'], [8.809_767_541_72, 'L']);

test(macros.convert, [1, 'US dry gallon'], [4.404_883_770_86, 'L']);

test(macros.convert, [1, 'US dry quart'], [1.101_220_942_715, 'L']);

test(macros.convert, [1, 'US dry pint'], [550.610_471_357_5, 'mL']);
test(macros.convert, [1, 'US dry pint'], [0.125, 'US dry gallon']);
