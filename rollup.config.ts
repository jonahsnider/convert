import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';
import terser, { Options as TerserOptions } from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

// NOTE: Using getBabelOutputPlugin() instead of the default babel() plugin is necessary as a workaround to transform the modules that Rollup bundles
// ex. const conversions = ... is not transformed by babel() for some reason (maybe because it's from an input chunk?)
// If you undo this workaround you will probably notice that parts of your final output aren't ES5 compatible

const terserConfig = {
	ecma: 5,
	compress: {
		arrows: false,
		arguments: true,
		// biome-ignore lint/style/useNamingConvention: This has to be camelcase
		keep_fargs: false,
		toplevel: true,
		passes: 10,
		unsafe: true,
		// Required to reduce unnecessary side-effect reads of properties of `this` from Function.prototype.bind
		// biome-ignore lint/style/useNamingConvention: This has to be camelcase
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
} satisfies TerserOptions;

const esmTerserConfig = {
	...terserConfig,
	ecma: 2015,
	compress: {
		...terserConfig.compress,
		ecma: 2015,
	},
} satisfies TerserOptions;

// biome-ignore lint/style/noDefaultExport: This must be a default export for Rollup
export default defineConfig([
	{
		input: './src/index.ts',
		plugins: [nodeResolve({ extensions: ['.js', '.ts'] }), swc(), terser(esmTerserConfig)],
		output: {
			file: './dist/index.mjs',
			format: 'esm',
			exports: 'named',
			sourcemap: 'inline',
		},
	},
	{
		input: './src/index.ts',
		plugins: [
			nodeResolve({ extensions: ['.js', '.ts'] }),
			swc(),
			getBabelOutputPlugin({
				presets: [
					[
						'@babel/env',
						{
							modules: 'umd',
						},
					],
				],
				filename: 'convert.js',
			}),
			terser(terserConfig),
		],
		output: {
			file: './dist/index.js',
			format: 'esm',
			name: 'convert',
			exports: 'named',
			sourcemap: 'inline',
		},
	},
]);
