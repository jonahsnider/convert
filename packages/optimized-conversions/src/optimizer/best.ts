import {combineIterables, Sort} from '@jonahsnider/util';
import type * as Conversions from 'conversions';
import Decimal from 'decimal.js';
import type {Optimized} from '../types/index.js';

Decimal.set({precision: 50});

function simplify(decimal: Decimal): number {
	const rounded = decimal.toDecimalPlaces(12);

	if (rounded.isInteger()) {
		return rounded.toNumber();
	}

	return decimal.toNumber();
}

export function optimizeBest(conversionFamilies: ReadonlyArray<Readonly<Conversions.Family>>): Optimized['best'] {
	const result: Optimized['best'] = {imperial: [], metric: []};

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

			conversionFamilyBest.sort(Sort.ascending(bestUnit => lookup[bestUnit].toNumber()));

			const firstValue = lookup[conversionFamilyBest[0]];

			for (const bestUnit of conversionFamilyBest) {
				const relative = lookup[bestUnit].div(firstValue);

				array.push([simplify(relative), bestUnit]);
			}
		}
	}

	return result;
}
