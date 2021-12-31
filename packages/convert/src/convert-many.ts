import type * as Conversions from 'conversions';
import {convert} from './convert.js';
import type {BestConversion, BestUnits, Converter} from './types/common.js';
import type {Unit} from './types/units.js';

const enum MatchGroup {
	/** The entire match. */
	Full,
	/** The quantity of the unit. */
	Quantity,
	/** The unit. */
	Unit,
}

const splitExpression = /(-?(?:\d+)?\.?\d+)(\S+)/g;

/**
 * Minified names of properties on the `this` context.
 * Taken from the Terser output.
 */
export const enum ConverterThisProperties {
	Search = 't',
	Value = 'e',
}

interface ConverterThis {
	[ConverterThisProperties.Search]: RegExpExecArray;
	[ConverterThisProperties.Value]: string;
}

function to(this: ConverterThis, unit: Unit | 'best', kind?: Conversions.Best.Kind | undefined) {
	const isBest = unit === 'best';

	let result = 0;
	let resolvedUnit: BestUnits;
	let isFirstPass = true;

	do {
		const converted = convert(
			Number(this[ConverterThisProperties.Search][MatchGroup.Quantity]),
			this[ConverterThisProperties.Search][MatchGroup.Unit] as any,
		).to(isBest && !isFirstPass ? (resolvedUnit! as any) : (unit as any)) as number | BestConversion<number, BestUnits>;

		if (isBest && isFirstPass) {
			result += (converted as BestConversion<number, BestUnits>).quantity;
			resolvedUnit = (converted as BestConversion<number, BestUnits>).unit;
			isFirstPass = false;
		} else {
			result += converted as number;
		}

		this[ConverterThisProperties.Search] = splitExpression.exec(this[ConverterThisProperties.Value])!;
	} while (this[ConverterThisProperties.Search]);

	if (isBest) {
		return convert(result, resolvedUnit! as any).to('best', kind);
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
		if (__DEV__) {
			throw new RangeError(`value did not match expression ${splitExpression.source}`);
		}

		throw new RangeError();
	}

	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return {
		to: to.bind({
			[ConverterThisProperties.Search]: search,
			[ConverterThisProperties.Value]: value,
		}),
	} as Converter<number, Unit>;
}
