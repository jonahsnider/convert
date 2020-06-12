import {data, length, mass, temperature, time} from '../conversions';
import {ConverterBody, GetAliases} from './common';

type Data = GetAliases<typeof data>;
type Length = GetAliases<typeof length>;
type Mass = GetAliases<typeof mass>;
type Temperature = GetAliases<typeof temperature>;
type Time = GetAliases<typeof time>;

export type AllUnits = Data | Length | Mass | Temperature | Time;

export interface Converter<Q> {
	from(fromUnit: Time): ConverterBody<Time, Q>;
	from(fromUnit: Length): ConverterBody<Length, Q>;
	from(fromUnit: Data): ConverterBody<Data, Q>;
	from(fromUnit: Temperature): ConverterBody<Temperature, Q>;
	from(fromUnit: Mass): ConverterBody<Temperature, Q>;
}
