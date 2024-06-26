import type { BestKind, MeasureKind } from '../conversions/types';
import type { BestUnits as BestUnitsGenerated } from '../generated/best-units';
import type { UnitsByMeasure as UnitsByMeasureGenerated } from '../generated/types';

/**
 * Get the units for a given measure.
 * @public
 */
export type UnitsByMeasure<T extends MeasureKind> = T extends keyof UnitsByMeasureGenerated
	? UnitsByMeasureGenerated[T]
	: never;

/** @public */
export type MeasureKindByUnit<T extends Unit> = {
	[K in MeasureKind]: T extends UnitsByMeasureGenerated[K] ? K : never;
}[MeasureKind];

/**
 * A type that gives all the units compatible with the same measure as a given unit.
 * @public
 */
export type MeasuresByUnit<T extends Unit> =
	| UnitsByMeasure<MeasureKindByUnit<T>>
	// Special case for converting from 'm' (alias for minutes) to time
	| (T extends 'm' ? Time : never)
	// Special case for converting from time to 'm' (alias for minutes)
	| (T extends Time ? 'm' : never);

/**
 * A supported unit you can convert.
 * @public
 */
export type Unit = UnitsByMeasure<MeasureKind>;

/**
 * All possible best units for a given {@link BestKind | kind}.
 * @public
 */
export type BestUnits<T extends BestKind = BestKind> = BestUnitsGenerated[T];

/**
 * Get the best units for a given measure.
 * @public
 */
export type BestUnitsForMeasure<M extends MeasureKind, K extends BestKind = BestKind> = BestUnitsForUnit<
	UnitsByMeasure<M>,
	K
>;

/**
 * Get the best units for a given unit.
 * @public
 */
// We have special logic related to the 'm' unit, where it is injected in some cases
// Or when Time is injected if you are converting from 'm'
// We need to undo that logic here, otherwise the best units will be incorrect for 'm' or Time
// Cases:
// 1. U = Time | Length, output should be U - Time
// 2. U = Time | 'm', output should be U - 'm'
// 3. U = something else, output should be U (no transformation)
export type BestUnitsForUnit<U extends Unit, K extends BestKind = BestKind> = (Time | Length extends U
	? Exclude<U, Time>
	: Time | 'm' extends U
		? Exclude<U, 'm'>
		: U) &
	BestUnits<K>;

/**
 * Valid angle units.
 * @public
 */
export type Angle = UnitsByMeasure<MeasureKind.Angle>;
/**
 * Valid area units.
 * @public
 */
export type Area = UnitsByMeasure<MeasureKind.Area>;
/**
 * Valid data units.
 * @public
 */
export type Data = UnitsByMeasure<MeasureKind.Data>;
/**
 * Valid energy units.
 * @public
 */
export type Energy = UnitsByMeasure<MeasureKind.Energy>;
/**
 * Valid force units.
 * @public
 */
export type Force = UnitsByMeasure<MeasureKind.Force>;
/**
 * Valid length units.
 * @public
 */
export type Length = UnitsByMeasure<MeasureKind.Length>;
/**
 * Valid mass units.
 * @public
 */
export type Mass = UnitsByMeasure<MeasureKind.Mass>;
/**
 * Valid power units.
 * @public
 */
export type Power = UnitsByMeasure<MeasureKind.Power>;
/**
 * Valid pressure units.
 * @public
 */
export type Pressure = UnitsByMeasure<MeasureKind.Pressure>;
/**
 * Valid temperature units.
 * @public
 */
export type Temperature = UnitsByMeasure<MeasureKind.Temperature>;
/**
 * Valid time units.
 * @public
 */
export type Time = UnitsByMeasure<MeasureKind.Time>;
/**
 * Valid volume units.
 * @public
 */
export type Volume = UnitsByMeasure<MeasureKind.Volume>;
