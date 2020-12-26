import {unitFamilies} from '../util';

/**
 * Conversions for length.
 * @private
 */
const length = {
	meter: [unitFamilies.Length, 1, 0],
	meters: [unitFamilies.Length, 1, 0],
	metre: [unitFamilies.Length, 1, 0],
	metres: [unitFamilies.Length, 1, 0],
	m: [unitFamilies.Length, 1, 0],

	petameter: [unitFamilies.Length, 1e15, 0],
	petametre: [unitFamilies.Length, 1e15, 0],
	petameters: [unitFamilies.Length, 1e15, 0],
	petametres: [unitFamilies.Length, 1e15, 0],
	Pm: [unitFamilies.Length, 1e15, 0],

	terameter: [unitFamilies.Length, 1e12, 0],
	terametre: [unitFamilies.Length, 1e12, 0],
	terameters: [unitFamilies.Length, 1e12, 0],
	terametres: [unitFamilies.Length, 1e12, 0],
	Tm: [unitFamilies.Length, 1e12, 0],

	gigameter: [unitFamilies.Length, 1e9, 0],
	gigametre: [unitFamilies.Length, 1e9, 0],
	gigameters: [unitFamilies.Length, 1e9, 0],
	gigametres: [unitFamilies.Length, 1e9, 0],
	Gm: [unitFamilies.Length, 1e9, 0],

	megameter: [unitFamilies.Length, 1e6, 0],
	megametre: [unitFamilies.Length, 1e6, 0],
	megameters: [unitFamilies.Length, 1e6, 0],
	megametres: [unitFamilies.Length, 1e6, 0],
	Mm: [unitFamilies.Length, 1e6, 0],

	kilometer: [unitFamilies.Length, 1e3, 0],
	kilometre: [unitFamilies.Length, 1e3, 0],
	kilometers: [unitFamilies.Length, 1e3, 0],
	kilometres: [unitFamilies.Length, 1e3, 0],
	km: [unitFamilies.Length, 1e3, 0],

	hectometer: [unitFamilies.Length, 1e2, 0],
	hectometre: [unitFamilies.Length, 1e2, 0],
	hectometers: [unitFamilies.Length, 1e2, 0],
	hectometres: [unitFamilies.Length, 1e2, 0],
	hm: [unitFamilies.Length, 1e2, 0],

	decameter: [unitFamilies.Length, 10, 0],
	decametre: [unitFamilies.Length, 10, 0],
	decameters: [unitFamilies.Length, 10, 0],
	decametres: [unitFamilies.Length, 10, 0],
	dam: [unitFamilies.Length, 10, 0],

	decimeter: [unitFamilies.Length, 1e-1, 0],
	decimetre: [unitFamilies.Length, 1e-1, 0],
	decimeters: [unitFamilies.Length, 1e-1, 0],
	decimetres: [unitFamilies.Length, 1e-1, 0],
	dm: [unitFamilies.Length, 1e-1, 0],

	centimeter: [unitFamilies.Length, 1e-2, 0],
	centimetre: [unitFamilies.Length, 1e-2, 0],
	centimeters: [unitFamilies.Length, 1e-2, 0],
	centimetres: [unitFamilies.Length, 1e-2, 0],
	cm: [unitFamilies.Length, 1e-2, 0],

	millimeter: [unitFamilies.Length, 1e-3, 0],
	millimetre: [unitFamilies.Length, 1e-3, 0],
	millimeters: [unitFamilies.Length, 1e-3, 0],
	millimetres: [unitFamilies.Length, 1e-3, 0],
	mm: [unitFamilies.Length, 1e-3, 0],

	micrometer: [unitFamilies.Length, 1e-7, 0],
	micrometre: [unitFamilies.Length, 1e-7, 0],
	micrometers: [unitFamilies.Length, 1e-7, 0],
	micrometres: [unitFamilies.Length, 1e-7, 0],
	μm: [unitFamilies.Length, 1e-7, 0],

	nanometer: [unitFamilies.Length, 1e-9, 0],
	nanometre: [unitFamilies.Length, 1e-9, 0],
	nanometers: [unitFamilies.Length, 1e-9, 0],
	nanometres: [unitFamilies.Length, 1e-9, 0],
	nm: [unitFamilies.Length, 1e-9, 0],

	picometer: [unitFamilies.Length, 1e-12, 0],
	picometre: [unitFamilies.Length, 1e-12, 0],
	picometers: [unitFamilies.Length, 1e-12, 0],
	picometres: [unitFamilies.Length, 1e-12, 0],
	pm: [unitFamilies.Length, 1e-12, 0],

	femtometer: [unitFamilies.Length, 1e-15, 0],
	femtometre: [unitFamilies.Length, 1e-15, 0],
	femtometers: [unitFamilies.Length, 1e-15, 0],
	femtometres: [unitFamilies.Length, 1e-15, 0],
	fm: [unitFamilies.Length, 1e-15, 0],

	foot: [unitFamilies.Length, 0.3048, 0],
	feet: [unitFamilies.Length, 0.3048, 0],
	ft: [unitFamilies.Length, 0.3048, 0],

	inch: [unitFamilies.Length, 0.0254, 0],
	inches: [unitFamilies.Length, 0.0254, 0],
	in: [unitFamilies.Length, 0.0254, 0],

	yard: [unitFamilies.Length, 0.9144, 0],
	yards: [unitFamilies.Length, 0.9144, 0],
	yd: [unitFamilies.Length, 0.9144, 0],

	mile: [unitFamilies.Length, 1609.344, 0],
	miles: [unitFamilies.Length, 1609.344, 0],
	mi: [unitFamilies.Length, 1609.344, 0],

	'nautical mile': [unitFamilies.Length, 1852, 0],
	'nautical miles': [unitFamilies.Length, 1852, 0],
	M: [unitFamilies.Length, 1852, 0],
	NM: [unitFamilies.Length, 1852, 0],
	nmi: [unitFamilies.Length, 1852, 0]
} as const;

export default length;
