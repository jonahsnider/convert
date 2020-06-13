/**
 * Conversions for temperature.
 * @private
 */
export const temperature = {
	kelvin: {ratio: 1},
	kelvins: {ratio: 1},
	K: {ratio: 1},

	fahrenheit: {ratio: 5 / 9, difference: 273.15 - 32},
	F: {ratio: 5 / 9, difference: 273.15 - 32},

	celsius: {ratio: 1, difference: 273.15},
	C: {ratio: 1, difference: 273.15},

	rankine: {ratio: 5 / 9},
	R: {ratio: 5 / 9},

	delisle: {ratio: -2/3, difference: 373.15},
	De: {ratio: -2/3, difference: 373.15}
};
