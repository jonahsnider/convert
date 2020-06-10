/**
 * Capitalizes the first letter of a string
 * @param text Text to capitalize
 */
export function capitalizeFirstCharacter(text: string): string {
	return text.replace(new RegExp(`^${text[0]}`), firstCharacter => firstCharacter.toUpperCase());
}

/**
 * Generate a type name from a provided unit
 * @param unit The unit to generate a type name for.
 * @example
 * ```ts
 * typeNameFromUnit('time');
 * // ValidTimeUnits
 * ```
 * @returns The pascal-cased type name for the unit
 */
export function typeNameFromUnit(unit: string): string {
	return `Valid${capitalizeFirstCharacter(unit)}Units`;
}
