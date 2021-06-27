import {BestIndex} from '../dev/types/generated';
import {bestUnits} from '../generated/generated';
import {Unit} from './units';

export type SimplifyQuantity<Q> = Q extends number ? number : Q extends bigint ? bigint : never;

export type BestUnits = typeof bestUnits[number][number][BestIndex.Symbol];

/**
 * The return value from converting a unit to `'best'`.
 */
export interface BestConversion<Q extends number | bigint, U extends BestUnits> {
	/**
	 * The quantity of the unit.
	 */
	quantity: SimplifyQuantity<Q>;
	/** The unit. */
	unit: U;
	/**
	 * Join the quantity and the unit together in a string.
	 * This method is automatically called when casting this object to a string, meaning you can safely do things like concatenate the object with a string.
	 */
	toString(): `${SimplifyQuantity<Q>}${U}`;
}

export interface Converter<Q extends number | bigint, U extends Unit> {
	/**
	 * Convert a quantity of one unit into a new unit
	 *
	 * @param to - The unit you want to convert to
	 *
	 * @throws `RangeError` if the `to` parameter is not a valid type
	 * @throws `TypeError` if `quantity` was a `bigint` but the conversion can't be expressed as an integer
	 *
	 * @returns The converted value
	 */
	to(to: U): SimplifyQuantity<Q>;
	/**
	 * Convert a measurement to the best unit for display.
	 *
	 * @param to - The string `best`
	 *
	 * @throws `RangeError` if the `to` parameter is not a valid type
	 * @throws `TypeError` if `quantity` was a `bigint` but the conversion can't be expressed as an integer
	 *
	 * @returns An object with a `quantity` property of the `unit` unit, which can be casted to a string using the `toString()` method
	 */
	to<B extends BestUnits>(to: 'best'): BestConversion<Q, B>;
}
