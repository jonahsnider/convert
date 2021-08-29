import {ConversionFamily, UnitToFamily} from '../types/common';
import * as Generated from '../types/generated';
import {combineIterables} from '@jonahsnider/util';

export function optimize(conversionFamilies: readonly ConversionFamily[]): {unitToFamily: UnitToFamily; allFamilies: Generated.AllFamilies} {
	const unitToFamily: UnitToFamily = {};
	const allFamilies: Generated.AllFamilies = [];

	for (const conversionFamily of conversionFamilies) {
		for (const conversion of conversionFamily.conversions) {
			const names: Iterable<string> = combineIterables(conversion.names ?? [], conversion.symbols ?? []);

			for (const name of names) {
				// Name is already used and belongs to a different family
				// Some units have a name that is the same as their symbol (ex. bar) which is why we check the IDs
				if (unitToFamily[name] !== undefined && unitToFamily[name] !== conversionFamily.id) {
					// Ambiguous names are stored as null
					unitToFamily[name] = null;
				} else {
					unitToFamily[name] = conversionFamily.id;
				}

				// Initialize to empty object
				allFamilies[conversionFamily.id] ??= {};
				// Add optimized conversion
				allFamilies[conversionFamily.id][name] = [conversionFamily.id, conversion.ratio, conversion.difference ?? 0];
			}
		}
	}

	return {unitToFamily, allFamilies};
}
