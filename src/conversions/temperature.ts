/**
 * Conversions for temperature.
 * @private
 */
export const temperature = {
	kelvin: {ratio: 1},
	kelvins: {ratio: 1},
	K: {ratio: 1},

	fahrenheit: {ratio: 5 / 9, difference: 459.67},
	F: {ratio: 5 / 9, difference: 459.67},

	celsius: {ratio: 1, difference: 273.15},
	C: {ratio: 1, difference: 273.15},

	rankine: {ratio: 5 / 9},
	R: {ratio: 5 / 9},

	delisle: {ratio: 3 / -2, difference: 373.15},
	De: {ratio: 3 / -2, difference: 373.15}
};
