import {unitFamilies} from '../util';

/**
 * Conversions for time.
 * @private
 */
const time = {
	second: [unitFamilies.Time, 1, 0],
	seconds: [unitFamilies.Time, 1, 0],
	s: [unitFamilies.Time, 1, 0],

	century: [unitFamilies.Time, 3.1556952e9, 0],
	centuries: [unitFamilies.Time, 3.1556952e9, 0],
	c: [unitFamilies.Time, 3.1556952e9, 0],

	day: [unitFamilies.Time, 60 * 60 * 24, 0],
	days: [unitFamilies.Time, 60 * 60 * 24, 0],
	d: [unitFamilies.Time, 60 * 60 * 24, 0],

	decade: [unitFamilies.Time, 315.56952e6, 0],
	decades: [unitFamilies.Time, 315.56952e6, 0],
	dec: [unitFamilies.Time, 315.56952e6, 0],

	fortnight: [unitFamilies.Time, 1.2096e6, 0],
	fortnights: [unitFamilies.Time, 1.2096e6, 0],
	fn: [unitFamilies.Time, 1.2096e6, 0],

	helek: [unitFamilies.Time, 3 + 1 / 3, 0],
	halakim: [unitFamilies.Time, 3 + 1 / 3, 0],

	hour: [unitFamilies.Time, 60 * 60, 0],
	hours: [unitFamilies.Time, 60 * 60, 0],
	h: [unitFamilies.Time, 60 * 60, 0],

	jiffy: [unitFamilies.Time, 1 / 60, 0],
	jiffies: [unitFamilies.Time, 1 / 60, 0],
	j: [unitFamilies.Time, 1 / 60, 0],

	ja: [unitFamilies.Time, 1e-2, 0],

	ke: [unitFamilies.Time, 15 * 60, 0],

	millennium: [unitFamilies.Time, 31.556952e9, 0],
	millennia: [unitFamilies.Time, 31.556952e9, 0],

	milliday: [unitFamilies.Time, (60 * 60 * 24) / 1e3, 0],
	millidays: [unitFamilies.Time, (60 * 60 * 24) / 1e3, 0],
	md: [unitFamilies.Time, (60 * 60 * 24) / 1e3, 0],

	minute: [unitFamilies.Time, 60, 0],
	minutes: [unitFamilies.Time, 60, 0],
	min: [unitFamilies.Time, 60, 0],

	moment: [unitFamilies.Time, 90, 0],
	moments: [unitFamilies.Time, 90, 0],

	month: [unitFamilies.Time, 2.592e6, 0],
	months: [unitFamilies.Time, 2.592e6, 0],
	mo: [unitFamilies.Time, 2.592e6, 0],

	shake: [unitFamilies.Time, 1e-8, 0],
	shakes: [unitFamilies.Time, 1e-8, 0],

	sigma: [unitFamilies.Time, 1e-6, 0],
	sigmas: [unitFamilies.Time, 1e-6, 0],

	svedberg: [unitFamilies.Time, 1e-13, 0],
	svedbergs: [unitFamilies.Time, 1e-13, 0],
	S: [unitFamilies.Time, 1e-13, 0],

	week: [unitFamilies.Time, 60 * 60 * 24 * 7, 0],
	weeks: [unitFamilies.Time, 60 * 60 * 24 * 7, 0],
	wk: [unitFamilies.Time, 60 * 60 * 24 * 7, 0],

	year: [unitFamilies.Time, 31.536e6, 0],
	years: [unitFamilies.Time, 31.536e6, 0],
	a: [unitFamilies.Time, 31.536e6, 0],
	y: [unitFamilies.Time, 31.536e6, 0],
	yr: [unitFamilies.Time, 31.536e6, 0],

	petasecond: [unitFamilies.Time, 1e15, 0],
	petaseconds: [unitFamilies.Time, 1e15, 0],
	Ps: [unitFamilies.Time, 1e15, 0],

	terasecond: [unitFamilies.Time, 1e12, 0],
	teraseconds: [unitFamilies.Time, 1e12, 0],
	Ts: [unitFamilies.Time, 1e12, 0],

	gigasecond: [unitFamilies.Time, 1e9, 0],
	gigaseconds: [unitFamilies.Time, 1e9, 0],
	Gs: [unitFamilies.Time, 1e9, 0],

	megasecond: [unitFamilies.Time, 1e6, 0],
	megaseconds: [unitFamilies.Time, 1e6, 0],
	Ms: [unitFamilies.Time, 1e6, 0],

	kilosecond: [unitFamilies.Time, 1e3, 0],
	kiloseconds: [unitFamilies.Time, 1e3, 0],
	ks: [unitFamilies.Time, 1e3, 0],

	hectosecond: [unitFamilies.Time, 1e2, 0],
	hectoseconds: [unitFamilies.Time, 1e2, 0],
	hs: [unitFamilies.Time, 1e2, 0],

	decasecond: [unitFamilies.Time, 10, 0],
	decaseconds: [unitFamilies.Time, 10, 0],
	das: [unitFamilies.Time, 10, 0],

	decisecond: [unitFamilies.Time, 1e-1, 0],
	deciseconds: [unitFamilies.Time, 1e-1, 0],
	ds: [unitFamilies.Time, 1e-1, 0],

	centisecond: [unitFamilies.Time, 1e-2, 0],
	centiseconds: [unitFamilies.Time, 1e-2, 0],
	cs: [unitFamilies.Time, 1e-2, 0],
	millisecond: [unitFamilies.Time, 1e-3, 0],
	milliseconds: [unitFamilies.Time, 1e-3, 0],
	ms: [unitFamilies.Time, 1e-3, 0],

	microsecond: [unitFamilies.Time, 1e-7, 0],
	microseconds: [unitFamilies.Time, 1e-7, 0],
	μs: [unitFamilies.Time, 1e-7, 0],

	nanosecond: [unitFamilies.Time, 1e-9, 0],
	nanoseconds: [unitFamilies.Time, 1e-9, 0],
	ns: [unitFamilies.Time, 1e-9, 0],

	picosecond: [unitFamilies.Time, 1e-12, 0],
	picoseconds: [unitFamilies.Time, 1e-12, 0],
	ps: [unitFamilies.Time, 1e-12, 0],

	femtosecond: [unitFamilies.Time, 1e-15, 0],
	femtoseconds: [unitFamilies.Time, 1e-15, 0],
	fs: [unitFamilies.Time, 1e-15, 0]
};
export default time;
