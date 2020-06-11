import {data} from '../conversions/data';
import {length} from '../conversions/length';
import {temperature} from '../conversions/temperature';
import {time} from '../conversions/time';
import {ConverterBody, GetAliases} from './common';

export type ValidTimeUnits = GetAliases<typeof time>;
export type ValidLengthUnits = GetAliases<typeof length>;
export type ValidDataUnits = GetAliases<typeof data>;
export type ValidTemperatureUnits = GetAliases<typeof temperature>;

export type AllUnits = ValidTimeUnits | ValidLengthUnits | ValidDataUnits | ValidTemperatureUnits;

export interface Converter<Q> {
	from(fromUnit: ValidTimeUnits): ConverterBody<ValidTimeUnits, Q>;
	from(fromUnit: ValidLengthUnits): ConverterBody<ValidLengthUnits, Q>;
	from(fromUnit: ValidDataUnits): ConverterBody<ValidDataUnits, Q>;
	from(fromUnit: ValidTemperatureUnits): ConverterBody<ValidTemperatureUnits, Q>;
}
