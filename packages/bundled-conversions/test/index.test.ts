import {expect, test} from 'vitest';
import {bestUnits, conversions, temperatureDifferences} from '../src/index.js';

test('conversions', t => {
	expect(conversions).toMatchSnapshot();
});

test('best units', t => {
	expect(bestUnits).toMatchSnapshot();
});

test('temperature differences', t => {
	expect(temperatureDifferences).toMatchSnapshot();
});
