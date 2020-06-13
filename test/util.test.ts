import {invariant} from '../src/util';

describe('invariant', () => {
	it('has a message in development', () =>
		expect(() => {
			// @ts-expect-error
			global.__DEV__ = true;
			invariant(false, 'message');
		}).toThrow('convert: Invariant failed: message'));

	it("doesn't have a message in production", () =>
		expect(() => {
			// @ts-expect-error
			global.__DEV__ = false;
			invariant(false, 'message');
		}).toThrow('convert: Invariant failed'));
});
