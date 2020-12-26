import {convert} from '../src';
import {Units} from '../src/types/units';

export function convertAssert(quantity: number | bigint, from: Units, expected: typeof quantity, to: typeof from, approx = false): void {
	it(`converts ${from} -> ${to}`, () => {
		const matcher = expect(
			// @ts-expect-error
			convert(quantity)
				.from(from as any)
				.to(to as any)
		);

		if (approx) {
			matcher.toBeCloseTo(Number(expected));
		} else {
			matcher.toBe(expected);
		}
	});
}
