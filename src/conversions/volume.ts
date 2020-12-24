import {ratioer} from '../util';

/**
 * Conversions for volume.
 * @private
 */
export const volume = {
	//#region SI
	'cubic meter': ratioer(1),
	'cubic meters': ratioer(1),
	'cubic metre': ratioer(1),
	'cubic metres': ratioer(1),
	'm³': ratioer(1),
	m3: ratioer(1),

	'cubic kilometer': ratioer(1e3),
	'cubic kilometre': ratioer(1e3),
	'cubic kilometers': ratioer(1e3),
	'cubic kilometres': ratioer(1e3),
	'km³': ratioer(1e3),
	km3: ratioer(1e3),

	'cubic hectometer': ratioer(1e6),
	'cubic hectometre': ratioer(1e6),
	'cubic hectometers': ratioer(1e6),
	'cubic hectometres': ratioer(1e6),
	'hm³': ratioer(1e6),
	hm3: ratioer(1e6),

	'cubic decameter': ratioer(10),
	'cubic decametre': ratioer(10),
	'cubic decameters': ratioer(10),
	'cubic decametres': ratioer(10),
	'dam³': ratioer(10),
	dam3: ratioer(10),

	'cubic decimeter': ratioer(1e-1),
	'cubic decimetre': ratioer(1e-1),
	'cubic decimeters': ratioer(1e-1),
	'cubic decimetres': ratioer(1e-1),
	'dm³': ratioer(1e-1),
	dm3: ratioer(1e-1),

	'cubic centimeter': ratioer(1e-6),
	'cubic centimetre': ratioer(1e-6),
	'cubic centimeters': ratioer(1e-6),
	'cubic centimetres': ratioer(1e-6),
	'cm³': ratioer(1e-6),
	cc: ratioer(1e-6),
	cm3: ratioer(1e-6),

	'cubic millimeter': ratioer(1e-3),
	'cubic millimetre': ratioer(1e-3),
	'cubic millimeters': ratioer(1e-3),
	'cubic millimetres': ratioer(1e-3),
	'mm³': ratioer(1e-3),
	mm3: ratioer(1e-3),
	//#endregion

	//#region non-SI metric
	gigaliter: ratioer(1e6),
	gigalitre: ratioer(1e6),
	gigaliters: ratioer(1e6),
	gigalitres: ratioer(1e6),
	Gl: ratioer(1e6),
	GL: ratioer(1e6),

	megaliter: ratioer(1e3),
	megalitre: ratioer(1e3),
	megaliters: ratioer(1e3),
	megalitres: ratioer(1e3),
	Ml: ratioer(1e3),
	ML: ratioer(1e3),

	kiloliter: ratioer(1),
	kilolitre: ratioer(1),
	kiloliters: ratioer(1),
	kilolitres: ratioer(1),
	kl: ratioer(1),
	kL: ratioer(1),

	hectoliter: ratioer(1e-1),
	hectolitre: ratioer(1e-1),
	hectoliters: ratioer(1e-1),
	hectolitres: ratioer(1e-1),
	hl: ratioer(1e-1),
	hL: ratioer(1e-1),

	decaliter: ratioer(1e-2),
	decalitre: ratioer(1e-2),
	decaliters: ratioer(1e-2),
	decalitres: ratioer(1e-2),
	dal: ratioer(1e-2),
	daL: ratioer(1e-2),

	liter: ratioer(1e-3),
	litre: ratioer(1e-3),
	liters: ratioer(1e-3),
	litres: ratioer(1e-3),
	l: ratioer(1e-3),
	L: ratioer(1e-3),

	deciliter: ratioer(1e-4),
	decilitre: ratioer(1e-4),
	deciliters: ratioer(1e-4),
	decilitres: ratioer(1e-4),
	dl: ratioer(1e-4),
	dL: ratioer(1e-4),

	centiliter: ratioer(1e-5),
	centilitre: ratioer(1e-5),
	centiliters: ratioer(1e-5),
	centilitres: ratioer(1e-5),
	cl: ratioer(1e-5),
	cL: ratioer(1e-5),

	milliliter: ratioer(1e-6),
	millilitre: ratioer(1e-6),
	milliliters: ratioer(1e-6),
	millilitres: ratioer(1e-6),
	ml: ratioer(1e-6),
	mL: ratioer(1e-6),

	microliter: ratioer(1e9),
	microlitre: ratioer(1e9),
	microliters: ratioer(1e9),
	microlitres: ratioer(1e9),
	μl: ratioer(1e9),
	μL: ratioer(1e9),

	stere: ratioer(1),
	steres: ratioer(1),
	//#endregion

	//#region Imperial & US customary
	'cubic mile': ratioer(4.2e3),
	'cubic miles': ratioer(4.2e3),
	'cu mi': ratioer(4.2e3),
	cumi: ratioer(4.2e3),
	mi3: ratioer(4.2e3),

	'acre-foot': ratioer(1233.48183754752),
	'acre-feet': ratioer(1233.48183754752),
	'ac⋅ft': ratioer(1233.48183754752),
	'ac ft': ratioer(1233.48183754752),

	'cubic yard': ratioer(0.76),
	'cubic yards': ratioer(0.76),
	'cu yd': ratioer(0.76),
	cuyd: ratioer(0.76),
	yd3: ratioer(0.76),

	'cubic foot': ratioer(0.028),
	'cubic feet': ratioer(0.028),
	'cu ft': ratioer(0.028),
	cuft: ratioer(0.028),
	ft3: ratioer(0.028),
	cufoot: ratioer(0.028),
	foot3: ratioer(0.028),

	'board foot': ratioer(0.002359737),
	'board feet': ratioer(0.002359737),

	'cubic inch': ratioer(0.000016387064),
	'cubic inches': ratioer(0.000016387064),
	'cu in': ratioer(0.000016387064),
	cuin: ratioer(0.000016387064),
	in3: ratioer(0.000016387064),

	'measurement ton': ratioer(1.133),
	'measurement tons': ratioer(1.133),
	MTON: ratioer(1.133),
	//#endregion

	//#region Imperial
	// https://en.wikipedia.org/wiki/Imperial_units#Volume
	'imperial barrel': ratioer(0.16),
	'imperial barrels': ratioer(0.16),
	'imp bbl': ratioer(0.16),
	impbbl: ratioer(0.16),

	kilderkin: ratioer(0.08318),
	kilderkins: ratioer(0.08318),

	firkin: ratioer(0.041),
	firkins: ratioer(0.041),

	'imperial bushel': ratioer(0.03636872),
	'imperial bushels': ratioer(0.03636872),
	'imp bsh': ratioer(0.03636872),
	'imp bu': ratioer(0.03636872),
	impbsh: ratioer(0.03636872),
	impbu: ratioer(0.03636872),

	'imperial peck': ratioer(0.00909218),
	'imperial pecks': ratioer(0.00909218),
	pk: ratioer(0.00909218),
	imppk: ratioer(0.00909218),

	'imperial quart': ratioer(0.0011365225),
	'imperial quarts': ratioer(0.0011365225),
	'imp qt': ratioer(0.0011365225),
	impqt: ratioer(0.0011365225),

	'imperial gallon': ratioer(0.00454609),
	'imperial gallons': ratioer(0.00454609),
	'imp gal': ratioer(0.00454609),
	impgal: ratioer(0.00454609),

	'imperial pint': ratioer(0.00056826125),
	'imperial pints': ratioer(0.00056826125),
	'imp pt': ratioer(0.00056826125),
	imppt: ratioer(0.00056826125),

	gill: ratioer(0.0001420653125),
	gills: ratioer(0.0001420653125),
	gi: ratioer(0.0001420653125),
	impgi: ratioer(0.0001420653125),

	'imperial fluid ounce': ratioer(2.84130625e-5),
	'imperial fluid ounces': ratioer(2.84130625e-5),
	'imp fl oz': ratioer(2.84130625e-5),
	impoz: ratioer(2.84130625e-5),
	//#endregion

	//#region US customary liquid measure
	'US barrel': ratioer(0.164),
	'US barrels': ratioer(0.164),
	'US bbl': ratioer(0.164),
	'U.S. bbl': ratioer(0.164),
	USbbl: ratioer(0.164),
	usbbl: ratioer(0.164),
	'U.S.bbl': ratioer(0.164),

	barrel: ratioer(1 / 6.2898),
	barrels: ratioer(1 / 6.2898),
	bbl: ratioer(1 / 6.2898),
	oilbbl: ratioer(1 / 6.2898),

	'US beer barrel': ratioer(0.117),
	'US beer barrels': ratioer(0.117),
	USbeerbbl: ratioer(0.117),
	usbeerbbl: ratioer(0.117),
	'U.S.beerbbl': ratioer(0.117),

	'US gallon': ratioer(1 / 264.1721),
	'US gallons': ratioer(1 / 264.1721),
	'US gal': ratioer(1 / 264.1721),
	'U.S. gal': ratioer(1 / 264.1721),
	USgal: ratioer(1 / 264.1721),
	usgal: ratioer(1 / 264.1721),
	'U.S.gal': ratioer(1 / 264.1721),

	'US quart': ratioer(9.46352946e-4),
	'US quarts': ratioer(9.46352946e-4),
	'US qt': ratioer(9.46352946e-4),
	'U.S. qt': ratioer(9.46352946e-4),
	USqt: ratioer(9.46352946e-4),
	usqt: ratioer(9.46352946e-4),
	'U.S.qt': ratioer(9.46352946e-4),

	'US pint': ratioer(4.73176473e-4),
	'US pints': ratioer(4.73176473e-4),
	'US pt': ratioer(4.73176473e-4),
	'U.S. pt': ratioer(4.73176473e-4),
	USpt: ratioer(4.73176473e-4),
	uspt: ratioer(4.73176473e-4),
	'U.S.pt': ratioer(4.73176473e-4),

	'US gill': ratioer(1.18e-4),
	'US gills': ratioer(1.18e-4),
	USgi: ratioer(1.18e-4),
	usgi: ratioer(1.18e-4),
	'U.S.gi': ratioer(1.18e-4),

	'US fluid ounce': ratioer(29.5735295625e-6),
	'US fluid ounces': ratioer(29.5735295625e-6),
	'US fl oz': ratioer(29.5735295625e-6),
	USoz: ratioer(29.5735295625e-6),
	USflox: ratioer(29.5735295625e-6),
	usoz: ratioer(29.5735295625e-6),
	usfloz: ratioer(29.5735295625e-6),
	'U.S.oz': ratioer(29.5735295625e-6),
	'U.S.floz': ratioer(29.5735295625e-6),
	//#endregion

	//#region US customary dry measure
	'US dry barrel': ratioer(0.12),
	'US dry barrels': ratioer(0.12),
	'US dry bbl': ratioer(0.12),
	'U.S. dry bbl': ratioer(0.12),
	USdrybbl: ratioer(0.12),
	usdrybbl: ratioer(0.12),
	drybbl: ratioer(0.12),
	'U.S.drybbl': ratioer(0.12),

	'US bushel': ratioer(3.52391e-2),
	'US bushels': ratioer(3.52391e-2),
	'US bsh': ratioer(3.52391e-2),
	'U.S. bsh': ratioer(3.52391e-2),
	USbsh: ratioer(3.52391e-2),
	usbsh: ratioer(3.52391e-2),
	'U.S.bsh': ratioer(3.52391e-2),
	'US bu': ratioer(3.52391e-2),
	'U.S. bu': ratioer(3.52391e-2),
	USbu: ratioer(3.52391e-2),
	usbu: ratioer(3.52391e-2),
	'U.S.bu': ratioer(3.52391e-2),

	'US kenning': ratioer(0.12),
	'US kennings': ratioer(0.12),
	'U.S. kenning': ratioer(0.12),
	USkenning: ratioer(0.12),
	'U.S.kenning': ratioer(0.12),
	uskenning: ratioer(0.12),

	'US peck': ratioer(9.09218e-3),
	'US pk': ratioer(9.09218e-3),
	'U.S. pk': ratioer(9.09218e-3),
	Uspk: ratioer(9.09218e-3),
	uspk: ratioer(9.09218e-3),
	'U.S.pk': ratioer(9.09218e-3),

	'US dry gallon': ratioer(4.40488377086e-3),
	'US dry gal': ratioer(4.40488377086e-3),
	'U.S. dry gal': ratioer(4.40488377086e-3),
	USdrygal: ratioer(4.40488377086e-3),
	usdrygal: ratioer(4.40488377086e-3),
	drygal: ratioer(4.40488377086e-3),
	'U.S.drygal': ratioer(4.40488377086e-3),

	'US dry quart': ratioer(0.946352946e-3),
	'US dry qt': ratioer(0.946352946e-3),
	'U.S. dry qt': ratioer(0.946352946e-3),
	USdryqt: ratioer(0.946352946e-3),
	usdryqt: ratioer(0.946352946e-3),
	dryqt: ratioer(0.946352946e-3),
	'U.S.dryqt': ratioer(0.946352946e-3),

	'US dry pint': ratioer(33.6003125),
	'US dry pt': ratioer(33.6003125),
	'U.S. dry pt': ratioer(33.6003125),
	USdrypt: ratioer(33.6003125),
	'U.S.drypt': ratioer(33.6003125),
	usdrypt: ratioer(33.6003125),
	drypt: ratioer(33.6003125)
	//#endregion
};
