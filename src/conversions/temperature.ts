import {unitFamilies} from '../util';

/**
 * Conversions for temperature.
 * @private
 */
const temperature = {
	kelvin: [unitFamilies.Temperature, 1, 0],
	kelvins: [unitFamilies.Temperature, 1, 0],
	K: [unitFamilies.Temperature, 1, 0],

	fahrenheit: [unitFamilies.Temperature, 5 / 9, 273.15 - 32],
	F: [unitFamilies.Temperature, 5 / 9, 273.15 - 32],

	celsius: [unitFamilies.Temperature, 1, 273.15],
	C: [unitFamilies.Temperature, 1, 273.15],

	rankine: [unitFamilies.Temperature, 5 / 9, 0],
	R: [unitFamilies.Temperature, 5 / 9, 0],

	delisle: [unitFamilies.Temperature, -2 / 3, 373.15],
	De: [unitFamilies.Temperature, -2 / 3, 373.15]
} as const;

export default temperature;
