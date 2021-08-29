import {combineIterables} from '@jonahsnider/util';
import {ConversionFamily} from '../types/common';
import * as Generated from '../types/generated';

export function best(conversionFamilies: ConversionFamily[]): Generated.Best {
	const result: Generated.Best = [];

	for (const conversionFamily of conversionFamilies) {
		const lookup: Record<string, number> = {};

		for (const [name, conversion] of Object.entries(conversionFamily.conversions)) {
			lookup[name] = conversion.ratio;

			const names: Iterable<string> = combineIterables(conversion.names ?? [], conversion.symbols ?? []);
			for (const generatedName of names) {
				lookup[generatedName] = conversion.ratio;
			}
		}

		result[conversionFamily.id] ??= [];
		const array = result[conversionFamily.id];

		const firstVal = lookup[conversionFamily.best[0]];

		for (const bestUnit of conversionFamily.best) {
			// Avoid floating point error
			array.push([Math.round(lookup[bestUnit] / firstVal), bestUnit]);
		}
	}

	return result;
}
