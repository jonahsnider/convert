import {data, length, mass, pressure, temperature, time, volume} from '../conversions';
import {ConverterBody, GetAliases} from './common';

export type Data = GetAliases<typeof data>;
export type Length = GetAliases<typeof length>;
export type Mass = GetAliases<typeof mass>;
export type Pressure = GetAliases<typeof pressure>;
export type Temperature = GetAliases<typeof temperature>;
export type Time = GetAliases<typeof time>;
export type Volume = GetAliases<typeof volume>;

export type AllUnits = Data | Length | Mass | Pressure | Temperature | Time | Volume;

export interface Converter<Q> {
	from(fromUnit: Data): ConverterBody<Data, Q>;
	from(fromUnit: Length): ConverterBody<Length, Q>;
	from(fromUnit: Mass): ConverterBody<Mass, Q>;
	from(fromUnit: Pressure): ConverterBody<Pressure, Q>;
	from(fromUnit: Temperature): ConverterBody<Temperature, Q>;
	from(fromUnit: Time): ConverterBody<Time, Q>;
	from(fromUnit: Volume): ConverterBody<Volume, Q>;
}
