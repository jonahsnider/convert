import { angle } from './measures/angle.js';
import { area } from './measures/area.js';
import { data } from './measures/data.js';
import { energy } from './measures/energy.js';
import { force } from './measures/force.js';
import { length } from './measures/length.js';
import { mass } from './measures/mass.js';
import { power } from './measures/power.js';
import { pressure } from './measures/pressure.js';
import { temperature } from './measures/temperature.js';
import { Conversions, Measure } from './types.js';
import { volume } from './measures/volume.js';
import { time } from './measures/time.js';

export const conversions: Conversions = new Map();

const measures: Measure[] = [
	angle,
	area,
	data,
	energy,
	force,
	length,
	mass,
	power,
	pressure,
	temperature,
	time,
	volume,
];

for (const measure of measures) {
	conversions.set(measure.kind, measure);
}
