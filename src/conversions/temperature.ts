/**
 * Conversions for temperature.
 * @private
 */
export const temperature = [
	{aliases: ['kelvin', 'K'], ratio: 1},
	{aliases: ['fahrenheit', 'F'], ratio: 1 / 1.8, difference: -459.67},
	{aliases: ['celsius', 'C'], ratio: 1, difference: -273.15},
	{aliases: ['rankine', 'Ra'], ratio: 1 / 1.8},
	{aliases: ['reaumur', 'Re'], ratio: 1 / -273.15},
	{aliases: ['delisle', 'De'], ratio: 1 / 1.5, difference: -373.15}
] as const;
