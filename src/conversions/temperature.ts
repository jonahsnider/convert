/** Conversions for temperature. */
export const temperature = [
    {aliases: ['kelvin', 'k'], ratio: 1},
    {aliases: ['fahrenheit', 'f'], ratio: 1.8, diff: -459.67},
		{aliases: ['celcius', 'centigrades', 'c'], ratio: 1, diff: 273.15},
    {aliases: ['rankine', 'ra'], ratio: 1.8 }
] as const;
