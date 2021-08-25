import * as fs from 'fs';
import * as path from 'path';
import * as conversionFamilies from '../conversions/index.js';
import * as Generated from '../types/generated';
import {best} from './best.js';
import {optimize} from './optimize.js';
import {serialize} from './serialize.js';
import {applyPrefixes} from './si-prefix.js';

const conversions: Generated.Conversions = {};
const allPrefixed: Generated.Conversions = {};

for (const conversionFamily of Object.values(conversionFamilies)) {
	const optimized = optimize(conversionFamily);
	const prefixed = applyPrefixes(conversionFamily);

	Object.assign(conversions, optimized.conversions);
	Object.assign(allPrefixed, prefixed);
}

const generatedScript = serialize({conversions, best: best(Object.values(conversionFamilies)), prefixed: allPrefixed});

fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'src', 'generated', 'generated.ts'), generatedScript);
fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'tsc_output', 'generated', 'generated.ts'), generatedScript);

console.log('Generated optimized conversion data');
