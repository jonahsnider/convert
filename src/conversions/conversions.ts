import { angle } from './measures/angle';
import { area } from './measures/area';
import { data } from './measures/data';
import { energy } from './measures/energy';
import { force } from './measures/force';
import { length } from './measures/length';
import { mass } from './measures/mass';
import { power } from './measures/power';
import { pressure } from './measures/pressure';
import { temperature } from './measures/temperature';
import { time } from './measures/time';
import { volume } from './measures/volume';
import type { Conversions, Measure } from './types';

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
