// @ts-check

import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const flags = {
	dev: {__DEV__: JSON.stringify(true)},
	prod: {__DEV__: JSON.stringify(false)},
	es3: {__ES3__: JSON.stringify(true)},
	esnext: {__ES3__: JSON.stringify(false)},
};

/* eslint-disable camelcase */
/** @type {import('rollup-plugin-terser').Options} */
const terserConfig = {
	ecma: 5,
	compress: {
		arrows: false,
		arguments: true,
		ecma: 5,
		keep_fargs: false,
		toplevel: true,
		passes: 10,
		unsafe: true,
		// Required to reduce unnecessary side-effect reads of properties of `this` from Function.prototype.bind
		pure_getters: true,
	},
	mangle: {toplevel: true},
	module: false,
	ie8: true,
};

/** @type {import('rollup-plugin-terser').Options} */
const esmTerserConfig = {
	...terserConfig,
	ecma: 2015,
	compress: {
		...terserConfig.compress,
		ecma: 2015,
	},
};
/* eslint-enable camelcase */

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
	// UMD
	{
		input: './src/index.ts',
		plugins: [
			typescript({incremental: true}),
			nodeResolve(),
			replace({values: {...flags.prod, ...flags.es3}, preventAssignment: true}),
			babel({babelHelpers: 'bundled', extensions: ['.ts']}),
			terser(terserConfig),
		],
		output: {
			file: './dist/convert.prod.js',
			format: 'umd',
			name: 'convert',
			exports: 'named',
			sourcemap: true,
		},
	},
	{
		input: './src/index.ts',
		plugins: [
			typescript({incremental: true}),
			nodeResolve(),
			replace({values: {...flags.dev, ...flags.es3}, preventAssignment: true}),
			babel({babelHelpers: 'bundled', extensions: ['.ts']}),
			terser(terserConfig),
		],
		output: {
			file: './dist/convert.dev.js',
			format: 'umd',
			name: 'convert',
			exports: 'named',
			sourcemap: true,
		},
	},

	// ES Modules
	{
		input: './src/index.ts',
		plugins: [
			typescript({incremental: true}),
			nodeResolve(),
			replace({values: {...flags.prod, ...flags.esnext}, preventAssignment: true}),
			terser(esmTerserConfig),
		],
		output: {
			file: './dist/convert.prod.mjs',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
		},
	},
	{
		input: './src/index.ts',
		output: {
			file: './dist/convert.dev.mjs',
			format: 'esm',
			exports: 'named',
			sourcemap: true,
		},
		plugins: [
			typescript({incremental: true}),
			nodeResolve(),
			replace({values: {...flags.dev, ...flags.esnext}, preventAssignment: true}),
			terser(esmTerserConfig),
		],
	},

	// Entry
	{
		input: './src/entry.ts',
		plugins: [typescript({incremental: true}), nodeResolve(), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
		},
	},
];

export default config;
