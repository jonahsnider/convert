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

	'cubic centimeter': ratioer(1e-2),
	'cubic centimetre': ratioer(1e-2),
	'cubic centimeters': ratioer(1e-2),
	'cubic centimetres': ratioer(1e-2),
	'cm³': ratioer(1e-2),
	cc: ratioer(1e-2),
	cm3: ratioer(1e-2),

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

	megaliter: ratioer(1e6),
	megalitre: ratioer(1e6),
	megaliters: ratioer(1e6),
	megalitres: ratioer(1e6),
	Ml: ratioer(1e6),
	ML: ratioer(1e6),

	kiloliter: ratioer(1e3),
	kilolitre: ratioer(1e3),
	kiloliters: ratioer(1e3),
	kilolitres: ratioer(1e3),
	kl: ratioer(1e3),
	kL: ratioer(1e3),

	hectoliter: ratioer(1e5),
	hectolitre: ratioer(1e5),
	hectoliters: ratioer(1e5),
	hectolitres: ratioer(1e5),
	hl: ratioer(1e5),
	hL: ratioer(1e5),

	decaliter: ratioer(1e4),
	decalitre: ratioer(1e4),
	decaliters: ratioer(1e4),
	decalitres: ratioer(1e4),
	dal: ratioer(1e4),
	daL: ratioer(1e4),

	liter: ratioer(0.001),
	litre: ratioer(0.001),
	liters: ratioer(0.001),
	litres: ratioer(0.001),
	l: ratioer(0.001),
	L: ratioer(0.001),

	deciliter: ratioer(0.0001),
	decilitre: ratioer(0.0001),
	deciliters: ratioer(0.0001),
	decilitres: ratioer(0.0001),
	dl: ratioer(0.0001),
	dL: ratioer(0.0001),

	centiliter: ratioer(1e5),
	centilitre: ratioer(1e5),
	centiliters: ratioer(1e5),
	centilitres: ratioer(1e5),
	cl: ratioer(1e5),
	cL: ratioer(1e5),

	milliliter: ratioer(1e6),
	millilitre: ratioer(1e6),
	milliliters: ratioer(1e6),
	millilitres: ratioer(1e6),
	ml: ratioer(1e6),
	mL: ratioer(1e6),

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

	'cubic inch': ratioer(1.6e-1),
	'cubic inches': ratioer(1.6e-1),
	'cu in': ratioer(1.6e-1),
	cuin: ratioer(1.6e-1),
	in3: ratioer(1.6e-1),

	'measurement ton': ratioer(1.2),
	'measurement tons': ratioer(1.2),
	MTON: ratioer(1.2),
	//#endregion

	//#region Imperial
	'imperial barrel': ratioer(160),
	'imperial barrels': ratioer(160),
	'imp bbl': ratioer(160),
	impbbl: ratioer(160),

	kilderkin: ratioer(160),
	kilderkins: ratioer(160),

	firkin: ratioer(160),
	firkins: ratioer(160),

	'imperial bushel': ratioer(160),
	'imperial bushels': ratioer(160),
	'imp bsh': ratioer(160),
	'imp bu': ratioer(160),
	impbsh: ratioer(160),
	impbu: ratioer(160),

	'imperial kenning': ratioer(18),
	'imperial kennings': ratioer(18),
	kenning: ratioer(18),
	impkenning: ratioer(18),

	'imperial peck': ratioer(9.1),
	'imperial pecks': ratioer(9.1),
	pk: ratioer(9.1),
	imppk: ratioer(9.1),

	'imperial quart': ratioer(1.1),
	'imperial quarts': ratioer(1.1),
	'imp qt': ratioer(1.1),
	impqt: ratioer(1.1),

	'imperial gallon': ratioer(1 / 219.9692),
	'imperial gallons': ratioer(1 / 219.9692),
	'imp gal': ratioer(1 / 219.9692),
	impgal: ratioer(1 / 219.9692),

	'imperial pint': ratioer(0.57),
	'imperial pints': ratioer(0.57),
	'imp pt': ratioer(0.57),
	imppt: ratioer(0.57),

	gill: ratioer(4.8),
	gills: ratioer(4.8),
	gi: ratioer(4.8),
	impgi: ratioer(4.8),

	'imperial fluid ounce': ratioer(123),
	'imperial fluid ounces': ratioer(123),
	'imp fl oz': ratioer(123),
	impoz: ratioer(123),
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

	'US pint': ratioer(4.73176473e8),
	'US pints': ratioer(4.73176473e8),
	'US pt': ratioer(4.73176473e8),
	'U.S. pt': ratioer(4.73176473e8),
	USpt: ratioer(4.73176473e8),
	uspt: ratioer(4.73176473e8),
	'U.S.pt': ratioer(4.73176473e8),

	'US gill': ratioer(1.18e8),
	'US gills': ratioer(1.18e8),
	USgi: ratioer(1.18e8),
	usgi: ratioer(1.18e8),
	'U.S.gi': ratioer(1.18e8),

	'US fluid ounce': ratioer(29.5735295625e6),
	'US fluid ounces': ratioer(29.5735295625e6),
	'US fl oz': ratioer(29.5735295625e6),
	USoz: ratioer(29.5735295625e6),
	USflox: ratioer(29.5735295625e6),
	usoz: ratioer(29.5735295625e6),
	usfloz: ratioer(29.5735295625e6),
	'U.S.oz': ratioer(29.5735295625e6),
	'U.S.floz': ratioer(29.5735295625e6),
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
