import * as Prettier from 'prettier';
import * as prettierConfig from '@jonahsnider/prettier-config';
import type * as Generated from '../types/generated.js';

function stringify(value: unknown): string {
	return JSON.stringify(value, undefined, '\t');
}

export function serialize({
	conversions,
	best,
	temperatureDifferences,
}: {
	conversions: Generated.Conversions;
	best: Generated.Best;
	temperatureDifferences: Generated.TemperatureDifferences;
}): string {
	const code = [
		`export const conversions = {__proto__:null, ${stringify(conversions).slice(1)} as const;`,
		'',
		`export const bestUnits = ${stringify(best)} as const;`,
		'',
		`export const temperatureDifferences = {__proto__:null, ${stringify(temperatureDifferences).slice(1)} as const;`,
	].join('\n');

	const formatted = Prettier.format(code, {...prettierConfig, filepath: 'generated.ts'});

	return formatted;
}
