import type BigNumber from 'bignumber.js';

/**
 * The internal ID mapping used for each of the possible measures to convert.
 * @public
 */
export enum MeasureKind {
	Angle = 0,
	Area = 1,
	Data = 2,
	Energy = 3,
	Force = 4,
	Frequency = 5,
	Illuminance = 6,
	Length = 7,
	Luminance = 8,
	LuminousIntensity = 9,
	Mass = 10,
	Power = 11,
	Pressure = 12,
	Temperature = 13,
	Time = 14,
	Volume = 15,
}

export type Numeric = number | BigNumber | (() => number);

/**
 * The kinds of best units to use.
 * @public
 */
export type BestKind = 'metric' | 'imperial';

export type Measure = {
	kind: MeasureKind;
	best: string[] | Record<BestKind, string[]>;
	units: MeasureEntry[];
};

export type MeasureEntry = {
	names: string[];
	symbols?: string[];
	ratio: Numeric;
	difference?: Numeric;
};

export type Conversions = Map<MeasureKind, Measure>;
