/**
 * Conversions for pressure.
 * @private
 */
export const pressure = {
	pascal: {ratio: 1},
	pascals: {ratio: 1},
	Pa: {ratio: 1},

	femtopascal: {ratio: 1e-15},
	femtopascals: {ratio: 1e-15},
	fPa: {ratio: 1e-15},

	picopascal: {ratio: 1e-12},
	picopascals: {ratio: 1e-12},
	pPa: {ratio: 1e-12},

	nanopascal: {ratio: 1e-9},
	nanopascals: {ratio: 1e-9},
	nPa: {ratio: 1e-9},

	micropascal: {ratio: 1e-6},
	micropascals: {ratio: 1e-6},
	μPa: {ratio: 1e-6},

	millipascal: {ratio: 1e-3},
	millipascals: {ratio: 1e-3},
	mPa: {ratio: 1e-3},

	centipascal: {ratio: 1e-2},
	centipascals: {ratio: 1e-2},
	cPa: {ratio: 1e-2},

	decipascal: {ratio: 0.1},
	decipascals: {ratio: 0.1},
	dPa: {ratio: 0.1},

	decapascal: {ratio: 10},
	decapascals: {ratio: 10},
	daPa: {ratio: 10},

	hectopascal: {ratio: 1e2},
	hectopascals: {ratio: 1e2},
	hPa: {ratio: 1e2},

	kilopascal: {ratio: 1e3},
	kilopascals: {ratio: 1e3},
	kPa: {ratio: 1e3},

	megapascal: {ratio: 1e6},
	megapascals: {ratio: 1e6},
	MPa: {ratio: 1e6},

	gigapascal: {ratio: 1e9},
	gigapascals: {ratio: 1e9},
	GPa: {ratio: 1e9},

	terapascal: {ratio: 1e12},
	terapascals: {ratio: 1e12},
	TPa: {ratio: 1e12},

	petapascal: {ratio: 1e15},
	petapascals: {ratio: 1e15},
	PPa: {ratio: 1e15},

	bar: {ratio: 1e5},

	femtobar: {ratio: 1e-15},
	femtobars: {ratio: 1e-15},
	fbar: {ratio: 1e-15},

	picobar: {ratio: 1e-12},
	picobars: {ratio: 1e-12},
	pbar: {ratio: 1e-12},

	nanobar: {ratio: 1e-9},
	nanobars: {ratio: 1e-9},
	nbar: {ratio: 1e-9},

	microbar: {ratio: 1e-6},
	microbars: {ratio: 1e-6},
	μbar: {ratio: 1e-6},

	millibar: {ratio: 1e-3},
	millibars: {ratio: 1e-3},
	mbar: {ratio: 1e-3},

	centibar: {ratio: 1e-2},
	centibars: {ratio: 1e-2},
	cbar: {ratio: 1e-2},

	decibar: {ratio: 0.1},
	decibars: {ratio: 0.1},
	dbar: {ratio: 0.1},

	decabar: {ratio: 10},
	decabars: {ratio: 10},
	dabar: {ratio: 10},

	hectobar: {ratio: 1e2},
	hectobars: {ratio: 1e2},
	hbar: {ratio: 1e2},

	kilobar: {ratio: 1e3},
	kilobars: {ratio: 1e3},
	kbar: {ratio: 1e3},

	megabar: {ratio: 1e6},
	megabars: {ratio: 1e6},
	Mbar: {ratio: 1e6},

	gigabar: {ratio: 1e9},
	gigabars: {ratio: 1e9},
	Gbar: {ratio: 1e9},

	terabar: {ratio: 1e12},
	terabars: {ratio: 1e12},
	Tbar: {ratio: 1e12},

	petabar: {ratio: 1e15},
	petabars: {ratio: 1e15},
	Pbar: {ratio: 1e15},

	torr: {ratio: 101325 / 760},

	millitorr: {ratio: 101325 / 760 / 1e3},
	millitorrs: {ratio: 101325 / 760 / 1e3},
	mTorr: {ratio: 101325 / 760 / 1e3},

	atmosphere: {ratio: 101325},
	atmospheres: {ratio: 101325},
	atm: {ratio: 101325}
};
