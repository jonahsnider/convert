#!/usr/bin/env yarn node
// @ts-check

import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {codegen} from 'codegen';
import * as Conversions from 'conversions';
import {optimize} from 'optimized-conversions';

const OUT_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'index.ts');

const conversionFamilyValues = Object.values(Conversions.Families);
const contents = codegen(optimize(conversionFamilyValues));

await fs.writeFile(OUT_PATH, contents, 'utf8');
