import {Macro} from 'ava';
import * as lib from '../index';
import {Unit} from '../types/units';

export const convert: Macro<[actual: [fromQuantity: number | bigint, from: Unit], expected: [toQuantity: number | bigint, to: Unit]]> = (
	t,
	input,
	expected
) => {
	const [fromQuantity, fromUnit] = input;
	const [toQuantity, toUnit] = expected;

	t.is(lib.convert(fromQuantity, fromUnit as any).to(toUnit as any), toQuantity as any);
};

convert.title = (_providedTitle, input, expected) => `${input[0]} ${input[1]} -> ${expected[0]} ${expected[1]}`;

export const convertMany: Macro<[actual: string, expected: [quantity: number | bigint, unit: Unit]]> = (t, input, expected) => {
	const [toQuantity, toUnit] = expected;

	t.is(lib.convertMany(input).to(toUnit as any), toQuantity as any);
};

convertMany.title = (_providedTitle, input, expected) => `${input} -> ${expected[0]} ${expected[1]}`;

export const convertManyBest: Macro<[from: string, expected: [quantity: number | bigint, unit: Unit]]> = (t, input, expected) => {
	const {toString, ...best} = lib.convertMany(input).to('best');

	t.deepEqual(best, {quantity: expected[0], unit: expected[1]});
	t.is(toString(), `${expected[0]}${expected[1]}`);
};

convertManyBest.title = (_providedTitle, input, expected) => `${input} -> ${expected[0]} ${expected[1]}`;

export const ms: Macro<[from: string, expected: number | bigint]> = (t, input, expected) => {
	t.is(lib.ms(input), expected);
};

ms.title = (_providedTitle, input, expected) => `${input} -> ${expected} ms`;
