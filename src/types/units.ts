import {data, length, mass, temperature, time} from '../conversions';
import {ConverterBody, GetAliases} from './common';

export type Data = GetAliases<typeof data>;
export type Length = GetAliases<typeof length>;
export type Mass = GetAliases<typeof mass>;
export type Temperature = GetAliases<typeof temperature>;
export type Time = GetAliases<typeof time>;

export type AllUnits = Data | Length | Mass | Temperature | Time;

export interface Converter<Q> {
	from(fromUnit: Time): ConverterBody<Time, Q>;
	from(fromUnit: Length): ConverterBody<Length, Q>;
	from(fromUnit: Data): ConverterBody<Data, Q>;
	from(fromUnit: Temperature): ConverterBody<Temperature, Q>;
	from(fromUnit: Mass): ConverterBody<Mass, Q>;
}
