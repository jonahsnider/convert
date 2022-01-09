import test from 'ava';
import {bestUnits, conversions, temperatureDifferences} from '../src/index.js';

test('conversions', t => {
	t.snapshot(conversions);
});

test('best units', t => {
	t.snapshot(bestUnits);
});

test('temperature differences', t => {
	t.snapshot(temperatureDifferences);
});
