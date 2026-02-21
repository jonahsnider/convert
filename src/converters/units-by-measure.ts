import { MeasureKind } from '../conversions/types';
import { unitsObject } from '../generated/parse-unit';
import type { Unit, UnitsByMeasure } from '../types/units';

const result: {
	[K in MeasureKind]: UnitsByMeasure<K>[];
} = {
	[MeasureKind.Angle]: [],
	[MeasureKind.Area]: [],
	[MeasureKind.Data]: [],
	[MeasureKind.Energy]: [],
	[MeasureKind.Force]: [],
	[MeasureKind.Frequency]: [],
	[MeasureKind.Length]: [],
	[MeasureKind.Mass]: [],
	[MeasureKind.Power]: [],
	[MeasureKind.Pressure]: [],
	[MeasureKind.Temperature]: [],
	[MeasureKind.Time]: [],
	[MeasureKind.Volume]: [],
};

for (const [unit, value] of Object.entries(unitsObject)) {
	// @ts-expect-error Object.entries() loses the type info that proves this is safe
	result[value[0]].push(unit);
}

/**
 * A record mapping each {@link MeasureKind} to the array of {@link Unit}s that belong to it.
 * @public
 */
export const unitsByMeasure: Readonly<{
	[K in MeasureKind]: readonly UnitsByMeasure<K>[];
}> = result;
