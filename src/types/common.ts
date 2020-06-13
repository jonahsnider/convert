export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

export interface Unit {
	ratio: number;
	difference?: number;
}

/**
 * Get a type of every alias belonging to a unit.
 * @example
 * GetAliases<TimeUnits>
 */
export type GetAliases<T extends Record<string, Unit>> = keyof T;
