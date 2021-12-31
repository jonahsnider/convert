import test from 'ava';
import {bestUnits, conversions, temperatureDifferences} from '../src/index.js';

test.failing('conversions', t => {
	t.snapshot(conversions);
});

test.failing('best units', t => {
	t.snapshot(bestUnits);
});

test.failing('temperature differences', t => {
	t.snapshot(temperatureDifferences);
});
