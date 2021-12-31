import {combineIterables, identical} from '@jonahsnider/util';
import * as Conversions from 'conversions';
import Decimal from 'decimal.js';
import type {Optimized} from '../types/index.js';
import {optimizeBest} from './best.js';

Decimal.set({precision: 50});

export function optimize(conversionFamilies: ReadonlyArray<Readonly<Conversions.Family>>): Optimized {
	const result: Optimized = {
		best: {
			imperial: [],
			metric: [],
		},
		conversions: {},
		temperatureDifferences: {},
	};

	for (const conversionFamily of conversionFamilies) {
		for (const conversion of conversionFamily.conversions) {
			const names: Iterable<string> = combineIterables(conversion.names ?? [], conversion.symbols ?? []);

			for (const name of names) {
				const newConversion: Optimized['conversions'][string] = [conversionFamily.id, new Decimal(conversion.ratio).toNumber()];

				if (name in result.conversions && !identical(result.conversions[name], newConversion)) {
					throw new RangeError(`Conversion name conflict for ${name}`);
				}

				result.conversions[name] = newConversion;
				// The plugin is bugged, see https://github.com/xojs/eslint-config-xo-typescript/issues/49
				// eslint-disable-next-line import/namespace
				if (conversionFamily.id === Conversions.Id.Temperature && conversion.difference !== undefined && conversion.difference !== 0) {
					result.temperatureDifferences[name] = new Decimal(conversion.difference).toNumber();
				} else if (conversion.difference !== undefined) {
					throw new RangeError('Only temperatures may specify a difference value');
				}
			}
		}
	}

	result.best = optimizeBest(conversionFamilies);

	return result;
}
