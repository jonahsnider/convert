import {testWithBuilds} from '../test/with-builds';

describe('exports', () => {
	describe('convert is default export', () => {
		testWithBuilds(mod => {
			expect(mod.convert).toBe(mod.default);
		});
	});
});
