import {Conversion, ConversionFamily} from '../types/common';
import * as Generated from '../types/generated';

export function optimize(conversionFamily: ConversionFamily): {conversions: Generated.Conversions} {
	const conversions: Generated.Conversions = {};

	const conversionQueue: Conversion[] = [];

	for (const conversion of conversionFamily.conversions) {
		if (!('prefix' in conversion)) {
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

	return {conversions};
}
