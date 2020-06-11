export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

export interface Unit {
	aliases: readonly string[];
	ratio: number;
	difference?: number;
}

/**
 * Get a type of every alias belonging to a unit.
 * @example
 * GetAliases<TimeUnits>
 */
export type GetAliases<T extends readonly Unit[]> = T[number]['aliases'][number];
