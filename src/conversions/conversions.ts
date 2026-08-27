import { angle } from './measures/angle.ts';
import { area } from './measures/area.ts';
import { data } from './measures/data.ts';
import { energy } from './measures/energy.ts';
import { force } from './measures/force.ts';
import { frequency } from './measures/frequency.ts';
import { illuminance } from './measures/illuminance.ts';
import { length } from './measures/length.ts';
import { luminance } from './measures/luminance.ts';
import { luminousIntensity } from './measures/luminous-intensity.ts';
import { mass } from './measures/mass.ts';
import { power } from './measures/power.ts';
import { pressure } from './measures/pressure.ts';
import { temperature } from './measures/temperature.ts';
import { time } from './measures/time.ts';
import { volume } from './measures/volume.ts';
import type { Conversions, Measure } from './types.ts';

export const conversions: Conversions = new Map();

const measures: Measure[] = [
	angle,
	area,
	data,
	energy,
	force,
	frequency,
	illuminance,
	length,
	luminance,
	luminousIntensity,
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
