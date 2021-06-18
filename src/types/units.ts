import {allUnits, UnitIndexes} from '../conversions';
import {UnitFamily} from '../util';

type Units = Omit<typeof allUnits, '__proto__'>;

type AllValues = {
	[P in keyof Units]: {key: P; value: Units[P][UnitIndexes.Family]};
}[keyof Units];
type IdToFamily = {
	[P in AllValues['value']]: Extract<AllValues, {value: P}>['key'];
};

type GetAliases<X extends UnitFamily> = IdToFamily[X];

export type Angle = GetAliases<UnitFamily.Angle>;
export type Data = GetAliases<UnitFamily.Data>;
export type Force = GetAliases<UnitFamily.Force>;
export type Length = GetAliases<UnitFamily.Length>;
export type Mass = GetAliases<UnitFamily.Mass>;
export type Pressure = GetAliases<UnitFamily.Pressure>;
export type Temperature = GetAliases<UnitFamily.Temperature>;
export type Time = GetAliases<UnitFamily.Time>;
export type Volume = GetAliases<UnitFamily.Volume>;

export type Unit = Angle | Data | Force | Length | Mass | Pressure | Temperature | Time | Volume;
