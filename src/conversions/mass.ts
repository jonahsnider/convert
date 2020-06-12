const poundInGrams = 4.5359237e2;
/**
 * Conversions for mass.
 * @private
 */
export const mass = [
	{aliases: ['kilogram', 'kilograms', 'kg'], ratio: 1e3},
	{aliases: ['gram', 'grams', 'g'], ratio: 1},
	{aliases: ['decagram', 'decagrams', 'dag'], ratio: 1e1},
	{aliases: ['hectogram', 'hectograms', 'hg'], ratio: 1e2},
	{aliases: ['megagram', 'megagrams', 'Mg', 'tonne', 'tonnes', 'metric ton', 'metric tons', 't'], ratio: 1e6},
	{aliases: ['gigagram', 'gigagrams', 'Gg'], ratio: 1e9},
	{aliases: ['teragram', 'teragrams', 'Tg'], ratio: 1e12},
	{aliases: ['petagram', 'petagrams', 'Pg'], ratio: 1e15},
	{aliases: ['exagram', 'exagrams', 'Eg'], ratio: 1e18},
	{aliases: ['zettagram', 'zettagram', 'Zg'], ratio: 1e21},
	{aliases: ['yottagram', 'yottagrams', 'Yg'], ratio: 1e24},
	{aliases: ['decigram', 'decigrams', 'dg'], ratio: 1e-1},
	{aliases: ['centigram', 'centigrams', 'cg'], ratio: 1e-2},
	{aliases: ['milligram', 'milligrams', 'mg'], ratio: 1e-3},
	{aliases: ['microgram', 'micrograms', 'µg'], ratio: 1e-6},
	{aliases: ['nanogram', 'nanograms', 'ng'], ratio: 1e-9},
	{aliases: ['picogram', 'picograms', 'pg'], ratio: 1e-12},
	{aliases: ['femtogram', 'femtograms', 'fg'], ratio: 1e-15},
	{aliases: ['attogram', 'attograms', 'ag'], ratio: 1e-18},
	{aliases: ['zeptogram', 'zeptograms', 'zg'], ratio: 1e-21},
	{aliases: ['yoctogram', 'yoctograms', 'yg'], ratio: 1e-24},
	{aliases: ['pound', 'pounds', 'lb'], ratio: poundInGrams},
	{aliases: ['stone', 'stones', 'st'], ratio: poundInGrams * 14},
	{aliases: ['ounce', 'ounces', 'oz', '℥'], ratio: poundInGrams / 16},
	/** @see https://en.wikipedia.org/wiki/Short_ton */
	{aliases: ['short ton', 'short tons', 'us ton', 'us tons'], ratio: poundInGrams * 2000},
	/** @see https://en.wikipedia.org/wiki/Long_ton */
	{aliases: ['long ton', 'long tons', 'imperial ton', 'imperial tons', 'displacement ton', 'displacement tons'], ratio: poundInGrams * 2240}
] as const;
