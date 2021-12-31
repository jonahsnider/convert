// eslint-disable-next-line ava/use-test
import type {Macro} from 'ava';
import type * as Conversions from 'conversions';
import type {Unit} from 'convert';
import type {BestUnits} from '../../../convert/src/types/common.js';
import {dev, prod} from './convert.js';

export const convert: Macro<[actual: [fromQuantity: number | bigint, from: Unit], expected: [toQuantity: number | bigint, to: Unit]]> = {
	exec: (t, input, expected) => {
		const [fromQuantity, fromUnit] = input;
		const [toQuantity, toUnit] = expected;

		const test = (lib: typeof prod | typeof dev) => {
			t.is(lib.convert(fromQuantity, fromUnit as any).to(toUnit as any), toQuantity as any);
		};

		test(prod);
		test(dev);
	},
	title: (_providedTitle, input, expected) => `${input[0]} ${input[1]} -> ${expected[0]} ${expected[1]}`,
};

export const convertMany: Macro<[actual: string, expected: [quantity: number | bigint, unit: Unit]]> = {
	exec: (t, input, expected) => {
		const [toQuantity, toUnit] = expected;

		const test = (lib: typeof prod | typeof dev) => {
			t.is(lib.convertMany(input).to(toUnit as any), toQuantity as any);
		};

		test(prod);
		test(dev);
	},
	title: (_providedTitle, input, expected) => `${input} -> ${expected[0]}${expected[1]}`,
};

export const convertManyBest: Macro<[input: [from: string, kind?: Conversions.Best.Kind | undefined], expected: [quantity: number, unit: BestUnits]]> = {
	exec: (t, input, expected) => {
		const test = (lib: typeof prod | typeof dev) => {
			const {toString, ...best} = lib.convertMany(input[0]).to('best', input[1] as any);

			t.deepEqual(best, {quantity: expected[0], unit: expected[1]});
			t.is(toString(), `${expected[0]}${expected[1]}`);
		};

		test(prod);
		test(dev);
	},
	title: (_providedTitle, input, expected) => `${input[0]} -> ${input[1] ?? '(default)'} ${expected[0]}${expected[1]}`,
};

export const ms: Macro<[from: string, expected: number] | [from: number, expected: string]> = {
	exec: (t, input, expected) => {
		const test = (lib: typeof prod | typeof dev) => {
			t.is(lib.ms(input as any), expected as any);
		};

		test(prod);
		test(dev);
	},
	title: (_providedTitle, input, expected) => (typeof expected === 'string' ? `${input}ms -> ${expected}` : `${input} -> ${expected}ms`),
};
