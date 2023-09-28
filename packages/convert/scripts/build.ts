import path from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert';
import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import terser, {type Options as TerserOptions} from '@rollup/plugin-terser';
import {rollup} from 'rollup';
import {execa} from 'execa';
import {type BuildOutput, type BuildConfig} from 'bun';

const flags = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	dev: {__DEV__: JSON.stringify(true)},
	// eslint-disable-next-line @typescript-eslint/naming-convention
	prod: {__DEV__: JSON.stringify(false)},
} satisfies Record<string, Record<string, string>>;

const PROJECT_DIR = path.join(import.meta.dir, '..');
const SRC_DIR = path.join(PROJECT_DIR, 'src');
const DIST_DIR = path.join(PROJECT_DIR, 'dist');
const BUN_DIST_DIR = path.join(PROJECT_DIR, 'bun_output');

const BASE_SETTINGS = {
	outdir: BUN_DIST_DIR,
	minify: false,
	sourcemap: 'inline',
	target: 'browser',
} satisfies Partial<BuildConfig>;

const TERSER_CONFIG = {
	/* eslint-disable @typescript-eslint/naming-convention */
	ecma: 5,
	compress: {
		arrows: false,
		arguments: true,
		keep_fargs: false,
		toplevel: true,
		passes: 10,
		unsafe: true,
		// Required to reduce unnecessary side-effect reads of properties of `this` from Function.prototype.bind
		pure_getters: true,
	},
	mangle: {
		toplevel: true,
		properties: {
			regex: /^_/,
			reserved: ['__esModule'],
		},
	},
	module: false,
	ie8: true,
	/* eslint-enable @typescript-eslint/naming-convention */
} satisfies TerserOptions;

const ESM_TERSER_CONFIG = {
	...TERSER_CONFIG,
	ecma: 2015,
	compress: {
		...TERSER_CONFIG.compress,
		ecma: 2015,
	},
} satisfies TerserOptions;

async function compileTypes(): Promise<void> {
	await execa('yarn', ['tsc'], {cwd: PROJECT_DIR});
	try {
		await execa('yarn', ['validate-api'], {cwd: PROJECT_DIR});
	} catch {}
}

async function compileMjs(): Promise<BuildOutput[]> {
	return Promise.all([
		Bun.build({
			...BASE_SETTINGS,
			entrypoints: [path.join(SRC_DIR, 'index.ts')],
			naming: 'convert.dev.mjs',
			format: 'esm',
			define: flags.dev,
		}),
		Bun.build({
			...BASE_SETTINGS,
			entrypoints: [path.join(SRC_DIR, 'index.ts')],
			naming: 'convert.prod.mjs',
			format: 'esm',
			define: flags.prod,
		}),
	]);
}

async function compileCjs(outputs: BuildOutput[]): Promise<void> {
	let devPath: string | undefined;
	let prodPath: string | undefined;

	for (const result of outputs) {
		if (devPath && prodPath) {
			break;
		}

		for (const output of result.outputs) {
			if (!devPath && output.path.endsWith('convert.dev.mjs')) {
				devPath = output.path;
			}

			if (!prodPath && output.path.endsWith('convert.prod.mjs')) {
				prodPath = output.path;
			}
		}
	}

	assert(devPath, 'Could not find dev build');
	assert(prodPath, 'Could not find prod build');

	const [umdBuild, esmBuild] = await Promise.all([
		rollup({
			input: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'convert.dev': devPath,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'convert.prod': prodPath,
				index: path.join(SRC_DIR, 'entry.js'),
			},
			plugins: [
				getBabelOutputPlugin({
					presets: [['@babel/env', {modules: 'umd'}]],
					filename: 'convert.js',
				}),
				terser(TERSER_CONFIG),
			],
			output: {
				format: 'esm',
				name: 'convert',
				exports: 'named',
				sourcemap: true,
			},
		}),
		rollup({
			input: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'convert.dev': devPath,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'convert.prod': prodPath,
			},
			plugins: [terser(ESM_TERSER_CONFIG)],
			output: {
				format: 'esm',
				exports: 'named',
				sourcemap: true,
			},
		}),
	]);

	await Promise.all([
		umdBuild.write({dir: DIST_DIR}),
		esmBuild.write({
			dir: DIST_DIR,
			entryFileNames: '[name].mjs',
		}),
	]);
}

async function compileJs(): Promise<void> {
	const output = await compileMjs();

	if (output.some(result => !result.success)) {
		console.error(output);
		throw new Error('Failed to compile');
	}

	await compileCjs(output);
}

async function build(): Promise<void> {
	await fs.rm(DIST_DIR, {force: true, recursive: true});
	await Promise.all([compileTypes(), compileJs()]);
}

await build();
