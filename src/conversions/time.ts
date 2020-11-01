import {ratioer} from '../util';

/**
 * Conversions for time.
 * @private
 */
export const time = {
	second: ratioer(1),
	seconds: ratioer(1),
	s: ratioer(1),

	century: ratioer(3.1556952e9),
	centuries: ratioer(3.1556952e9),
	c: ratioer(3.1556952e9),

	day: ratioer(60 * 60 * 24),
	days: ratioer(60 * 60 * 24),
	d: ratioer(60 * 60 * 24),

	decade: ratioer(315.56952e6),
	decades: ratioer(315.56952e6),
	dec: ratioer(315.56952e6),

	fortnight: ratioer(1.2096e6),
	fortnights: ratioer(1.2096e6),
	fn: ratioer(1.2096e6),

	helek: ratioer(3 + 1 / 3),
	halakim: ratioer(3 + 1 / 3),

	hour: ratioer(60 * 60),
	hours: ratioer(60 * 60),
	h: ratioer(60 * 60),

	jiffy: ratioer(1 / 60),
	jiffies: ratioer(1 / 60),
	j: ratioer(1 / 60),

	ja: ratioer(1e-2),

	ke: ratioer(15 * 60),

	millennium: ratioer(31.556952e9),
	millennia: ratioer(31.556952e9),

	milliday: ratioer((60 * 60 * 24) / 1e3),
	millidays: ratioer((60 * 60 * 24) / 1e3),
	md: ratioer((60 * 60 * 24) / 1e3),

	minute: ratioer(60),
	minutes: ratioer(60),
	min: ratioer(60),

	moment: ratioer(90),
	moments: ratioer(90),

	month: ratioer(2.592e6),
	months: ratioer(2.592e6),
	mo: ratioer(2.592e6),

	shake: ratioer(1e-8),
	shakes: ratioer(1e-8),

	sigma: ratioer(1e-6),
	sigmas: ratioer(1e-6),

	svedberg: ratioer(1e-13),
	svedbergs: ratioer(1e-13),
	S: ratioer(1e-13),

	week: ratioer(60 * 60 * 24 * 7),
	weeks: ratioer(60 * 60 * 24 * 7),
	wk: ratioer(60 * 60 * 24 * 7),

	year: ratioer(31.536e6),
	years: ratioer(31.536e6),
	a: ratioer(31.536e6),
	y: ratioer(31.536e6),
	yr: ratioer(31.536e6),

	petasecond: ratioer(1e15),
	petaseconds: ratioer(1e15),
	Ps: ratioer(1e15),

	terasecond: ratioer(1e12),
	teraseconds: ratioer(1e12),
	Ts: ratioer(1e12),

	gigasecond: ratioer(1e9),
	gigaseconds: ratioer(1e9),
	Gs: ratioer(1e9),

	megasecond: ratioer(1e6),
	megaseconds: ratioer(1e6),
	Ms: ratioer(1e6),

	kilosecond: ratioer(1e3),
	kiloseconds: ratioer(1e3),
	ks: ratioer(1e3),

	hectosecond: ratioer(1e2),
	hectoseconds: ratioer(1e2),
	hs: ratioer(1e2),

	decasecond: ratioer(10),
	decaseconds: ratioer(10),
	das: ratioer(10),

	decisecond: ratioer(1e-1),
	deciseconds: ratioer(1e-1),
	ds: ratioer(1e-1),

	centisecond: ratioer(1e-2),
	centiseconds: ratioer(1e-2),
	cs: ratioer(1e-2),
	millisecond: ratioer(1e-3),
	milliseconds: ratioer(1e-3),
	ms: ratioer(1e-3),

	microsecond: ratioer(1e-7),
	microseconds: ratioer(1e-7),
	μs: ratioer(1e-7),

	nanosecond: ratioer(1e-9),
	nanoseconds: ratioer(1e-9),
	ns: ratioer(1e-9),

	picosecond: ratioer(1e-12),
	picoseconds: ratioer(1e-12),
	ps: ratioer(1e-12),

	femtosecond: ratioer(1e-15),
	femtoseconds: ratioer(1e-15),
	fs: ratioer(1e-15)
};
