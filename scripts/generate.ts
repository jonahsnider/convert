import assert from 'assert';
import path from 'path';
import { ParseArgsConfig, parseArgs } from 'util';
import fs from 'fs/promises';
import { conversions } from '../src/conversions/conversions';
import { generateBestUnits } from '../src/generation/generate-best-units';
import { generateParseUnit } from '../src/generation/generate-parse-unit';
import { generateTypes } from '../src/generation/generate-types';

const options: ParseArgsConfig = {
	args: process.argv.slice(2),
	options: {
		outputDir: {
			type: 'string',
			short: 'o',
		},
	},
};

const args = parseArgs(options);

const { outputDir } = args.values;

assert(typeof outputDir === 'string', 'Output directory is required');

await fs.writeFile(path.join(outputDir, 'parse-unit.ts'), generateParseUnit(conversions));
await fs.writeFile(path.join(outputDir, 'types.ts'), generateTypes(conversions));
await fs.writeFile(path.join(outputDir, 'best-units.ts'), generateBestUnits(conversions));