import { BestKind } from '../conversions/types.js';
import { convert } from './convert.js';
import { BestConversion, Converter } from '../types/converter.js';

import type { BestUnits, Unit } from '../types/units.js';

const splitExpression = /(-?(?:\d+)?\.?\d+)(\S+)/g;

type ConverterThis = {
	_search: RegExpExecArray;
	_value: string;
};

function to(this: ConverterThis, unit: Unit | 'best', kind?: BestKind | undefined) {
	const isBest = unit === 'best';

	let result = 0;
	let resolvedUnit: BestUnits;
	let isFirstPass = true;

	do {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		// biome-ignore lint/suspicious/noExplicitAny:
		const converted = convert(Number(this._search[1]), this._search[2] as any).to(
			// biome-ignore lint/style/noNonNullAssertion:
			// biome-ignore lint/suspicious/noExplicitAny:
			isBest && !isFirstPass ? (resolvedUnit! as any) : (unit as any),
		) as number | BestConversion<number, BestUnits>;

		if (isBest && isFirstPass) {
			result += (converted as BestConversion<number, BestUnits>).quantity;
			resolvedUnit = (converted as BestConversion<number, BestUnits>).unit;
			isFirstPass = false;
		} else {
			result += converted as number;
		}

		// biome-ignore lint/style/noNonNullAssertion:
		this._search = splitExpression.exec(this._value)!;
	} while (this._search);

	if (isBest) {
		// biome-ignore lint/style/noNonNullAssertion:
		return convert(result, resolvedUnit!).to('best', kind);
	}

	return result;
}

/**
 * Convert several values in a string into a single unit.
 *
 * @example
 * ```ts
 * convertMany('1d 12h').to('hours') === 36;
 * ```
 *
 * @param value - The string to parse as values
 *
 * @public
 */
export function convertMany(value: string): Converter<number, Unit> {
	splitExpression.lastIndex = 0;
	const search = splitExpression.exec(value);

	if (!search) {
		throw new RangeError(`value did not match expression ${splitExpression.source}`);
	}

	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return {
		to: to.bind({
			_search: search,
			_value: value,
		}),
	} as Converter<number, Unit>;
}
