/** All built-in properties and methods of an `Array`. */
export type ArrayBuiltIns = keyof Array<unknown>;

export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

export interface Unit {
	aliases: readonly string[];
	ratio: number;
}

type _GetAliases<T extends readonly Unit[]> = {
	0: {
		[K in Exclude<keyof T, ArrayBuiltIns>]: T[K] extends {
			aliases: infer A;
		}
			? A
			: never;
	};
	1: _GetAliases<T>[0][keyof _GetAliases<T>[0]];
	2: _GetAliases<T>[1][Exclude<keyof _GetAliases<T>[1], ArrayBuiltIns>];
};

/**
 * Get a type of every alias belonging to a unit.
 * @example
 * GetAliases<TimeUnits>
 */
export type GetAliases<T extends readonly Unit[]> = _GetAliases<T>[2];
