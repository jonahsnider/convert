import { BestKind } from '../conversions/types';
import { getBestUnitsByMeasure } from '../generated/best-units';
import { parseUnit } from '../generated/parse-unit';
import { BestConversion, Converter } from '../types/converter';
import { BestUnitsForUnit, MeasuresByUnit, Unit } from '../types/units';
import { LiteralToPrimitive } from '../types/utils';

function convertTo<Q extends number | bigint>(from: string, quantity: Q, to: string): LiteralToPrimitive<Q> {
	const parsedFrom = parseUnit(from);
	const parsedTo = parseUnit(to);

	const fromMeasure = parsedFrom[0];
	const toMeasure = parsedTo[0];
	const fromRatio = parsedFrom[1];
	const toRatio = parsedTo[1];
	const fromDifference = parsedFrom[2];
	const toDifference = parsedTo[2];

	if (fromMeasure !== toMeasure) {
		throw new RangeError(`Cannot convert between different measures: ${from} and ${to}`);
	}

	if (typeof quantity === 'bigint') {
		if (fromDifference === toDifference) {
			return ((quantity * BigInt(fromRatio)) / BigInt(toRatio)) as LiteralToPrimitive<Q>;
		}

		if (fromDifference !== 0 || toDifference !== 0) {
			throw new RangeError(
				`Conversion for ${from} to ${to} cannot be calculated as one of the units has a conversion difference which cannot be expressed with bigints`,
			);
		}

		return ((quantity + BigInt(fromDifference)) * (BigInt(fromRatio) / BigInt(toRatio)) -
			BigInt(toDifference)) as LiteralToPrimitive<Q>;
	}

	return (((quantity as number) + fromDifference) * (fromRatio / toRatio) - toDifference) as LiteralToPrimitive<Q>;
}

function convertToBest<Q extends number | bigint, U extends Unit>(
	quantity: Q,
	from: U,
	kind: BestKind,
): BestConversion<Q, BestUnitsForUnit<U>> {
	const fromMeasure = parseUnit(from)[0];
	const best = getBestUnitsByMeasure(fromMeasure, kind);

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
		toString:
			typeof quantity === 'bigint'
				? () => ((result as bigint) + bestUnit) as `${LiteralToPrimitive<Q>}${BestUnitsForUnit<U>}`
				: (toFixed?: number) =>
						((toFixed === undefined ? result : (result as number).toFixed(toFixed)) +
							bestUnit) as `${LiteralToPrimitive<Q>}${BestUnitsForUnit<U>}`,
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
	return {
		to: convertToAny.bind({ _quantity: quantity, _from: from }),
	} as Converter<Q, MeasuresByUnit<U>>;
}
