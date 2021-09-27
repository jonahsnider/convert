import * as fs from 'node:fs';
import * as path from 'node:path';
import * as conversionFamilies from '../conversions/index.js';
import {best} from './best.js';
import {optimize} from './optimize.js';
import {serialize} from './serialize.js';

const conversionFamilyValues = Object.values(conversionFamilies);

const optimized = optimize(conversionFamilyValues);
const {conversions, temperatureDifferences} = optimized;
const bestUnits = best(conversionFamilyValues);

const generatedScript = serialize({conversions, best: bestUnits, temperatureDifferences});

fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'src', 'generated', 'generated.ts'), generatedScript);
fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'tsc_output', 'generated', 'generated.ts'), generatedScript);

console.log('Generated optimized conversion data');
