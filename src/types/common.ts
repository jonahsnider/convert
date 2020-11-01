import {strings} from '../util';

export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

export interface Unit {
	[strings.ratio]: number;
	[strings.difference]?: number;
}

/**
 * Get a type of every alias belonging to a unit.
 * @example
 * GetAliases<TimeUnits>
 */
export type GetAliases<T extends Record<string, Unit>> = keyof T;
