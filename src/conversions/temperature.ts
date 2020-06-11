/**
 * Conversions for temperature.
 * @private
 */
export const temperature = [
	{aliases: ['kelvin', 'kelvins', 'K'], ratio: 1, difference: 0},
	{aliases: ['fahrenheit', 'F'], ratio: 5 / 9, difference: 459.67},
	{aliases: ['celsius', 'C'], ratio: 1, difference: 273.15},
	// flicky plz
	{aliases: ['rankine', 'R'], ratio: 5 / 9, difference: 0},
	{aliases: ['delisle', 'De'], ratio: 3 / -2, difference: 373.15}
] as const;
