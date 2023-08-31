import Prettier from 'prettier';
import prettierConfig from '@jonahsnider/prettier-config';
import type {Optimized} from 'optimized-conversions';

function stringify(value: unknown): string {
	return JSON.stringify(value, undefined, '\t');
}

export async function codegen(conversions: Optimized): Promise<string> {
	const code = [
		`export const conversions = {__proto__:null, ${stringify(conversions.conversions).slice(1)} as const;`,
		'',
		`export const bestUnits = ${stringify(conversions.best)} as const;`,
		'',
		`export const temperatureDifferences = {__proto__:null, ${stringify(conversions.temperatureDifferences).slice(1)} as const;`,
	].join('\n');

	const formatted = await Prettier.format(code, {...prettierConfig, filepath: 'index.ts'});

	return formatted;
}
