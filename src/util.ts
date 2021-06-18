/**
 * Each unit has an element that identifies what family it belongs to (ex. length or time).
 * You can use this to group units together when display them (ex. a dropdown GUI).
 */
export const enum UnitFamily {
	Data,
	Length,
	Mass,
	Pressure,
	Temperature,
	Time,
	Volume,
	Angle,
	Force
}

// For some reason using a const enum doesn't compile with TSDX, so this hack is used instead
export const unitFamily = {
	Data: UnitFamily.Data,
	Length: UnitFamily.Length,
	Mass: UnitFamily.Mass,
	Pressure: UnitFamily.Pressure,
	Temperature: UnitFamily.Temperature,
	Time: UnitFamily.Time,
	Volume: UnitFamily.Volume,
	Angle: UnitFamily.Angle,
	Force: UnitFamily.Force
} as const;
