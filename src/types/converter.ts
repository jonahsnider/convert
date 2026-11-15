import type { BestKind } from './public.ts';
import type { BestUnits, BestUnitsForUnit, Unit } from './units.ts';
import type { LiteralToPrimitive } from './utils.ts';

/**
 * The return value from converting a unit to `'best'`.
 * @public
 */
export type BestConversion<Q extends number | bigint, U extends BestUnits> = {
	/**
	 * The quantity of the unit.
	 */
	quantity: LiteralToPrimitive<Q>;
	/** The unit. */
	unit: U;
	/**
	 * Join the quantity and the unit together in a string.
	 * This method is automatically called when casting this object to a string, meaning you can safely do things like concatenate the object with a string.
	 *
	 * @param toFixed - The number of decimal places to include in the string.
	 * The result will be padded with zeros if necessary.
	 * Providing `undefined` will use the original number of decimal places.
	 * Providing `0` will round the number to the nearest integer.
	 * This option is ignored when converting `bigint`s.
	 */
	toString(toFixed?: number): `${LiteralToPrimitive<Q>} ${U}`;
};

/**
 * Options for converting a unit to `'best'`.
 * @public
 */
export type BestConversionOptions<U extends BestUnits = BestUnits> = {
	/**
	 * Units that should never be picked as the best unit.
	 * If every possible best unit is excluded, a `RangeError` is thrown.
	 */
	exclude?: readonly U[] | undefined;
};

/**
 * The return value from calling a conversion function.
 * @public
 */
export type Converter<Q extends number | bigint, U extends Unit> = {
	/**
	 * Convert a quantity of one unit into a new unit
	 *
	 * @param to - The unit you want to convert to
	 *
	 * @returns The converted value
	 */
	to(to: U): LiteralToPrimitive<Q>;
	/**
	 * Convert a measurement to the best unit for display.
	 *
	 * @param to - The string `best`
	 * @param kind - The set of units to use (defaults to `'metric'`)
	 * @param options - Options for picking the best unit, like units to exclude
	 *
	 * @returns An object with a `quantity` property of the `unit` unit, which can be casted to a string using the `toString()` method
	 */
	to<K extends BestKind = BestKind, E extends BestUnitsForUnit<U, K> = never>(
		to: 'best',
		kind?: K | undefined,
		options?: BestConversionOptions<E> | undefined,
	): BestConversion<Q, Exclude<BestUnitsForUnit<U, K>, E>>;
};
