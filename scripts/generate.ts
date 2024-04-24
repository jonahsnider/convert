import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { type ParseArgsConfig, parseArgs } from 'node:util';
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

await fs.mkdir(outputDir, { recursive: true });

await Promise.all([
	fs.writeFile(path.join(outputDir, 'parse-unit.ts'), generateParseUnit(conversions)),
	fs.writeFile(path.join(outputDir, 'types.ts'), generateTypes(conversions)),
	fs.writeFile(path.join(outputDir, 'best-units.ts'), generateBestUnits(conversions)),
]);
