import {unitFamilies} from '../util';

/**
 * Conversions for pressure.
 * @private
 */
const pressure = {
	pascal: [unitFamilies.Pressure, 1, 0],
	pascals: [unitFamilies.Pressure, 1, 0],
	Pa: [unitFamilies.Pressure, 1, 0],

	femtopascal: [unitFamilies.Pressure, 1e-15, 0],
	femtopascals: [unitFamilies.Pressure, 1e-15, 0],
	fPa: [unitFamilies.Pressure, 1e-15, 0],

	picopascal: [unitFamilies.Pressure, 1e-12, 0],
	picopascals: [unitFamilies.Pressure, 1e-12, 0],
	pPa: [unitFamilies.Pressure, 1e-12, 0],

	nanopascal: [unitFamilies.Pressure, 1e-9, 0],
	nanopascals: [unitFamilies.Pressure, 1e-9, 0],
	nPa: [unitFamilies.Pressure, 1e-9, 0],

	micropascal: [unitFamilies.Pressure, 1e-6, 0],
	micropascals: [unitFamilies.Pressure, 1e-6, 0],
	μPa: [unitFamilies.Pressure, 1e-6, 0],

	millipascal: [unitFamilies.Pressure, 1e-3, 0],
	millipascals: [unitFamilies.Pressure, 1e-3, 0],
	mPa: [unitFamilies.Pressure, 1e-3, 0],

	centipascal: [unitFamilies.Pressure, 1e-2, 0],
	centipascals: [unitFamilies.Pressure, 1e-2, 0],
	cPa: [unitFamilies.Pressure, 1e-2, 0],

	decipascal: [unitFamilies.Pressure, 0.1, 0],
	decipascals: [unitFamilies.Pressure, 0.1, 0],
	dPa: [unitFamilies.Pressure, 0.1, 0],

	decapascal: [unitFamilies.Pressure, 10, 0],
	decapascals: [unitFamilies.Pressure, 10, 0],
	daPa: [unitFamilies.Pressure, 10, 0],

	hectopascal: [unitFamilies.Pressure, 1e2, 0],
	hectopascals: [unitFamilies.Pressure, 1e2, 0],
	hPa: [unitFamilies.Pressure, 1e2, 0],

	kilopascal: [unitFamilies.Pressure, 1e3, 0],
	kilopascals: [unitFamilies.Pressure, 1e3, 0],
	kPa: [unitFamilies.Pressure, 1e3, 0],

	megapascal: [unitFamilies.Pressure, 1e6, 0],
	megapascals: [unitFamilies.Pressure, 1e6, 0],
	MPa: [unitFamilies.Pressure, 1e6, 0],

	gigapascal: [unitFamilies.Pressure, 1e9, 0],
	gigapascals: [unitFamilies.Pressure, 1e9, 0],
	GPa: [unitFamilies.Pressure, 1e9, 0],

	terapascal: [unitFamilies.Pressure, 1e12, 0],
	terapascals: [unitFamilies.Pressure, 1e12, 0],
	TPa: [unitFamilies.Pressure, 1e12, 0],

	petapascal: [unitFamilies.Pressure, 1e15, 0],
	petapascals: [unitFamilies.Pressure, 1e15, 0],
	PPa: [unitFamilies.Pressure, 1e15, 0],

	bar: [unitFamilies.Pressure, 1e5, 0],

	femtobar: [unitFamilies.Pressure, 1e-15, 0],
	femtobars: [unitFamilies.Pressure, 1e-15, 0],
	fbar: [unitFamilies.Pressure, 1e-15, 0],

	picobar: [unitFamilies.Pressure, 1e-12, 0],
	picobars: [unitFamilies.Pressure, 1e-12, 0],
	pbar: [unitFamilies.Pressure, 1e-12, 0],

	nanobar: [unitFamilies.Pressure, 1e-9, 0],
	nanobars: [unitFamilies.Pressure, 1e-9, 0],
	nbar: [unitFamilies.Pressure, 1e-9, 0],

	microbar: [unitFamilies.Pressure, 1e-6, 0],
	microbars: [unitFamilies.Pressure, 1e-6, 0],
	μbar: [unitFamilies.Pressure, 1e-6, 0],

	millibar: [unitFamilies.Pressure, 1e-3, 0],
	millibars: [unitFamilies.Pressure, 1e-3, 0],
	mbar: [unitFamilies.Pressure, 1e-3, 0],

	centibar: [unitFamilies.Pressure, 1e-2, 0],
	centibars: [unitFamilies.Pressure, 1e-2, 0],
	cbar: [unitFamilies.Pressure, 1e-2, 0],

	decibar: [unitFamilies.Pressure, 0.1, 0],
	decibars: [unitFamilies.Pressure, 0.1, 0],
	dbar: [unitFamilies.Pressure, 0.1, 0],

	decabar: [unitFamilies.Pressure, 10, 0],
	decabars: [unitFamilies.Pressure, 10, 0],
	dabar: [unitFamilies.Pressure, 10, 0],

	hectobar: [unitFamilies.Pressure, 1e2, 0],
	hectobars: [unitFamilies.Pressure, 1e2, 0],
	hbar: [unitFamilies.Pressure, 1e2, 0],

	kilobar: [unitFamilies.Pressure, 1e3, 0],
	kilobars: [unitFamilies.Pressure, 1e3, 0],
	kbar: [unitFamilies.Pressure, 1e3, 0],

	megabar: [unitFamilies.Pressure, 1e6, 0],
	megabars: [unitFamilies.Pressure, 1e6, 0],
	Mbar: [unitFamilies.Pressure, 1e6, 0],

	gigabar: [unitFamilies.Pressure, 1e9, 0],
	gigabars: [unitFamilies.Pressure, 1e9, 0],
	Gbar: [unitFamilies.Pressure, 1e9, 0],

	terabar: [unitFamilies.Pressure, 1e12, 0],
	terabars: [unitFamilies.Pressure, 1e12, 0],
	Tbar: [unitFamilies.Pressure, 1e12, 0],

	petabar: [unitFamilies.Pressure, 1e15, 0],
	petabars: [unitFamilies.Pressure, 1e15, 0],
	Pbar: [unitFamilies.Pressure, 1e15, 0],

	torr: [unitFamilies.Pressure, 101325 / 760, 0],

	millitorr: [unitFamilies.Pressure, 101325 / 760 / 1e3, 0],
	millitorrs: [unitFamilies.Pressure, 101325 / 760 / 1e3, 0],
	mTorr: [unitFamilies.Pressure, 101325 / 760 / 1e3, 0],

	atmosphere: [unitFamilies.Pressure, 101325, 0],
	atmospheres: [unitFamilies.Pressure, 101325, 0],
	atm: [unitFamilies.Pressure, 101325, 0]
};
export default pressure;
