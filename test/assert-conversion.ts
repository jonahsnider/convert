import { expect, test } from 'vitest';
import { convert } from '../src/converters/convert.js';
import { Unit } from '../src/types/units.js';

type ConversionTuple = [quantity: number | bigint, unit: Unit];
type ConversionTest = {
	from: ConversionTuple;
	to: ConversionTuple;
};

export function assertConversions(conversions: ConversionTest[]): void {
	test.each(conversions)('$from.0 $from.1 -> $to.0 $to.1', ({ from, to }) => {
		expect(convert(from[0], from[1]).to(to[1])).toBe(to[0]);
	});
}
