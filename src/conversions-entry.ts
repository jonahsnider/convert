export { type BestKind, MeasureKind } from './conversions/types';

import type { MeasureKind } from './conversions/types';
import { conversions } from './generated/conversions';

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
