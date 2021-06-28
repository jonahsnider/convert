import * as Generated from './dev/types/generated';
import {conversions} from './dev/choose-conversions';
import {macros, prefixMacros} from './generated/generated';

if (__MACROS__) {
	type MutableConversions = Generated.Conversions;

	// Expand macros
	for (let i = 0; i < macros.length; i++) {
		const macro = macros[i];
		const names = macro[Generated.PrefixMacroIndex.Names];
		const symbols = macro[Generated.PrefixMacroIndex.Symbols];

		const unitGroups = prefixMacros[macro[Generated.PrefixMacroIndex.Options]];

		for (let j = 0; j < unitGroups.length; j++) {
			const unit = unitGroups[j];

			const conversion: Generated.Conversion = [
				conversions[names[0]][Generated.ConversionIndex.Family],
				unit[Generated.UnitGroupIndex.Value] * macro[Generated.PrefixMacroIndex.Scale],
				0
			];

			for (let k = 0; k < names.length; k++) {
				(conversions as unknown as MutableConversions)[unit[Generated.UnitGroupIndex.Prefix] + names[k]] = conversion;
			}

			for (let k = 0; k < symbols.length; k++) {
				(conversions as unknown as MutableConversions)[unit[Generated.UnitGroupIndex.Symbol] + symbols[k]] = conversion;
			}
		}
	}
}

export {convert, convert as default} from './convert';
export {convertMany, ms} from './convert-many';
export {ConversionFamilyIndex as UnitFamily} from './dev/types/common';
export {Angle, Data, Force, Length, Mass, Pressure, Temperature, Time, Unit, Volume} from './types/units';
export {Conversion} from './dev/types/generated';
export {conversions as allUnits};
