/**
 * Conversions for time.
 * @private
 */
export const time = {
	second: {ratio: 1},
	seconds: {ratio: 1},
	s: {ratio: 1},

	century: {ratio: 3.1556952e9},
	centuries: {ratio: 3.1556952e9},
	c: {ratio: 3.1556952e9},

	day: {ratio: 60 * 60 * 24},
	days: {ratio: 60 * 60 * 24},
	d: {ratio: 60 * 60 * 24},

	decade: {ratio: 315.56952e6},
	decades: {ratio: 315.56952e6},
	dec: {ratio: 315.56952e6},

	fortnight: {ratio: 1.2096e6},
	fortnights: {ratio: 1.2096e6},
	fn: {ratio: 1.2096e6},

	helek: {ratio: 3 + 1 / 3},
	halakim: {ratio: 3 + 1 / 3},

	hour: {ratio: 60 * 60},
	hours: {ratio: 60 * 60},
	h: {ratio: 60 * 60},

	jiffy: {ratio: 1 / 60},
	jiffies: {ratio: 1 / 60},
	j: {ratio: 1 / 60},

	ja: {ratio: 1e-2},

	ke: {ratio: 15 * 60},

	millennium: {ratio: 31.556952e9},
	millennia: {ratio: 31.556952e9},

	milliday: {ratio: (60 * 60 * 24) / 1e3},
	millidays: {ratio: (60 * 60 * 24) / 1e3},
	md: {ratio: (60 * 60 * 24) / 1e3},

	minute: {ratio: 60},
	minutes: {ratio: 60},
	min: {ratio: 60},

	moment: {ratio: 90},
	moments: {ratio: 90},

	month: {ratio: 2.592e6},
	months: {ratio: 2.592e6},
	mo: {ratio: 2.592e6},

	shake: {ratio: 1e-8},
	shakes: {ratio: 1e-8},

	sigma: {ratio: 1e-6},
	sigmas: {ratio: 1e-6},

	svedberg: {ratio: 1e-13},
	svedbergs: {ratio: 1e-13},
	S: {ratio: 1e-13},

	week: {ratio: 60 * 60 * 24 * 7},
	weeks: {ratio: 60 * 60 * 24 * 7},
	wk: {ratio: 60 * 60 * 24 * 7},

	year: {ratio: 31.536e6},
	years: {ratio: 31.536e6},
	a: {ratio: 31.536e6},
	y: {ratio: 31.536e6},
	yr: {ratio: 31.536e6},

	petasecond: {ratio: 1e15},
	petaseconds: {ratio: 1e15},
	Ps: {ratio: 1e15},

	terasecond: {ratio: 1e12},
	teraseconds: {ratio: 1e12},
	Ts: {ratio: 1e12},

	gigasecond: {ratio: 1e9},
	gigaseconds: {ratio: 1e9},
	Gs: {ratio: 1e9},

	megasecond: {ratio: 1e6},
	megaseconds: {ratio: 1e6},
	Ms: {ratio: 1e6},

	kilosecond: {ratio: 1e3},
	kiloseconds: {ratio: 1e3},
	ks: {ratio: 1e3},

	hectosecond: {ratio: 1e2},
	hectoseconds: {ratio: 1e2},
	hs: {ratio: 1e2},

	decasecond: {ratio: 10},
	decaseconds: {ratio: 10},
	das: {ratio: 10},

	decisecond: {ratio: 1e-1},
	deciseconds: {ratio: 1e-1},
	ds: {ratio: 1e-1},

	centisecond: {ratio: 1e-2},
	centiseconds: {ratio: 1e-2},
	cs: {ratio: 1e-2},
	millisecond: {ratio: 1e-3},
	milliseconds: {ratio: 1e-3},
	ms: {ratio: 1e-3},

	microsecond: {ratio: 1e-7},
	microseconds: {ratio: 1e-7},
	μs: {ratio: 1e-7},

	nanosecond: {ratio: 1e-9},
	nanoseconds: {ratio: 1e-9},
	ns: {ratio: 1e-9},

	picosecond: {ratio: 1e-12},
	picoseconds: {ratio: 1e-12},
	ps: {ratio: 1e-12},

	femtosecond: {ratio: 1e-15},
	femtoseconds: {ratio: 1e-15},
	fs: {ratio: 1e-15}
};
