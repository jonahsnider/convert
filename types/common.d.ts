/** All built-in properties and methods of an `Array`. */
export type ArrayBuiltIns = keyof Array<unknown>;

export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

/**
 * A conversion between a unit.
 */
export interface Unit<T = unknown> {
	/**
	 * The base unit.
	 * @example ['second', 'seconds', 's']
	 */
	base: readonly T[];
	/** The conversion ratios for this unit. */
	conversions: readonly {
		/**
		 * Aliases for this ratio.
		 * @example ['minute', 'minutes', 'm']
		 */
		aliases: readonly string[];
		/**
		 * The ratio as expressed in units of the base unit. For example, you express `1` second in minutes as `1 / 60` minutes.
		 * @example 1 / 60
		 */
		ratio: number;
	}[];
}
