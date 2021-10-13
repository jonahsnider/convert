// eslint-disable-next-line ava/use-test
import type {Macro} from 'ava';
import type {BestConversionKind} from '../dev/types/common.js';
import * as lib from '../index.js';
import type {BestUnits} from '../types/common.js';
import type {Unit} from '../types/units.js';

export const convert: Macro<[actual: [fromQuantity: number | bigint, from: Unit], expected: [toQuantity: number | bigint, to: Unit]]> = (
	t,
	input,
	expected,
) => {
	const [fromQuantity, fromUnit] = input;
	const [toQuantity, toUnit] = expected;

	const test = (devFlag: boolean) => {
		__DEV__ = devFlag;
		t.is(lib.convert(fromQuantity, fromUnit as any).to(toUnit as any), toQuantity as any);
	};

	test(false);
	test(true);
};

convert.title = (_providedTitle, input, expected) => `${input[0]} ${input[1]} -> ${expected[0]} ${expected[1]}`;

export const convertMany: Macro<[actual: string, expected: [quantity: number | bigint, unit: Unit]]> = (t, input, expected) => {
	const [toQuantity, toUnit] = expected;

	const test = (devFlag: boolean) => {
		__DEV__ = devFlag;
		t.is(lib.convertMany(input).to(toUnit as any), toQuantity as any);
	};

	test(false);
	test(true);
};

convertMany.title = (_providedTitle, input, expected) => `${input} -> ${expected[0]} ${expected[1]}`;

export const convertManyBest: Macro<[input: [from: string, kind?: BestConversionKind | undefined], expected: [quantity: number | bigint, unit: BestUnits]]> = (
	t,
	input,
	expected,
) => {
	const {toString, ...best} = lib.convertMany(input[0]).to('best', input[1]);

	const test = (devFlag: boolean) => {
		__DEV__ = devFlag;
		t.deepEqual(best, {quantity: expected[0], unit: expected[1]});
		t.is(toString(), `${expected[0]}${expected[1]}`);
	};

	test(false);
	test(true);
};

convertManyBest.title = (_providedTitle, input, expected) => `${input[0]} -> ${input[1] ?? '(default)'} ${expected[0]} ${expected[1]}`;

export const ms: Macro<[from: string, expected: number | bigint]> = (t, input, expected) => {
	const test = (devFlag: boolean) => {
		__DEV__ = devFlag;
		t.is(lib.ms(input), expected);
	};

	test(false);
	test(true);
};

ms.title = (_providedTitle, input, expected) => `${input} -> ${expected} ms`;
