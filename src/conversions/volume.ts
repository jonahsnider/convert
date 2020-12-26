import {unitFamilies} from '../util';

/**
 * Conversions for volume.
 * @private
 */
const volume = {
	//#region SI
	'cubic meter': [unitFamilies.Volume, 1, 0],
	'cubic meters': [unitFamilies.Volume, 1, 0],
	'cubic metre': [unitFamilies.Volume, 1, 0],
	'cubic metres': [unitFamilies.Volume, 1, 0],
	'm³': [unitFamilies.Volume, 1, 0],
	m3: [unitFamilies.Volume, 1, 0],

	'cubic kilometer': [unitFamilies.Volume, 1e3, 0],
	'cubic kilometre': [unitFamilies.Volume, 1e3, 0],
	'cubic kilometers': [unitFamilies.Volume, 1e3, 0],
	'cubic kilometres': [unitFamilies.Volume, 1e3, 0],
	'km³': [unitFamilies.Volume, 1e3, 0],
	km3: [unitFamilies.Volume, 1e3, 0],

	'cubic hectometer': [unitFamilies.Volume, 1e6, 0],
	'cubic hectometre': [unitFamilies.Volume, 1e6, 0],
	'cubic hectometers': [unitFamilies.Volume, 1e6, 0],
	'cubic hectometres': [unitFamilies.Volume, 1e6, 0],
	'hm³': [unitFamilies.Volume, 1e6, 0],
	hm3: [unitFamilies.Volume, 1e6, 0],

	'cubic decameter': [unitFamilies.Volume, 10, 0],
	'cubic decametre': [unitFamilies.Volume, 10, 0],
	'cubic decameters': [unitFamilies.Volume, 10, 0],
	'cubic decametres': [unitFamilies.Volume, 10, 0],
	'dam³': [unitFamilies.Volume, 10, 0],
	dam3: [unitFamilies.Volume, 10, 0],

	'cubic decimeter': [unitFamilies.Volume, 1e-1, 0],
	'cubic decimetre': [unitFamilies.Volume, 1e-1, 0],
	'cubic decimeters': [unitFamilies.Volume, 1e-1, 0],
	'cubic decimetres': [unitFamilies.Volume, 1e-1, 0],
	'dm³': [unitFamilies.Volume, 1e-1, 0],
	dm3: [unitFamilies.Volume, 1e-1, 0],

	'cubic centimeter': [unitFamilies.Volume, 1e-6, 0],
	'cubic centimetre': [unitFamilies.Volume, 1e-6, 0],
	'cubic centimeters': [unitFamilies.Volume, 1e-6, 0],
	'cubic centimetres': [unitFamilies.Volume, 1e-6, 0],
	'cm³': [unitFamilies.Volume, 1e-6, 0],
	cc: [unitFamilies.Volume, 1e-6, 0],
	cm3: [unitFamilies.Volume, 1e-6, 0],

	'cubic millimeter': [unitFamilies.Volume, 1e-3, 0],
	'cubic millimetre': [unitFamilies.Volume, 1e-3, 0],
	'cubic millimeters': [unitFamilies.Volume, 1e-3, 0],
	'cubic millimetres': [unitFamilies.Volume, 1e-3, 0],
	'mm³': [unitFamilies.Volume, 1e-3, 0],
	mm3: [unitFamilies.Volume, 1e-3, 0],
	//#endregion

	//#region non-SI metric
	gigaliter: [unitFamilies.Volume, 1e6, 0],
	gigalitre: [unitFamilies.Volume, 1e6, 0],
	gigaliters: [unitFamilies.Volume, 1e6, 0],
	gigalitres: [unitFamilies.Volume, 1e6, 0],
	Gl: [unitFamilies.Volume, 1e6, 0],
	GL: [unitFamilies.Volume, 1e6, 0],

	megaliter: [unitFamilies.Volume, 1e3, 0],
	megalitre: [unitFamilies.Volume, 1e3, 0],
	megaliters: [unitFamilies.Volume, 1e3, 0],
	megalitres: [unitFamilies.Volume, 1e3, 0],
	Ml: [unitFamilies.Volume, 1e3, 0],
	ML: [unitFamilies.Volume, 1e3, 0],

	kiloliter: [unitFamilies.Volume, 1, 0],
	kilolitre: [unitFamilies.Volume, 1, 0],
	kiloliters: [unitFamilies.Volume, 1, 0],
	kilolitres: [unitFamilies.Volume, 1, 0],
	kl: [unitFamilies.Volume, 1, 0],
	kL: [unitFamilies.Volume, 1, 0],

	hectoliter: [unitFamilies.Volume, 1e-1, 0],
	hectolitre: [unitFamilies.Volume, 1e-1, 0],
	hectoliters: [unitFamilies.Volume, 1e-1, 0],
	hectolitres: [unitFamilies.Volume, 1e-1, 0],
	hl: [unitFamilies.Volume, 1e-1, 0],
	hL: [unitFamilies.Volume, 1e-1, 0],

	decaliter: [unitFamilies.Volume, 1e-2, 0],
	decalitre: [unitFamilies.Volume, 1e-2, 0],
	decaliters: [unitFamilies.Volume, 1e-2, 0],
	decalitres: [unitFamilies.Volume, 1e-2, 0],
	dal: [unitFamilies.Volume, 1e-2, 0],
	daL: [unitFamilies.Volume, 1e-2, 0],

	liter: [unitFamilies.Volume, 1e-3, 0],
	litre: [unitFamilies.Volume, 1e-3, 0],
	liters: [unitFamilies.Volume, 1e-3, 0],
	litres: [unitFamilies.Volume, 1e-3, 0],
	l: [unitFamilies.Volume, 1e-3, 0],
	L: [unitFamilies.Volume, 1e-3, 0],

	deciliter: [unitFamilies.Volume, 1e-4, 0],
	decilitre: [unitFamilies.Volume, 1e-4, 0],
	deciliters: [unitFamilies.Volume, 1e-4, 0],
	decilitres: [unitFamilies.Volume, 1e-4, 0],
	dl: [unitFamilies.Volume, 1e-4, 0],
	dL: [unitFamilies.Volume, 1e-4, 0],

	centiliter: [unitFamilies.Volume, 1e-5, 0],
	centilitre: [unitFamilies.Volume, 1e-5, 0],
	centiliters: [unitFamilies.Volume, 1e-5, 0],
	centilitres: [unitFamilies.Volume, 1e-5, 0],
	cl: [unitFamilies.Volume, 1e-5, 0],
	cL: [unitFamilies.Volume, 1e-5, 0],

	milliliter: [unitFamilies.Volume, 1e-6, 0],
	millilitre: [unitFamilies.Volume, 1e-6, 0],
	milliliters: [unitFamilies.Volume, 1e-6, 0],
	millilitres: [unitFamilies.Volume, 1e-6, 0],
	ml: [unitFamilies.Volume, 1e-6, 0],
	mL: [unitFamilies.Volume, 1e-6, 0],

	microliter: [unitFamilies.Volume, 1e9, 0],
	microlitre: [unitFamilies.Volume, 1e9, 0],
	microliters: [unitFamilies.Volume, 1e9, 0],
	microlitres: [unitFamilies.Volume, 1e9, 0],
	μl: [unitFamilies.Volume, 1e9, 0],
	μL: [unitFamilies.Volume, 1e9, 0],

	stere: [unitFamilies.Volume, 1, 0],
	steres: [unitFamilies.Volume, 1, 0],
	//#endregion

	//#region Imperial & US customary
	'cubic mile': [unitFamilies.Volume, 4.2e3, 0],
	'cubic miles': [unitFamilies.Volume, 4.2e3, 0],
	'cu mi': [unitFamilies.Volume, 4.2e3, 0],
	cumi: [unitFamilies.Volume, 4.2e3, 0],
	mi3: [unitFamilies.Volume, 4.2e3, 0],

	'acre-foot': [unitFamilies.Volume, 1233.48183754752, 0],
	'acre-feet': [unitFamilies.Volume, 1233.48183754752, 0],
	'ac⋅ft': [unitFamilies.Volume, 1233.48183754752, 0],
	'ac ft': [unitFamilies.Volume, 1233.48183754752, 0],

	'cubic yard': [unitFamilies.Volume, 0.76, 0],
	'cubic yards': [unitFamilies.Volume, 0.76, 0],
	'cu yd': [unitFamilies.Volume, 0.76, 0],
	cuyd: [unitFamilies.Volume, 0.76, 0],
	yd3: [unitFamilies.Volume, 0.76, 0],

	'cubic foot': [unitFamilies.Volume, 0.028, 0],
	'cubic feet': [unitFamilies.Volume, 0.028, 0],
	'cu ft': [unitFamilies.Volume, 0.028, 0],
	cuft: [unitFamilies.Volume, 0.028, 0],
	ft3: [unitFamilies.Volume, 0.028, 0],
	cufoot: [unitFamilies.Volume, 0.028, 0],
	foot3: [unitFamilies.Volume, 0.028, 0],

	'board foot': [unitFamilies.Volume, 0.002359737, 0],
	'board feet': [unitFamilies.Volume, 0.002359737, 0],

	'cubic inch': [unitFamilies.Volume, 0.000016387064, 0],
	'cubic inches': [unitFamilies.Volume, 0.000016387064, 0],
	'cu in': [unitFamilies.Volume, 0.000016387064, 0],
	cuin: [unitFamilies.Volume, 0.000016387064, 0],
	in3: [unitFamilies.Volume, 0.000016387064, 0],

	'measurement ton': [unitFamilies.Volume, 1.133, 0],
	'measurement tons': [unitFamilies.Volume, 1.133, 0],
	MTON: [unitFamilies.Volume, 1.133, 0],
	//#endregion

	//#region Imperial
	// https://en.wikipedia.org/wiki/Imperial_units#Volume
	'imperial barrel': [unitFamilies.Volume, 0.16, 0],
	'imperial barrels': [unitFamilies.Volume, 0.16, 0],
	'imp bbl': [unitFamilies.Volume, 0.16, 0],
	impbbl: [unitFamilies.Volume, 0.16, 0],

	kilderkin: [unitFamilies.Volume, 0.08318, 0],
	kilderkins: [unitFamilies.Volume, 0.08318, 0],

	firkin: [unitFamilies.Volume, 0.041, 0],
	firkins: [unitFamilies.Volume, 0.041, 0],

	'imperial bushel': [unitFamilies.Volume, 0.03636872, 0],
	'imperial bushels': [unitFamilies.Volume, 0.03636872, 0],
	'imp bsh': [unitFamilies.Volume, 0.03636872, 0],
	'imp bu': [unitFamilies.Volume, 0.03636872, 0],
	impbsh: [unitFamilies.Volume, 0.03636872, 0],
	impbu: [unitFamilies.Volume, 0.03636872, 0],

	'imperial peck': [unitFamilies.Volume, 0.00909218, 0],
	'imperial pecks': [unitFamilies.Volume, 0.00909218, 0],
	pk: [unitFamilies.Volume, 0.00909218, 0],
	imppk: [unitFamilies.Volume, 0.00909218, 0],

	'imperial quart': [unitFamilies.Volume, 0.0011365225, 0],
	'imperial quarts': [unitFamilies.Volume, 0.0011365225, 0],
	'imp qt': [unitFamilies.Volume, 0.0011365225, 0],
	impqt: [unitFamilies.Volume, 0.0011365225, 0],

	'imperial gallon': [unitFamilies.Volume, 0.00454609, 0],
	'imperial gallons': [unitFamilies.Volume, 0.00454609, 0],
	'imp gal': [unitFamilies.Volume, 0.00454609, 0],
	impgal: [unitFamilies.Volume, 0.00454609, 0],

	'imperial pint': [unitFamilies.Volume, 0.00056826125, 0],
	'imperial pints': [unitFamilies.Volume, 0.00056826125, 0],
	'imp pt': [unitFamilies.Volume, 0.00056826125, 0],
	imppt: [unitFamilies.Volume, 0.00056826125, 0],

	gill: [unitFamilies.Volume, 0.0001420653125, 0],
	gills: [unitFamilies.Volume, 0.0001420653125, 0],
	gi: [unitFamilies.Volume, 0.0001420653125, 0],
	impgi: [unitFamilies.Volume, 0.0001420653125, 0],

	'imperial fluid ounce': [unitFamilies.Volume, 2.84130625e-5, 0],
	'imperial fluid ounces': [unitFamilies.Volume, 2.84130625e-5, 0],
	'imp fl oz': [unitFamilies.Volume, 2.84130625e-5, 0],
	impoz: [unitFamilies.Volume, 2.84130625e-5, 0],
	//#endregion

	//#region US customary liquid measure
	'US barrel': [unitFamilies.Volume, 0.164, 0],
	'US barrels': [unitFamilies.Volume, 0.164, 0],
	'US bbl': [unitFamilies.Volume, 0.164, 0],
	'U.S. bbl': [unitFamilies.Volume, 0.164, 0],
	USbbl: [unitFamilies.Volume, 0.164, 0],
	usbbl: [unitFamilies.Volume, 0.164, 0],
	'U.S.bbl': [unitFamilies.Volume, 0.164, 0],

	barrel: [unitFamilies.Volume, 1 / 6.2898, 0],
	barrels: [unitFamilies.Volume, 1 / 6.2898, 0],
	bbl: [unitFamilies.Volume, 1 / 6.2898, 0],
	oilbbl: [unitFamilies.Volume, 1 / 6.2898, 0],

	'US beer barrel': [unitFamilies.Volume, 0.117, 0],
	'US beer barrels': [unitFamilies.Volume, 0.117, 0],
	USbeerbbl: [unitFamilies.Volume, 0.117, 0],
	usbeerbbl: [unitFamilies.Volume, 0.117, 0],
	'U.S.beerbbl': [unitFamilies.Volume, 0.117, 0],

	'US gallon': [unitFamilies.Volume, 1 / 264.1721, 0],
	'US gallons': [unitFamilies.Volume, 1 / 264.1721, 0],
	'US gal': [unitFamilies.Volume, 1 / 264.1721, 0],
	'U.S. gal': [unitFamilies.Volume, 1 / 264.1721, 0],
	USgal: [unitFamilies.Volume, 1 / 264.1721, 0],
	usgal: [unitFamilies.Volume, 1 / 264.1721, 0],
	'U.S.gal': [unitFamilies.Volume, 1 / 264.1721, 0],

	'US quart': [unitFamilies.Volume, 9.46352946e-4, 0],
	'US quarts': [unitFamilies.Volume, 9.46352946e-4, 0],
	'US qt': [unitFamilies.Volume, 9.46352946e-4, 0],
	'U.S. qt': [unitFamilies.Volume, 9.46352946e-4, 0],
	USqt: [unitFamilies.Volume, 9.46352946e-4, 0],
	usqt: [unitFamilies.Volume, 9.46352946e-4, 0],
	'U.S.qt': [unitFamilies.Volume, 9.46352946e-4, 0],

	'US pint': [unitFamilies.Volume, 4.73176473e-4, 0],
	'US pints': [unitFamilies.Volume, 4.73176473e-4, 0],
	'US pt': [unitFamilies.Volume, 4.73176473e-4, 0],
	'U.S. pt': [unitFamilies.Volume, 4.73176473e-4, 0],
	USpt: [unitFamilies.Volume, 4.73176473e-4, 0],
	uspt: [unitFamilies.Volume, 4.73176473e-4, 0],
	'U.S.pt': [unitFamilies.Volume, 4.73176473e-4, 0],

	'US gill': [unitFamilies.Volume, 1.18e-4, 0],
	'US gills': [unitFamilies.Volume, 1.18e-4, 0],
	USgi: [unitFamilies.Volume, 1.18e-4, 0],
	usgi: [unitFamilies.Volume, 1.18e-4, 0],
	'U.S.gi': [unitFamilies.Volume, 1.18e-4, 0],

	'US fluid ounce': [unitFamilies.Volume, 29.5735295625e-6, 0],
	'US fluid ounces': [unitFamilies.Volume, 29.5735295625e-6, 0],
	'US fl oz': [unitFamilies.Volume, 29.5735295625e-6, 0],
	USoz: [unitFamilies.Volume, 29.5735295625e-6, 0],
	USflox: [unitFamilies.Volume, 29.5735295625e-6, 0],
	usoz: [unitFamilies.Volume, 29.5735295625e-6, 0],
	usfloz: [unitFamilies.Volume, 29.5735295625e-6, 0],
	'U.S.oz': [unitFamilies.Volume, 29.5735295625e-6, 0],
	'U.S.floz': [unitFamilies.Volume, 29.5735295625e-6, 0],
	//#endregion

	//#region US customary dry measure
	'US dry barrel': [unitFamilies.Volume, 0.12, 0],
	'US dry barrels': [unitFamilies.Volume, 0.12, 0],
	'US dry bbl': [unitFamilies.Volume, 0.12, 0],
	'U.S. dry bbl': [unitFamilies.Volume, 0.12, 0],
	USdrybbl: [unitFamilies.Volume, 0.12, 0],
	usdrybbl: [unitFamilies.Volume, 0.12, 0],
	drybbl: [unitFamilies.Volume, 0.12, 0],
	'U.S.drybbl': [unitFamilies.Volume, 0.12, 0],

	'US bushel': [unitFamilies.Volume, 3.52391e-2, 0],
	'US bushels': [unitFamilies.Volume, 3.52391e-2, 0],
	'US bsh': [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S. bsh': [unitFamilies.Volume, 3.52391e-2, 0],
	USbsh: [unitFamilies.Volume, 3.52391e-2, 0],
	usbsh: [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S.bsh': [unitFamilies.Volume, 3.52391e-2, 0],
	'US bu': [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S. bu': [unitFamilies.Volume, 3.52391e-2, 0],
	USbu: [unitFamilies.Volume, 3.52391e-2, 0],
	usbu: [unitFamilies.Volume, 3.52391e-2, 0],
	'U.S.bu': [unitFamilies.Volume, 3.52391e-2, 0],

	'US kenning': [unitFamilies.Volume, 0.12, 0],
	'US kennings': [unitFamilies.Volume, 0.12, 0],
	'U.S. kenning': [unitFamilies.Volume, 0.12, 0],
	USkenning: [unitFamilies.Volume, 0.12, 0],
	'U.S.kenning': [unitFamilies.Volume, 0.12, 0],
	uskenning: [unitFamilies.Volume, 0.12, 0],

	'US peck': [unitFamilies.Volume, 9.09218e-3, 0],
	'US pk': [unitFamilies.Volume, 9.09218e-3, 0],
	'U.S. pk': [unitFamilies.Volume, 9.09218e-3, 0],
	Uspk: [unitFamilies.Volume, 9.09218e-3, 0],
	uspk: [unitFamilies.Volume, 9.09218e-3, 0],
	'U.S.pk': [unitFamilies.Volume, 9.09218e-3, 0],

	'US dry gallon': [unitFamilies.Volume, 4.40488377086e-3, 0],
	'US dry gal': [unitFamilies.Volume, 4.40488377086e-3, 0],
	'U.S. dry gal': [unitFamilies.Volume, 4.40488377086e-3, 0],
	USdrygal: [unitFamilies.Volume, 4.40488377086e-3, 0],
	usdrygal: [unitFamilies.Volume, 4.40488377086e-3, 0],
	drygal: [unitFamilies.Volume, 4.40488377086e-3, 0],
	'U.S.drygal': [unitFamilies.Volume, 4.40488377086e-3, 0],

	'US dry quart': [unitFamilies.Volume, 0.946352946e-3, 0],
	'US dry qt': [unitFamilies.Volume, 0.946352946e-3, 0],
	'U.S. dry qt': [unitFamilies.Volume, 0.946352946e-3, 0],
	USdryqt: [unitFamilies.Volume, 0.946352946e-3, 0],
	usdryqt: [unitFamilies.Volume, 0.946352946e-3, 0],
	dryqt: [unitFamilies.Volume, 0.946352946e-3, 0],
	'U.S.dryqt': [unitFamilies.Volume, 0.946352946e-3, 0],

	'US dry pint': [unitFamilies.Volume, 33.6003125, 0],
	'US dry pt': [unitFamilies.Volume, 33.6003125, 0],
	'U.S. dry pt': [unitFamilies.Volume, 33.6003125, 0],
	USdrypt: [unitFamilies.Volume, 33.6003125, 0],
	'U.S.drypt': [unitFamilies.Volume, 33.6003125, 0],
	usdrypt: [unitFamilies.Volume, 33.6003125, 0],
	drypt: [unitFamilies.Volume, 33.6003125, 0]
	//#endregion
} as const;

export default volume;
