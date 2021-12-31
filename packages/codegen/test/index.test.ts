import test from 'ava';
import {codegen} from '../src/index.js';

test('codegen', t => {
	t.timeout(20e3);

	t.snapshot(
		codegen({
			best: {imperial: [], metric: []},
			conversions: {},
			temperatureDifferences: {},
		}),
	);
});
