const prefix: string = 'convert: Invariant failed';

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
			throw new Error(`${prefix}: ${message}`);
		} else {
			throw new Error(prefix);
		}
	}
}
