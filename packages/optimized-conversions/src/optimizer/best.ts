import assert from 'node:assert/strict';
import {combineIterables, Sort} from '@jonahsnider/util';
import type * as Conversions from 'conversions';
import BigNumber from 'bignumber.js';
import type {Optimized} from '../types/index.js';

function simplify(decimal: BigNumber): number {
	const rounded = decimal.decimalPlaces(12);

	if (rounded.isInteger()) {
		return rounded.toNumber();
	}

	return decimal.toNumber();
}

export function optimizeBest(conversionFamilies: ReadonlyArray<Readonly<Conversions.Family>>): Optimized['best'] {
	const result: Optimized['best'] = {imperial: [], metric: []};

	for (const kind of ['metric', 'imperial'] as const) {
		for (const conversionFamily of conversionFamilies) {
			const lookup: Record<string, BigNumber> = {};

			for (const [name, conversion] of Object.entries(conversionFamily.conversions)) {
				lookup[name] = new BigNumber(conversion.ratio);

				const names: Iterable<string> = combineIterables(conversion.names ?? [], conversion.symbols ?? []);
				for (const generatedName of names) {
					lookup[generatedName] = new BigNumber(conversion.ratio);
				}
			}

			result[kind][conversionFamily.id] ??= [];
			const array = result[kind][conversionFamily.id];

			const conversionFamilyBest = Array.isArray(conversionFamily.best) ? conversionFamily.best : conversionFamily.best[kind];

			conversionFamilyBest.sort(
				Sort.ascending(bestUnit => {
					assert(lookup[bestUnit], `The unit "${bestUnit}" couldn't be found in conversion family ${conversionFamily.id} while optimizing best conversions`);

					return lookup[bestUnit].toNumber();
				}),
			);

			const firstValue = lookup[conversionFamilyBest[0]];

			for (const bestUnit of conversionFamilyBest) {
				const relative = lookup[bestUnit].div(firstValue);

				array.push([simplify(relative), bestUnit]);
			}
		}
	}

	return result;
}
