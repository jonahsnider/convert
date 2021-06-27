import {BestConversions, ConversionFamilyIndex, ConversionGroup} from '../types/common';

export const id = ConversionFamilyIndex.Volume;

export const best: BestConversions = ['mL', 'L'];

export const conversions: ConversionGroup = [
	{
		names: ['cubic meter', 'cubic meters', 'cubic metre', 'cubic metres', 'kiloliter', 'kilolitre', 'kiloliters', 'kilolitres', 'stere', 'steres'],
		symbols: ['m³', 'm3'],
		ratio: 1
	},
	// TODO This will not generate names properly (ex. currently it generates hectocubic meter instead of cubic hectometer), support for more complex naming will need to be added (maybe by replacing $1/%1 with something?)
	{names: ['meter', 'meters'], symbols: ['m3', 'm³'], prefix: 'volumeSi', ratio: 1},

	{
		names: ['liter', 'liters', 'litre', 'litres'],
		symbols: ['l', 'L'],
		ratio: 1e-3
	},
	{names: ['liter', 'liters', 'litre', 'litres'], symbols: ['l', 'L'], prefix: 'si', ratio: 1e-3},

	// TODO: Review these symbols and decide if i want to include periods in the names of the names/symbols here
	{names: ['cubic mile', 'cubic miles'], symbols: ['cu mi', 'cumi', 'mi3'], ratio: 4.2e3},
	{names: ['acre-foot', 'acre-feet'], symbols: ['ac⋅ft', 'ac ft'], ratio: 1233.48183754752},
	{names: ['cubic yard', 'cubic yards'], symbols: ['cu yd', 'cuyd', 'yd3'], ratio: 0.76},
	{names: ['cubic foot', 'cubic feet'], symbols: ['cu ft', 'cuft', 'ft3', 'cufoot', 'foot3'], ratio: 0.028},
	{names: ['board foot', 'board feet'], ratio: 0.002359737},
	{names: ['cubic inch', 'cubic inches'], symbols: ['cu in', 'cuin', 'in3'], ratio: 0.000016387064},
	{names: ['measurement ton', 'measurement tons'], symbols: ['MTON'], ratio: 1.133},
	{names: ['imperial barrel', 'imperial barrels'], symbols: ['imp bbl', 'impbbl'], ratio: 0.16},
	{names: ['kilderkin', 'kilderkins'], ratio: 0.08318},
	{names: ['firkin', 'firkins'], ratio: 0.041},
	{names: ['imperial bushel', 'imperial bushels'], symbols: ['imp bsh', 'imp bu', 'impbsh', 'impbu'], ratio: 0.03636872},
	{names: ['imperial peck', 'imperial pecks'], symbols: ['pk', 'imppk'], ratio: 0.00909218},
	{names: ['imperial quart', 'imperial quarts'], symbols: ['imp qt', 'impqt'], ratio: 0.0011365225},
	{names: ['imperial gallon', 'imperial gallons'], symbols: ['imp gal', 'impgal'], ratio: 0.00454609},
	{names: ['imperial pint', 'imperial pints'], symbols: ['imp pt', 'imppt'], ratio: 0.00056826125},
	{names: ['gill', 'gills'], symbols: ['gi', 'impgi'], ratio: 0.0001420653125},
	{names: ['imperial fluid ounce', 'imperial fluid ounces'], symbols: ['imp fl oz', 'impoz'], ratio: 2.84130625e-5},
	{names: ['US barrel', 'US barrels'], symbols: ['US bbl', 'U.S. bbl', 'USbbl', 'usbbl', 'U.S.bbl'], ratio: 0.164},
	{names: ['barrel', 'barrels'], symbols: ['bbl', 'oilbbl'], ratio: 1 / 6.2898},
	{names: ['US beer barrel', 'US beer barrels'], symbols: ['USbeerbbl', 'usbeerbbl', 'U.S.beerbbl'], ratio: 0.117},
	{names: ['US gallon', 'US gallons'], symbols: ['US gal', 'U.S. gal', 'USgal', 'usgal', 'U.S.gal'], ratio: 1 / 264.1721},
	{names: ['US quart', 'US quarts'], symbols: ['US qt', 'U.S. qt', 'USqt', 'usqt', 'U.S.qt'], ratio: 9.46352946e-4},
	{names: ['US pint', 'US pints'], symbols: ['US pt', 'U.S. pt', 'USpt', 'uspt', 'U.S.pt'], ratio: 4.73176473e-4},
	{names: ['US gill', 'US gills'], symbols: ['USgi', 'usgi', 'U.S.gi'], ratio: 1.18e-4},
	{names: ['US fluid ounce', 'US fluid ounces'], symbols: ['US fl oz', 'USoz', 'USfloz', 'usoz', 'usfloz', 'U.S.oz', 'U.S.floz'], ratio: 29.5735295625e-6},
	{
		names: ['US dry barrel', 'US dry barrels'],
		symbols: [
			'US dry bbl',
			'U.S. dry bbl',
			'USdrybbl',
			'usdrybbl',
			'drybbl',
			'U.S.drybbl',
			'US kenning',
			'US kennings',
			'U.S. kenning',
			'USkenning',
			'U.S.kenning',
			'uskenning'
		],
		ratio: 0.12
	},
	{
		names: ['US bushel', 'US bushels'],
		symbols: ['US bsh', 'U.S. bsh', 'USbsh', 'usbsh', 'U.S.bsh', 'US bu', 'U.S. bu', 'USbu', 'usbu', 'U.S.bu'],
		ratio: 3.52391e-2
	},
	{names: ['US peck'], symbols: ['US pk', 'U.S. pk', 'Uspk', 'uspk', 'U.S.pk'], ratio: 9.09218e-3},
	{names: ['US dry gallon'], symbols: ['US dry gal', 'U.S. dry gal', 'USdrygal', 'usdrygal', 'drygal', 'U.S.drygal'], ratio: 4.40488377086e-3},
	{names: ['US dry quart'], symbols: ['US dry qt', 'U.S. dry qt', 'USdryqt', 'usdryqt', 'dryqt', 'U.S.dryqt'], ratio: 0.946352946e-3},
	{names: ['US dry pint'], symbols: ['US dry pt', 'U.S. dry pt', 'USdrypt', 'U.S.drypt', 'usdrypt', 'drypt'], ratio: 33.6003125}
];
