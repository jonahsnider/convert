import {data} from '../src/conversions/data';
import {length} from '../src/conversions/length';
import {temperature} from '../src/conversions/temperature';
import {time} from '../src/conversions/time';
import {ConverterBody, GetAliases} from './common';

type ValidTimeUnits = GetAliases<typeof time>;
type ValidLengthUnits = GetAliases<typeof length>;
type ValidDataUnits = GetAliases<typeof data>;
type ValidTemperatureUnits = GetAliases<typeof temperature>;

export type AllUnits = ValidTimeUnits | ValidLengthUnits | ValidDataUnits | ValidTemperatureUnits;

export interface Converter<Q> {
	from(fromUnit: ValidTimeUnits): ConverterBody<ValidTimeUnits, Q>;
	from(fromUnit: ValidLengthUnits): ConverterBody<ValidLengthUnits, Q>;
	from(fromUnit: ValidDataUnits): ConverterBody<ValidDataUnits, Q>;
	from(fromUnit: ValidTemperatureUnits): ConverterBody<ValidTemperatureUnits, Q>;
}
