import type {conversions} from 'bundled-conversions';
import type {Indexes} from 'optimized-conversions';
import type * as Conversions from 'conversions';

export type Units = Omit<typeof conversions, '__proto__'>;

type AllValues = {
	[Unit in keyof Units]: {unit: Unit; family: Units[Unit][Indexes.Conversion.Family]};
}[keyof Units];

type FamilyToUnit = {
	[P in AllValues['family']]: Extract<AllValues, {family: P}>['unit'];
};

/**
 * A string literal type for all units belonging to a given conversion family.
 * @public
 */
export type GetAliases<T extends Conversions.Id> = FamilyToUnit[T];

/**
 * Valid angle units.
 * @public
 */
export type Angle = GetAliases<Conversions.Id.Angle>;
/**
 * Valid area units.
 * @public
 */
export type Area = GetAliases<Conversions.Id.Area>;
/**
 * Valid data units.
 * @public
 */
export type Data = GetAliases<Conversions.Id.Data>;
/**
 * Valid force units.
 * @public
 */
export type Force = GetAliases<Conversions.Id.Force>;
/**
 * Valid length units.
 * @public
 */
export type Length = GetAliases<Conversions.Id.Length>;
/**
 * Valid mass units.
 * @public
 */
export type Mass = GetAliases<Conversions.Id.Mass>;
/**
 * Valid pressure units.
 * @public
 */
export type Pressure = GetAliases<Conversions.Id.Pressure>;
/**
 * Valid temperature units.
 * @public
 */
export type Temperature = GetAliases<Conversions.Id.Temperature>;
/**
 * Valid time units.
 * @public
 */
export type Time = GetAliases<Conversions.Id.Time>;
/**
 * Valid volume units.
 * @public
 */
export type Volume = GetAliases<Conversions.Id.Volume>;

/**
 * A supported unit you can convert.
 * @public
 */
export type Unit = GetAliases<Conversions.Id>;

export type UnitToFamily = Record<Angle, Conversions.Id.Angle> &
	Record<Area, Conversions.Id.Area> &
	Record<Data, Conversions.Id.Data> &
	Record<Force, Conversions.Id.Force> &
	Record<Length, Conversions.Id.Length> &
	Record<Mass, Conversions.Id.Mass> &
	Record<Pressure, Conversions.Id.Pressure> &
	Record<Temperature, Conversions.Id.Temperature> &
	Record<Time, Conversions.Id.Time> &
	Record<Volume, Conversions.Id.Volume>;
