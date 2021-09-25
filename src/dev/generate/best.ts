import {combineIterables} from '@jonahsnider/util';
import Decimal from 'decimal.js';
import {BestConversionKind, ConversionFamily} from '../types/common';
import * as Generated from '../types/generated';

Decimal.set({precision: 50});

function simplify(decimal: Decimal): number {
	const rounded = decimal.toDecimalPlaces(12);

	if (rounded.isInteger()) {
		return rounded.toNumber();
	}

	return decimal.toNumber();
}

export function best(conversionFamilies: ConversionFamily[]): Generated.Best {
	const result: Generated.Best = {
		metric: [],
		imperial: [],
	};

	for (const kind of ['metric', 'imperial'] as const) {
		for (const conversionFamily of conversionFamilies) {
			const lookup: Record<string, Decimal> = {};

			for (const [name, conversion] of Object.entries(conversionFamily.conversions)) {
				lookup[name] = new Decimal(conversion.ratio);

				const names: Iterable<string> = combineIterables(conversion.names ?? [], conversion.symbols ?? []);
				for (const generatedName of names) {
					lookup[generatedName] = new Decimal(conversion.ratio);
				}
			}

			result[kind][conversionFamily.id] ??= [];
			const array = result[kind][conversionFamily.id];

			const conversionFamilyBest = Array.isArray(conversionFamily.best) ? conversionFamily.best : conversionFamily.best[kind];

			const firstVal = lookup[conversionFamilyBest[0]];

			for (const bestUnit of conversionFamilyBest) {
				const relative = lookup[bestUnit].div(firstVal);

				array.push([simplify(relative), bestUnit]);
			}
		}
	}

	return result;
}
