import {ConversionFamilyIndex} from '../dev/types/common';
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

type GetAliases<X extends ConversionFamilyIndex> = IdToFamily[X];

export type Angle = GetAliases<ConversionFamilyIndex.Angle>;
export type Data = GetAliases<ConversionFamilyIndex.Data>;
export type Force = GetAliases<ConversionFamilyIndex.Force>;
export type Length = GetAliases<ConversionFamilyIndex.Length>;
export type Mass = GetAliases<ConversionFamilyIndex.Mass>;
export type Pressure = GetAliases<ConversionFamilyIndex.Pressure>;
export type Temperature = GetAliases<ConversionFamilyIndex.Temperature>;
export type Time = GetAliases<ConversionFamilyIndex.Time>;
export type Volume = GetAliases<ConversionFamilyIndex.Volume>;

export type Unit = Angle | Data | Force | Length | Mass | Pressure | Temperature | Time | Volume;
