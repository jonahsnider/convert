import {ConversionFamilyId} from '../dev/types/common';
import {ConversionIndex} from '../dev/types/generated';
import {conversions} from '../generated/generated';

type Conversions = Omit<typeof conversions, '__proto__'>;

export type Units = Conversions;

type AllValues = {
	[Unit in keyof Units]: {unit: Unit; family: Units[Unit][ConversionIndex.Family]};
}[keyof Units];

type IdToFamily = {
	[P in AllValues['family']]: Extract<AllValues, {family: P}>['unit'];
};

type GetAliases<T extends ConversionFamilyId> = IdToFamily[T];

export type Angle = GetAliases<ConversionFamilyId.Angle>;
export type Area = GetAliases<ConversionFamilyId.Area>;
export type Data = GetAliases<ConversionFamilyId.Data>;
export type Force = GetAliases<ConversionFamilyId.Force>;
export type Length = GetAliases<ConversionFamilyId.Length>;
export type Mass = GetAliases<ConversionFamilyId.Mass>;
export type Pressure = GetAliases<ConversionFamilyId.Pressure>;
export type Temperature = GetAliases<ConversionFamilyId.Temperature>;
export type Time = GetAliases<ConversionFamilyId.Time>;
export type Volume = GetAliases<ConversionFamilyId.Volume>;

export type Unit = GetAliases<ConversionFamilyId>;
