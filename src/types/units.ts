import {allUnits} from '../conversions';
import {UnitFamilies} from '../util';
import {ConverterBody} from './common';

type UnitsCombined = typeof allUnits;

type UnitKeys = Exclude<keyof UnitsCombined, '__proto__'>;

type AllValues = {
	[P in UnitKeys]: {key: P; value: UnitsCombined[P][0]};
}[UnitKeys];
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

export type Units = Angle | Data | Force | Length | Mass | Pressure | Temperature | Time | Volume;

export interface Converter<Q> {
	from(fromUnit: Angle): ConverterBody<Angle, Q>;
	from(fromUnit: Data): ConverterBody<Data, Q>;
	from(fromUnit: Force): ConverterBody<Force, Q>;
	from(fromUnit: Length): ConverterBody<Length, Q>;
	from(fromUnit: Mass): ConverterBody<Mass, Q>;
	from(fromUnit: Pressure): ConverterBody<Pressure, Q>;
	from(fromUnit: Temperature): ConverterBody<Temperature, Q>;
	from(fromUnit: Time): ConverterBody<Time, Q>;
	from(fromUnit: Volume): ConverterBody<Volume, Q>;
}
