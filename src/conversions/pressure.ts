import {ratioer} from '../util';

/**
 * Conversions for pressure.
 * @private
 */
export const pressure = {
	pascal: ratioer(1),
	pascals: ratioer(1),
	Pa: ratioer(1),

	femtopascal: ratioer(1e-15),
	femtopascals: ratioer(1e-15),
	fPa: ratioer(1e-15),

	picopascal: ratioer(1e-12),
	picopascals: ratioer(1e-12),
	pPa: ratioer(1e-12),

	nanopascal: ratioer(1e-9),
	nanopascals: ratioer(1e-9),
	nPa: ratioer(1e-9),

	micropascal: ratioer(1e-6),
	micropascals: ratioer(1e-6),
	μPa: ratioer(1e-6),

	millipascal: ratioer(1e-3),
	millipascals: ratioer(1e-3),
	mPa: ratioer(1e-3),

	centipascal: ratioer(1e-2),
	centipascals: ratioer(1e-2),
	cPa: ratioer(1e-2),

	decipascal: ratioer(0.1),
	decipascals: ratioer(0.1),
	dPa: ratioer(0.1),

	decapascal: ratioer(10),
	decapascals: ratioer(10),
	daPa: ratioer(10),

	hectopascal: ratioer(1e2),
	hectopascals: ratioer(1e2),
	hPa: ratioer(1e2),

	kilopascal: ratioer(1e3),
	kilopascals: ratioer(1e3),
	kPa: ratioer(1e3),

	megapascal: ratioer(1e6),
	megapascals: ratioer(1e6),
	MPa: ratioer(1e6),

	gigapascal: ratioer(1e9),
	gigapascals: ratioer(1e9),
	GPa: ratioer(1e9),

	terapascal: ratioer(1e12),
	terapascals: ratioer(1e12),
	TPa: ratioer(1e12),

	petapascal: ratioer(1e15),
	petapascals: ratioer(1e15),
	PPa: ratioer(1e15),

	bar: ratioer(1e5),

	femtobar: ratioer(1e-15),
	femtobars: ratioer(1e-15),
	fbar: ratioer(1e-15),

	picobar: ratioer(1e-12),
	picobars: ratioer(1e-12),
	pbar: ratioer(1e-12),

	nanobar: ratioer(1e-9),
	nanobars: ratioer(1e-9),
	nbar: ratioer(1e-9),

	microbar: ratioer(1e-6),
	microbars: ratioer(1e-6),
	μbar: ratioer(1e-6),

	millibar: ratioer(1e-3),
	millibars: ratioer(1e-3),
	mbar: ratioer(1e-3),

	centibar: ratioer(1e-2),
	centibars: ratioer(1e-2),
	cbar: ratioer(1e-2),

	decibar: ratioer(0.1),
	decibars: ratioer(0.1),
	dbar: ratioer(0.1),

	decabar: ratioer(10),
	decabars: ratioer(10),
	dabar: ratioer(10),

	hectobar: ratioer(1e2),
	hectobars: ratioer(1e2),
	hbar: ratioer(1e2),

	kilobar: ratioer(1e3),
	kilobars: ratioer(1e3),
	kbar: ratioer(1e3),

	megabar: ratioer(1e6),
	megabars: ratioer(1e6),
	Mbar: ratioer(1e6),

	gigabar: ratioer(1e9),
	gigabars: ratioer(1e9),
	Gbar: ratioer(1e9),

	terabar: ratioer(1e12),
	terabars: ratioer(1e12),
	Tbar: ratioer(1e12),

	petabar: ratioer(1e15),
	petabars: ratioer(1e15),
	Pbar: ratioer(1e15),

	torr: ratioer(101325 / 760),

	millitorr: ratioer(101325 / 760 / 1e3),
	millitorrs: ratioer(101325 / 760 / 1e3),
	mTorr: ratioer(101325 / 760 / 1e3),

	atmosphere: ratioer(101325),
	atmospheres: ratioer(101325),
	atm: ratioer(101325)
};
