import type BigNumber from 'bignumber.js';
import type { Macro } from './macros/types.ts';
import type { BestKind, MeasureKind } from '../types/public.ts';

export { MeasureKind } from '../types/public.ts';

export type Numeric = number | BigNumber | (() => number);

export type Measure = {
	kind: MeasureKind;
	best: string[] | Record<BestKind, string[]>;
	units: (MeasureEntry | MacroEntry)[];
};

export type MeasureEntry = {
	names: string[];
	symbols?: string[];
	ratio: Numeric;
	difference?: Numeric;
};

type MacroEntry = {
	macro: Macro;
	names: string[];
	symbols: string[];
	ratio: number | BigNumber;
};

export type Conversions = Map<MeasureKind, Measure>;
