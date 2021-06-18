import {convert} from '../src';
import {Unit} from '../src/types/units';

export function convertAssert(quantity: number | bigint, from: Unit, expected: typeof quantity, to: typeof from, approx = false): void {
	it(`converts ${from} -> ${to}`, () => {
		const matcher = expect(convert(quantity, from as any).to(to as any));

		if (approx) {
			matcher.toBeCloseTo(Number(expected));
		} else {
			matcher.toBe(expected);
		}
	});
}
