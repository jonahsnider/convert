import * as Generated from '../types/generated';

function stringify(value: unknown): string {
	return JSON.stringify(value, undefined, '\t');
}

export function serialize({conversions, best}: {conversions: Generated.Conversions; best: Generated.Best}): string {
	return [
		`export const conversions = {__proto__:null, ${stringify(conversions).slice(1)} as const;`,
		'',
		`export const bestUnits = ${stringify(best)} as const;`
	].join('\n');
}
