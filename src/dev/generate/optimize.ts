import {Conversion, ConversionFamily} from '../types/common';
import * as Generated from '../types/generated';

export function optimize(conversionFamily: ConversionFamily): {conversions: Generated.Conversions; macros: Generated.PrefixMacro[]} {
	const conversions: Generated.Conversions = {};
	const macros: Generated.PrefixMacro[] = [];

	const conversionQueue: Conversion[] = [];

	for (const conversion of conversionFamily.conversions) {
		if ('prefix' in conversion) {
			let options = Generated.PrefixMacroOptions.Si;

			if (conversion.prefix === 'binary') {
				options = Generated.PrefixMacroOptions.Binary;
			} else if ('kind' in conversion) {
				options = Generated.PrefixMacroOptions.BigSi;
			}

			macros.push([conversion.names, conversion.symbols, conversion.ratio, options]);
		} else {
			conversionQueue.push(conversion);
		}
	}

	for (const conversion of conversionQueue) {
		const names: string[] = [];

		if ('names' in conversion) {
			names.push(...conversion.names);
		}

		if (conversion.symbols) {
			names.push(...conversion.symbols);
		}

		for (const name of names) {
			conversions[name] = [conversionFamily.id, conversion.ratio, conversion.difference ?? 0];
		}
	}

	return {conversions, macros};
}
