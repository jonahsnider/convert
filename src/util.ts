/**
 * Throws an errror if `condition` is falsy.
 * @private
 * @param condition The condition to check
 * @param message The error message to display in development builds
 */
export function invariant(condition: unknown, message: string): asserts condition {
	if (!condition) {
		if (__DEV__) {
			// Message is only in development
			throw new Error(message);
		} else {
			throw new Error();
		}
	}
}

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
