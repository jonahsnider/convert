import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';

/** @type {import('rollup-plugin-terser').Options} */
const terserConfig = {
	ecma: 5,
	compress: {
		arrows: false,
		arguments: true,
		booleans_as_integers: true,
		ecma: 5,
		keep_fargs: false,
		toplevel: true,
		passes: 10,
		unsafe: true
	},
	mangle: {toplevel: true},
	module: false,
	ie8: true
};

/** @type {import('rollup-plugin-terser').Options} */
const esmTerserConfig = {
	...terserConfig,
	ecma: 2016,
	compress: {
		...terserConfig.compress,
		ecma: 2016
	}
};

const config = [
	// UMD
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/convert.prod.js',
				format: 'umd',
				name: 'convert',
				plugins: [replace({__DEV__: false, __MACROS__: false})],
				exports: 'named',
				sourcemap: true
			},
			{
				file: './dist/convert.dev.js',
				format: 'umd',
				name: 'convert',
				plugins: [replace({__DEV__: true, __MACROS__: false})],
				exports: 'named',
				sourcemap: true
			},
			{
				file: './dist/convert-small.prod.js',
				format: 'umd',
				name: 'convert',
				plugins: [replace({__DEV__: false, __MACROS__: true})],
				exports: 'named',
				sourcemap: true
			},
			{
				file: './dist/convert-small.dev.js',
				format: 'umd',
				name: 'convert',
				plugins: [replace({__DEV__: true, __MACROS__: true})],
				exports: 'named',
				sourcemap: true
			}
		],
		plugins: [typescript(), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)]
	},
	// ES Modules
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/convert.prod.mjs',
				format: 'esm',
				plugins: [replace({__DEV__: false, __MACROS__: false})],
				exports: 'named',
				sourcemap: true
			},
			{
				file: './dist/convert.dev.mjs',
				format: 'esm',
				plugins: [replace({__DEV__: true, __MACROS__: false})],
				exports: 'named',
				sourcemap: true
			},
			{
				file: './dist/convert-small.prod.mjs',
				format: 'esm',
				plugins: [replace({__DEV__: false, __MACROS__: true})],
				exports: 'named',
				sourcemap: true
			},
			{
				file: './dist/convert-small.dev.mjs',
				format: 'esm',
				plugins: [replace({__DEV__: true, __MACROS__: true})],
				exports: 'named',
				sourcemap: true
			}
		],
		plugins: [typescript(), terser(esmTerserConfig)]
	},
	// Entry
	{
		input: './src/entry.ts',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			sourcemap: true
		},
		plugins: [typescript(), babel({babelHelpers: 'bundled', extensions: ['.ts']}), terser(terserConfig)]
	}
];

export default config;
