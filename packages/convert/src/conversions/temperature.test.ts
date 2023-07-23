import {assertConversions} from '../../test/assert-conversion';
import {dev, prod} from '../../test/convert';
import type {Temperature} from '../index';

describe('conversions', () => {
	assertConversions([
		{from: [100, 'C'], to: [373.15, 'K']},
		{from: [212, 'F'], to: [100 + 6e-14, 'C']},
		{from: [100, 'C'], to: [212 - 6e-14, 'F']},

		{from: [1391.67, 'R'], to: [932, 'F']},
		{from: [932, 'F'], to: [1391.67, 'R']},

		{from: [1n, 'C'], to: [1n, 'C']},
		{from: [1n, 'F'], to: [1n, 'F']},
		{from: [1n, 'R'], to: [1n, 'R']},
		{from: [1n, 'K'], to: [1n, 'K']},
	]);
});

describe('prevent converting bigints with differences', () => {
	/**
	 * Creates the expected error instance for the dev build.
	 */
	function buildDevExpectation<U1 extends Temperature, U2 extends Temperature>(from: U1, to: U2, reason: U1 | U2): Error {
		return new RangeError(
			`Conversion for ${from} to ${to} cannot be calculated as ${reason} has a conversion difference which cannot be converted with bigints`,
		);
	}

	describe('strict error assertions', () => {
		test.each([
			{fn: () => dev.convert(1n, 'C').to('K'), expected: buildDevExpectation('C', 'K', 'C')},
			{fn: () => dev.convert(1n, 'K').to('C'), expected: buildDevExpectation('K', 'C', 'C')},

			{fn: () => dev.convert(1n, 'celsius').to('K'), expected: buildDevExpectation('celsius', 'K', 'celsius')},
			{fn: () => dev.convert(1n, 'K').to('celsius'), expected: buildDevExpectation('K', 'celsius', 'celsius')},

			{fn: () => prod.convert(1n, 'C').to('K'), expected: new RangeError('')},
			{fn: () => prod.convert(1n, 'K').to('C'), expected: new RangeError('')},

			{fn: () => prod.convert(1n, 'celsius').to('K'), expected: new RangeError('')},
			{fn: () => prod.convert(1n, 'K').to('celsius'), expected: new RangeError('')},
		])('%p', ({fn, expected}) => {
			expect(fn).toThrow(expected);
		});
	});

	describe('loose error assertions', () => {
		test.each([
			() => dev.convert(1n, 'F').to('K'),
			() => dev.convert(1n, 'K').to('F'),
			() => dev.convert(1n, 'fahrenheit').to('K'),
			() => dev.convert(1n, 'K').to('fahrenheit'),
			() => prod.convert(1n, 'F').to('K'),
			() => prod.convert(1n, 'K').to('F'),
			() => prod.convert(1n, 'fahrenheit').to('K'),
			() => prod.convert(1n, 'K').to('fahrenheit'),
		])('%p', fn => {
			expect(fn).toThrow();
		});
	});
});

describe('__proto__ as difference', () => {
	test.each([
		() => prod.convert(1, 'K').to('__proto__' as Temperature),
		() => prod.convert(1, '__proto__' as Temperature).to('K'),
		() => prod.convert(1, 'F').to('__proto__' as Temperature),
		() => prod.convert(1, '__proto__' as Temperature).to('F'),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		() => prod.convert(1, '__proto__' as any).to('__proto__' as any),
	])('%p', fn => {
		expect(fn).toThrow();
	});
});
