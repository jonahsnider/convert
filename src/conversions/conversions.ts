import { angle } from './measures/angle';
import { area } from './measures/area';
import { data } from './measures/data';
import { energy } from './measures/energy';
import { force } from './measures/force';
import { frequency } from './measures/frequency';
import { illuminance } from './measures/illuminance';
import { length } from './measures/length';
import { luminance } from './measures/luminance';
import { luminousIntensity } from './measures/luminous-intensity';
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
	frequency,
	length,
	mass,
	power,
	pressure,
	temperature,
	time,
	volume,
	illuminance,
	luminance,
	luminousIntensity,
];

for (const measure of measures) {
	conversions.set(measure.kind, measure);
}
