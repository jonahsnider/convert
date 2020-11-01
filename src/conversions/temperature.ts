import {ratioer} from '../util';

/**
 * Conversions for temperature.
 * @private
 */
export const temperature = {
	kelvin: ratioer(1),
	kelvins: ratioer(1),
	K: ratioer(1),

	fahrenheit: ratioer(5 / 9, 273.15 - 32),
	F: ratioer(5 / 9, 273.15 - 32),

	celsius: ratioer(1, 273.15),
	C: ratioer(1, 273.15),

	rankine: ratioer(5 / 9),
	R: ratioer(5 / 9),

	delisle: ratioer(-2 / 3, 373.15),
	De: ratioer(-2 / 3, 373.15)
};
