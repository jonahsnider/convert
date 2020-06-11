/** Conversions for temperature. */
export const temperature = [
    {aliases: ['kelvin', 'k'], ratio: 1},
    {aliases: ['fahrenheit', 'f'], ratio: ???}, // (K * 1.8) - 459.67
		{aliases: ['celcius', 'centigrades', 'c'], ratio: ???}, // (K + 273.15)
    {aliases: ['rankine', 'ra'], ratio: 1.8 },
    {aliases: ['reanmur', 're'], ratio: 0.8}, // (K -273+15) * .8	
] as const;
