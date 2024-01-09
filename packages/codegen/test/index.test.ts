import {expect, test} from 'vitest';
import {codegen} from '../src/index.js';

test('codegen', async t => {
	expect(
		await codegen({
			best: {imperial: [], metric: []},
			conversions: {},
			temperatureDifferences: {},
		}),
	).toMatchSnapshot();
});
