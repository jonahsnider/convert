// @ts-check

import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';

// NOTE: Using getBabelOutputPlugin() instead of the default babel() plugin is necessary as a workaround to transform the modules that Rollup bundles
// ex. const conversions = ... is not transformed by babel() for some reason (maybe because it's from an input chunk?)
// If you undo this workaround you will probably notice that parts of your final output aren't ES5 compatible

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
		},
	},
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
			nodeResolve(),
			typescript({incremental: true}),
			replace({values: {...flags.prod, ...flags.es3}, preventAssignment: true}),
			getBabelOutputPlugin({
				presets: [['@babel/env', {modules: 'umd'}]],
			}),
			terser(terserConfig),
		],
		output: {
			file: './dist/convert.prod.js',
			format: 'esm',
			name: 'convert',
			exports: 'named',
			sourcemap: true,
		},
	},
	{
		input: './src/index.ts',
		plugins: [
			nodeResolve(),
			typescript({incremental: true}),
			replace({values: {...flags.dev, ...flags.es3}, preventAssignment: true}),
			getBabelOutputPlugin({
				presets: [['@babel/env', {modules: 'umd'}]],
			}),
			terser(terserConfig),
		],
		output: {
			file: './dist/convert.dev.js',
			format: 'esm',
			name: 'convert',
			exports: 'named',
			sourcemap: true,
		},
	},

	// ES Modules
	{
		input: './src/index.ts',
		plugins: [
			nodeResolve(),
			typescript({incremental: true}),
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
			nodeResolve(),
			typescript({incremental: true}),
			replace({values: {...flags.dev, ...flags.esnext}, preventAssignment: true}),
			terser(esmTerserConfig),
		],
	},

	// Entry
	{
		input: './src/entry.ts',
		plugins: [
			nodeResolve(),
			typescript({incremental: true}),
			getBabelOutputPlugin({
				presets: [['@babel/env', {modules: 'cjs'}]],
			}),
			terser(terserConfig),
		],
		output: {
			file: 'dist/index.js',
			format: 'esm',
			sourcemap: true,
		},
	},
];

export default config;
