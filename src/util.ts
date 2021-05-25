/**
 * Each unit has an element that identifies what family it belongs to (ex. length or time).
 * You can use this to group units together when display them (ex. a dropdown GUI).
 */
export const enum UnitFamilies {
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
export const unitFamilies = {
	Data: UnitFamilies.Data,
	Length: UnitFamilies.Length,
	Mass: UnitFamilies.Mass,
	Pressure: UnitFamilies.Pressure,
	Temperature: UnitFamilies.Temperature,
	Time: UnitFamilies.Time,
	Volume: UnitFamilies.Volume,
	Angle: UnitFamilies.Angle,
	Force: UnitFamilies.Force
} as const;
