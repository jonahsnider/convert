import type {ConversionFamilyId} from '../dev/types/common.js';
import type {ConversionIndex} from '../dev/types/generated.js';
import type {conversions} from '../generated/generated.js';

// eslint-disable-next-line @typescript-eslint/ban-types
type Conversions = Omit<typeof conversions, '__proto__'>;

export type Units = Conversions;

type AllValues = {
	[Unit in keyof Units]: {unit: Unit; family: Units[Unit][ConversionIndex.Family]};
}[keyof Units];

type FamilyToUnit = {
	[P in AllValues['family']]: Extract<AllValues, {family: P}>['unit'];
};

/**
 * A string literal type for all units belonging to a given conversion family.
 * @internal
 */
export type GetAliases<T extends ConversionFamilyId> = FamilyToUnit[T];

/**
 * Valid angle units.
 * @public
 */
export type Angle = GetAliases<ConversionFamilyId.Angle>;
/**
 * Valid area units.
 * @public
 */
export type Area = GetAliases<ConversionFamilyId.Area>;
/**
 * Valid data units.
 * @public
 */
export type Data = GetAliases<ConversionFamilyId.Data>;
/**
 * Valid force units.
 * @public
 */
export type Force = GetAliases<ConversionFamilyId.Force>;
/**
 * Valid length units.
 * @public
 */
export type Length = GetAliases<ConversionFamilyId.Length>;
/**
 * Valid mass units.
 * @public
 */
export type Mass = GetAliases<ConversionFamilyId.Mass>;
/**
 * Valid pressure units.
 * @public
 */
export type Pressure = GetAliases<ConversionFamilyId.Pressure>;
/**
 * Valid temperature units.
 * @public
 */
export type Temperature = GetAliases<ConversionFamilyId.Temperature>;
/**
 * Valid time units.
 * @public
 */
export type Time = GetAliases<ConversionFamilyId.Time>;
/**
 * Valid volume units.
 * @public
 */
export type Volume = GetAliases<ConversionFamilyId.Volume>;

/**
 * A supported unit you can convert.
 * @public
 */
export type Unit = GetAliases<ConversionFamilyId>;

export type UnitToFamily = Record<Angle, ConversionFamilyId.Angle> &
	Record<Area, ConversionFamilyId.Area> &
	Record<Data, ConversionFamilyId.Data> &
	Record<Force, ConversionFamilyId.Force> &
	Record<Length, ConversionFamilyId.Length> &
	Record<Mass, ConversionFamilyId.Mass> &
	Record<Pressure, ConversionFamilyId.Pressure> &
	Record<Temperature, ConversionFamilyId.Temperature> &
	Record<Time, ConversionFamilyId.Time> &
	Record<Volume, ConversionFamilyId.Volume>;
