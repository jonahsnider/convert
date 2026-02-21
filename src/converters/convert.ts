import type { BestKind, MeasureKind } from '../conversions/types';
import { bestUnits } from '../generated/best-units';
import { differences, unitsObject } from '../generated/parse-unit';
import type { BestConversion, Converter } from '../types/converter';
import type { BestUnitsForUnit, MeasuresByUnit, Unit } from '../types/units';
import type { LiteralToPrimitive } from '../types/utils';

// Importing MeasureKind will cause the entire enum to be included in the output, which increases bundle size
// This workaround allows me to just hardcode the value, but ensures it doesn't become inaccurate if the enum changes
const MeasureKindTime: MeasureKind.Time = 14;

function convertTo<Q extends number | bigint>(from: string, quantity: Q, to: string): LiteralToPrimitive<Q> {
	let parsedTo = unitsObject[to as Unit];

	if (!parsedTo) {
		throw new RangeError(`${to} is not a valid unit`);
	}

	let parsedFrom = unitsObject[from as Unit];

	if (parsedFrom[0] !== parsedTo[0]) {
		if (parsedFrom[0] === MeasureKindTime && to === 'm') {
			// Going from time to meters, you meant to do minutes
			parsedTo = unitsObject.min;
		} else if (from === 'm' && parsedTo[0] === MeasureKindTime) {
			parsedFrom = unitsObject.min;
		} else {
			throw new RangeError(`Cannot convert between different measures: ${from} and ${to}`);
		}
	}

	const fromRatio = parsedFrom[1];
	const toRatio = parsedTo[1];

	if (typeof quantity === 'bigint') {
		if (
			(from in differences || to in differences) &&
			differences[from as keyof typeof differences] !== differences[to as keyof typeof differences]
		) {
			throw new RangeError(
				`Conversion for ${from} to ${to} cannot be calculated as one of the units has a conversion difference which cannot be expressed with bigints`,
			);
		}

		return ((quantity * BigInt(fromRatio)) / BigInt(toRatio)) as LiteralToPrimitive<Q>;
	}

	if (from in differences) {
		if (to in differences) {
			return (((quantity as number) + differences[from as keyof typeof differences]) * (fromRatio / toRatio) -
				differences[to as keyof typeof differences]) as LiteralToPrimitive<Q>;
		}

		return (((quantity as number) + differences[from as keyof typeof differences]) *
			(fromRatio / toRatio)) as LiteralToPrimitive<Q>;
	}

	if (to in differences) {
		return (quantity * (fromRatio / toRatio) - differences[to as keyof typeof differences]) as LiteralToPrimitive<Q>;
	}

	return (quantity * (fromRatio / toRatio)) as LiteralToPrimitive<Q>;
}

function convertToBest<Q extends number | bigint, U extends Unit>(
	quantity: Q,
	from: U,
	kind: BestKind,
): BestConversion<Q, BestUnitsForUnit<U>> {
	const fromMeasure = unitsObject[from][0];
	const best = bestUnits[kind === 'imperial' ? 1 : 0][fromMeasure];

	const smallestUnit = best[0][0];

	let bestUnit = smallestUnit as BestUnitsForUnit<U>;

	const baseQuantity = convertTo(from, quantity, smallestUnit);
	const absQuantity = baseQuantity < 0 ? -baseQuantity : baseQuantity;

	for (let i = 0; i < best.length; i++) {
		// biome-ignore lint/style/noNonNullAssertion: This is safe because we know the best array is not empty
		const bestEntry = best[i]!;

		if (absQuantity >= bestEntry[1]) {
			bestUnit = bestEntry[0] as BestUnitsForUnit<U>;
		} else {
			break;
		}
	}

	const result = convertTo(from, quantity, bestUnit);

	return {
		quantity: result,
		unit: bestUnit,
		toString: (toFixed?: number) =>
			`${typeof result === 'bigint' || toFixed === undefined ? result : result.toFixed(toFixed)} ${bestUnit}` as `${LiteralToPrimitive<Q>} ${BestUnitsForUnit<U>}`,
	};
}

type ConverterThis<Q extends number | bigint, U extends Unit> = {
	_quantity: Q;
	_from: U;
};

function convertToAny<Q extends number | bigint, U extends Unit>(
	this: ConverterThis<Q, U>,
	to: MeasuresByUnit<U>,
): LiteralToPrimitive<Q>;
function convertToAny<Q extends number | bigint, U extends Unit, K extends BestKind = 'metric'>(
	this: ConverterThis<Q, U>,
	to: 'best',
	kind?: K | undefined,
): BestConversion<Q, BestUnitsForUnit<U>>;
function convertToAny<Q extends number | bigint, U extends Unit, K extends BestKind = 'metric'>(
	this: ConverterThis<Q, U>,
	to: MeasuresByUnit<U> | 'best',
	kind?: K | undefined,
): LiteralToPrimitive<Q> | BestConversion<Q, BestUnitsForUnit<U>> {
	if (to === 'best') {
		return convertToBest(this._quantity, this._from, kind ?? 'metric');
	}

	return convertTo(this._from, this._quantity, to);
}

/**
 * Convert a given quantity of a unit into another unit.
 *
 * @param quantity - The quantity of the `from` unit you want to convert
 * @param from - The unit you are converting from
 *
 * @returns An object you can use to convert the provided quantity
 *
 * @public
 */
export function convert<Q extends number | bigint, U extends Unit>(
	quantity: Q,
	from: U,
): Converter<Q, MeasuresByUnit<U>> {
	if (!(from in unitsObject)) {
		throw new RangeError(`${from} is not a valid unit`);
	}

	return {
		to: convertToAny.bind({ _quantity: quantity, _from: from }),
	} as Converter<Q, MeasuresByUnit<U>>;
}
