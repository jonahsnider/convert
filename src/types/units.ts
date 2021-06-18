import {allUnits} from '../conversions';
import {UnitFamilies} from '../util';

type Units = Omit<typeof allUnits, '__proto__'>;

type AllValues = {
	[P in keyof Units]: {key: P; value: Units[P][0]};
}[keyof Units];
type IdToFamily = {
	[P in AllValues['value']]: Extract<AllValues, {value: P}>['key'];
};

type GetAliases<X extends UnitFamilies> = IdToFamily[X];

export type Angle = GetAliases<UnitFamilies.Angle>;
export type Data = GetAliases<UnitFamilies.Data>;
export type Force = GetAliases<UnitFamilies.Force>;
export type Length = GetAliases<UnitFamilies.Length>;
export type Mass = GetAliases<UnitFamilies.Mass>;
export type Pressure = GetAliases<UnitFamilies.Pressure>;
export type Temperature = GetAliases<UnitFamilies.Temperature>;
export type Time = GetAliases<UnitFamilies.Time>;
export type Volume = GetAliases<UnitFamilies.Volume>;

export type Unit = Angle | Data | Force | Length | Mass | Pressure | Temperature | Time | Volume;
