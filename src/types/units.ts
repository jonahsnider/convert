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

type GetAliases<T extends ConversionFamilyId> = FamilyToUnit[T];

/** Valid angle units. */
export type Angle = GetAliases<ConversionFamilyId.Angle>;
/** Valid area units. */
export type Area = GetAliases<ConversionFamilyId.Area>;
/** Valid data units. */
export type Data = GetAliases<ConversionFamilyId.Data>;
/** Valid force units. */
export type Force = GetAliases<ConversionFamilyId.Force>;
/** Valid length units. */
export type Length = GetAliases<ConversionFamilyId.Length>;
/** Valid mass units. */
export type Mass = GetAliases<ConversionFamilyId.Mass>;
/** Valid pressure units. */
export type Pressure = GetAliases<ConversionFamilyId.Pressure>;
/** Valid temperature units. */
export type Temperature = GetAliases<ConversionFamilyId.Temperature>;
/** Valid time units. */
export type Time = GetAliases<ConversionFamilyId.Time>;
/** Valid volume units. */
export type Volume = GetAliases<ConversionFamilyId.Volume>;

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
