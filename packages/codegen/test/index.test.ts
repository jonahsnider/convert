import test from 'ava';
import {codegen} from '../src/index.js';

test('codegen', async t => {
	t.snapshot(
		await codegen({
			best: {imperial: [], metric: []},
			conversions: {},
			temperatureDifferences: {},
		}),
	);
});
