import type BigNumber from 'bignumber.js';
import type { BestKind, MeasureKind } from '../types/public';

export { MeasureKind } from '../types/public';

export type Numeric = number | BigNumber | (() => number);

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
