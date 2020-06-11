import {convert} from '../src';
import {AllUnits} from '../types/units';

export function convertAssert(quantity: number | bigint, from: AllUnits | any, to: typeof from, expected: typeof quantity): void {
	it(`converts ${from} -> ${to}`, () =>
		expect(
			convert(quantity)
				.from(from)
				.to(to)
		).toBe(expected));
}
