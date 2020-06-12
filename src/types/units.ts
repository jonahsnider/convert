import {data} from '../conversions/data';
import {length} from '../conversions/length';
import {temperature} from '../conversions/temperature';
import {time} from '../conversions/time';
import {ConverterBody, GetAliases} from './common';

type Time = GetAliases<typeof time>;
type Length = GetAliases<typeof length>;
type Data = GetAliases<typeof data>;
type Temperature = GetAliases<typeof temperature>;

export type AllUnits = Time | Length | Data | Temperature;

export interface Converter<Q> {
	from(fromUnit: Time): ConverterBody<Time, Q>;
	from(fromUnit: Length): ConverterBody<Length, Q>;
	from(fromUnit: Data): ConverterBody<Data, Q>;
	from(fromUnit: Temperature): ConverterBody<Temperature, Q>;
}
