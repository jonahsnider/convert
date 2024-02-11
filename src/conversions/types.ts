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
	Length = 5,
	Mass = 6,
	Power = 7,
	Pressure = 8,
	Temperature = 9,
	Time = 10,
	Volume = 11,
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
