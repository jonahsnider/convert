import {Conversion, ConversionFamily} from '../types/common';
import * as Generated from '../types/generated';
import {generatePrefixes} from './si-prefix.js';

export function best(conversionFamilies: ConversionFamily[]): Generated.Best[] {
	const result: Generated.Best[] = [];

	for (const conversionFamily of conversionFamilies) {
		const queue: Conversion[] = [];
		const lookup: Record<string, number> = {};

		for (const [name, conversion] of Object.entries(conversionFamily.conversions)) {
			if ('prefix' in conversion) {
				queue.push(...generatePrefixes(conversion));
			} else {
				lookup[name] = conversion.ratio;

				queue.push(conversion);
			}
		}

		for (const flattenedConversion of queue) {
			const names: string[] = [];

			if ('names' in flattenedConversion) {
				names.push(...flattenedConversion.names);
			}

			if (flattenedConversion.symbols) {
				names.push(...flattenedConversion.symbols);
			}

			for (const generatedName of names) {
				lookup[generatedName] = flattenedConversion.ratio;
			}
		}

		let firstVal: number | null = null;

		let array = result[conversionFamily.id];

		if (!array) {
			result[conversionFamily.id] = [];
			array = result[conversionFamily.id];
		}

		for (const bestUnit of conversionFamily.best) {
			firstVal ??= lookup[bestUnit];

			// Avoid floating point error
			array.push([Math.round(lookup[bestUnit] / firstVal), bestUnit]);
		}
	}

	return result;
}
