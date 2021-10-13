import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

const flags = {
	dev: {__DEV__: true},
	prod: {__DEV__: false},
	es3: {__ES3__: true},
	esnext: {__ES3__: false},
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
	},
	mangle: {toplevel: true},
	module: false,
	ie8: true,
};

/** @type {import('rollup-plugin-terser').Options} */
const esmTerserConfig = {
	...terserConfig,
	ecma: 2016,
	compress: {
		...terserConfig.compress,
		ecma: 2016,
	},
};
/* eslint-enable camelcase */

const config = [
	// UMD
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/convert.prod.js',
				format: 'umd',
				name: 'convert',
				plugins: [replace({...flags.prod, ...flags.es3})],
				exports: 'named',
				sourcemap: true,
			},
			{
				file: './dist/convert.dev.js',
				format: 'umd',
				name: 'convert',
				plugins: [replace({...flags.dev, ...flags.es3})],
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [typescript(), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
	},
	// ES Modules
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/convert.prod.mjs',
				format: 'esm',
				plugins: [replace({...flags.prod, ...flags.esnext})],
				exports: 'named',
				sourcemap: true,
			},
			{
				file: './dist/convert.dev.mjs',
				format: 'esm',
				plugins: [replace({...flags.dev, ...flags.esnext})],
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [typescript(), terser(esmTerserConfig)],
	},
	// Entry
	{
		input: './src/entry.ts',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true,
		},
		plugins: [typescript(), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)],
	},
	{
		input: './tsc_types/index.d.ts',
		output: [{file: 'dist/index.d.ts', format: 'es'}],
		plugins: [dts()],
	},
];

export default config;
