import {ratioer} from '../util';

/**
 * Conversions for length.
 * @private
 */
export const length = {
	meter: ratioer(1),
	meters: ratioer(1),
	metre: ratioer(1),
	metres: ratioer(1),
	m: ratioer(1),

	petameter: ratioer(1e15),
	petametre: ratioer(1e15),
	petameters: ratioer(1e15),
	petametres: ratioer(1e15),
	Pm: ratioer(1e15),

	terameter: ratioer(1e12),
	terametre: ratioer(1e12),
	terameters: ratioer(1e12),
	terametres: ratioer(1e12),
	Tm: ratioer(1e12),

	gigameter: ratioer(1e9),
	gigametre: ratioer(1e9),
	gigameters: ratioer(1e9),
	gigametres: ratioer(1e9),
	Gm: ratioer(1e9),

	megameter: ratioer(1e6),
	megametre: ratioer(1e6),
	megameters: ratioer(1e6),
	megametres: ratioer(1e6),
	Mm: ratioer(1e6),

	kilometer: ratioer(1e3),
	kilometre: ratioer(1e3),
	kilometers: ratioer(1e3),
	kilometres: ratioer(1e3),
	km: ratioer(1e3),

	hectometer: ratioer(1e2),
	hectometre: ratioer(1e2),
	hectometers: ratioer(1e2),
	hectometres: ratioer(1e2),
	hm: ratioer(1e2),

	decameter: ratioer(10),
	decametre: ratioer(10),
	decameters: ratioer(10),
	decametres: ratioer(10),
	dam: ratioer(10),

	decimeter: ratioer(1e-1),
	decimetre: ratioer(1e-1),
	decimeters: ratioer(1e-1),
	decimetres: ratioer(1e-1),
	dm: ratioer(1e-1),

	centimeter: ratioer(1e-2),
	centimetre: ratioer(1e-2),
	centimeters: ratioer(1e-2),
	centimetres: ratioer(1e-2),
	cm: ratioer(1e-2),

	millimeter: ratioer(1e-3),
	millimetre: ratioer(1e-3),
	millimeters: ratioer(1e-3),
	millimetres: ratioer(1e-3),
	mm: ratioer(1e-3),

	micrometer: ratioer(1e-7),
	micrometre: ratioer(1e-7),
	micrometers: ratioer(1e-7),
	micrometres: ratioer(1e-7),
	μm: ratioer(1e-7),

	nanometer: ratioer(1e-9),
	nanometre: ratioer(1e-9),
	nanometers: ratioer(1e-9),
	nanometres: ratioer(1e-9),
	nm: ratioer(1e-9),

	picometer: ratioer(1e-12),
	picometre: ratioer(1e-12),
	picometers: ratioer(1e-12),
	picometres: ratioer(1e-12),
	pm: ratioer(1e-12),

	femtometer: ratioer(1e-15),
	femtometre: ratioer(1e-15),
	femtometers: ratioer(1e-15),
	femtometres: ratioer(1e-15),
	fm: ratioer(1e-15),

	foot: ratioer(0.3048),
	feet: ratioer(0.3048),
	ft: ratioer(0.3048),

	inch: ratioer(0.0254),
	inches: ratioer(0.0254),
	in: ratioer(0.0254),

	yard: ratioer(0.9144),
	yards: ratioer(0.9144),
	yd: ratioer(0.9144),

	mile: ratioer(1609.344),
	miles: ratioer(1609.344),
	mi: ratioer(1609.344),

	'nautical mile': ratioer(1852),
	'nautical miles': ratioer(1852),
	M: ratioer(1852),
	NM: ratioer(1852),
	nmi: ratioer(1852)
};
