import type {bestUnits} from 'bundled-conversions';
import type {Id as ConversionFamilyId, Best} from 'conversions';
import type {Indexes} from 'optimized-conversions';
import type {Unit, UnitToFamily} from './units.js';

export type SimplifyQuantity<Q> = Q extends number ? number : Q extends bigint ? bigint : never;

/**
 * A type for the units possible when converting to "best".
 *
 * @public
 */
export type BestUnits<
	Family extends ConversionFamilyId = ConversionFamilyId,
	Kind extends Best.Kind = Best.Kind,
> = (typeof bestUnits)[Kind][Family][number][Indexes.Best.Sym];

/**
 * The return value from converting a unit to `'best'`.
 * @public
 */
export type BestConversion<Q extends number | bigint, U extends BestUnits> = {
	/**
	 * The quantity of the unit.
	 */
	quantity: SimplifyQuantity<Q>;
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
	toString(toFixed?: number): `${SimplifyQuantity<Q>}${U}`;
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
	to(to: U): SimplifyQuantity<Q>;
	/**
	 * Convert a measurement to the best unit for display.
	 *
	 * @param to - The string `best`
	 * @param kind - The set of units to use (defaults to `'metric'`)
	 *
	 * @returns An object with a `quantity` property of the `unit` unit, which can be casted to a string using the `toString()` method
	 */
	to<B extends BestUnits<UnitToFamily[U], K>, K extends Best.Kind = Best.Kind>(to: 'best', kind?: K | undefined): BestConversion<Q, B>;
};
