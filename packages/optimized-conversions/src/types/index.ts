import type * as Unoptimized from 'conversions';
import * as Indexes from './indexes.js';

export {Indexes};

type Best = Record<Unoptimized.Best.Kind, Array<Array<[value: number, sym: string]>>>;

type Conversion = [family: number, ratio: number];

/** Values to use as offsets for converting temperatures to kelvin. */
type TemperatureDifferences = Record<string, number>;

export type Optimized = {
	conversions: Record<string, Conversion>;
	best: Best;
	temperatureDifferences: TemperatureDifferences;
};
