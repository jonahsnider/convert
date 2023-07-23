import type {Best} from 'conversions';
import {prod, dev} from '../test/convert';
import {testWithBuilds} from '../test/with-builds';

const invalidValue = 'not a valid value';
const invalidUnit = 'not a valid unit';

describe('errors', () => {
	describe('production', () => {
		expect(() => prod.convertMany(invalidValue)).toThrowError(new RangeError(''));

		expect(() =>
			prod
				.convertMany('1000ms')
				// @ts-expect-error Invalid unit
				.to(invalidUnit),
		).toThrow(TypeError);
	});

	describe('development', () => {
		test.each([
			() => dev.convertMany(invalidValue),
			() =>
				dev
					.convertMany('1000ms')
					// @ts-expect-error Invalid unit
					.to(invalidUnit),
		])('%p', fn => {
			expect(fn).toThrow(RangeError);
			expect(fn).toThrow(/.+/);
		});
	});
});

describe('conversions', () => {
	describe.each([
		{from: '1min 30s', to: [90, 'seconds']},
		{from: '51h 13min 56s', to: [51 + 13 / 60 + 56 / 60 / 60, 'hours']},
		{from: '51h 13min 56s', to: [51 + 13 / 60 + 56 / 60 / 60, 'h']},

		{from: '1m3', to: [1, 'm3']},

		{from: '.1m', to: [0.1, 'm']},
		{from: '-.1m', to: [-0.1, 'm']},
		{from: '-1m', to: [-1, 'm']},
		{from: '0.1m', to: [0.1, 'm']},
		{from: '-0.1m', to: [-0.1, 'm']},
	])('$from -> $to', ({from, to}) => {
		testWithBuilds(mod => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			expect(mod.convertMany(from).to(to[1] as any)).toBe(to[0]);
		});
	});

	describe('convert to best', () => {
		type TestCase = {
			from: [value: string] | [value: string, bestKind: Best.Kind];
			to: [quantity: number, unit: string];
		};

		describe.each<TestCase>([
			{from: ['500m 3km'], to: [3.5, 'km']},
			{from: ['500m 3km', 'metric'], to: [3.5, 'km']},
			{from: ['500m 3km', 'imperial'], to: [2.174_799_172_830_668_6, 'mi']},
		])('$from -> $to', ({from, to}) => {
			testWithBuilds(mod => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				const result = mod.convertMany(from[0] as any).to('best', from[1] as any);

				expect(result.quantity).toBe(to[0]);
				expect(result.unit).toBe(to[1]);

				expect(result.toString()).toBe(to[0].toString() + to[1]);
			});
		});
	});
});
