/** Conversions for temperature. */
export const temperature = [
    {aliases: ['kelvin', 'K'], ratio: 1},
    {aliases: ['fahrenheit', 'F'], ratio: 1.8, difference: -459.67},
		{aliases: ['celcius', 'centigrades', 'C'], ratio: 1, difference: 273.15},
    {aliases: ['rankine', 'Ra'], ratio: 1.8 }
] as const;
