import { conversions } from './generated/conversions.ts';
import type { MeasureKind } from './types/public.ts';

export { type BestKind, MeasureKind } from './types/public.ts';

const readonlyConversions: ReadonlyMap<
	MeasureKind,
	{
		best: { metric: readonly string[]; imperial: readonly string[] };
		units: readonly {
			names: readonly string[];
			symbols: readonly string[];
		}[];
	}
> = conversions;

export { readonlyConversions as conversions };
