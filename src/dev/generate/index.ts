import * as fs from 'fs';
import * as path from 'path';
import * as conversionFamilies from '../conversions/index.js';
import {best} from './best.js';
import {optimize} from './optimize.js';
import {serialize} from './serialize.js';

const conversionFamilyValues = Object.values(conversionFamilies);
const optimized = optimize(conversionFamilyValues);
const bestUnits = best(conversionFamilyValues);

const generatedScript = serialize({unitToFamily: optimized.unitToFamily, allFamilies: optimized.allFamilies, best: bestUnits});

fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'src', 'generated', 'generated.ts'), generatedScript);
fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'tsc_output', 'generated', 'generated.ts'), generatedScript);

console.log('Generated optimized conversion data');
