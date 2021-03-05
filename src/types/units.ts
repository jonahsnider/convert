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
	/**
	 * Convert an angle into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Angle): ConverterBody<Angle, Q>;
	/**
	 * Convert a quantity of data into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Data): ConverterBody<Data, Q>;
	/**
	 * Convert a quantity of force into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Force): ConverterBody<Force, Q>;
	/**
	 * Convert a length into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Length): ConverterBody<Length, Q>;
	/**
	 * Convert mass into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Mass): ConverterBody<Mass, Q>;
	/**
	 * Convert pressure into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Pressure): ConverterBody<Pressure, Q>;
	/**
	 * Convert a temperature into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Temperature): ConverterBody<Temperature, Q>;
	/**
	 * Convert a duration of time into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Time): ConverterBody<Time, Q>;
	/**
	 * Convert volume into another representation.
	 * @param to - The unit you want to convert to
	 * @returns The converted value
	 * @throws If `to` was an invalid unit
	 */
	from(fromUnit: Volume): ConverterBody<Volume, Q>;
}
