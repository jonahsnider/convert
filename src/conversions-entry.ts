import { conversions } from './generated/conversions';
import type { MeasureKind } from './types/public';

export { type BestKind, MeasureKind } from './types/public';

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
