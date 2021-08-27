import {ConversionFamilyId} from '../dev/types/common';
import {ConversionIndex} from '../dev/types/generated';
import {conversions} from '../generated/generated';

type Conversions = Omit<typeof conversions, '__proto__'>;

export type Units = Conversions;

type AllValues = {
	[P in keyof Units]: {key: P; value: Units[P][ConversionIndex.Family]};
}[keyof Units];

type IdToFamily = {
	[P in AllValues['value']]: Extract<AllValues, {value: P}>['key'];
};

type GetAliases<X extends ConversionFamilyId> = IdToFamily[X];

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

export type Unit = Angle | Area | Data | Force | Length | Mass | Pressure | Temperature | Time | Volume;
