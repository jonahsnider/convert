import {data} from '../src/conversions/data';
import {length} from '../src/conversions/length';
import {time} from '../src/conversions/time';
import {ConverterBody, GetAliases} from './common';

type ValidTimeUnits = GetAliases<typeof time>;
type ValidLengthUnits = GetAliases<typeof length>;
type ValidDataUnits = GetAliases<typeof data>;

export type AllUnits = ValidTimeUnits | ValidLengthUnits | ValidDataUnits;

export interface Converter<Q> {
	from(fromUnit: ValidTimeUnits): ConverterBody<ValidTimeUnits, Q>;
	from(fromUnit: ValidLengthUnits): ConverterBody<ValidLengthUnits, Q>;
	from(fromUnit: ValidDataUnits): ConverterBody<ValidDataUnits, Q>;
}
