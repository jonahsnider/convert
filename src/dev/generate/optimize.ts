import {combineIterables, identical} from '@jonahsnider/util';
import {ConversionFamily} from '../types/common';
import * as Generated from '../types/generated';

export function optimize(conversionFamilies: readonly ConversionFamily[]): {conversions: Generated.Conversions} {
	const conversions: Generated.Conversions = {};

	for (const conversionFamily of conversionFamilies) {
		for (const conversion of conversionFamily.conversions) {
			const names: Iterable<string> = combineIterables(conversion.names ?? [], conversion.symbols ?? []);

			for (const name of names) {
				const newConversion: Generated.Conversion = [conversionFamily.id, conversion.ratio, conversion.difference ?? 0];

				if (name in conversions && !identical(conversions[name], newConversion)) {
					throw new RangeError(`Conversion name conflict for ${name}`);
				}

				conversions[name] = newConversion;
			}
		}
	}

	return {conversions};
}
