import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	ignore: ['docs/**'],
	entry: ['src/index.ts', 'src/**/*.bench.ts'],

	// Referenced as a string in rollup.config.ts
	ignoreDependencies: ['@babel/preset-env'],
};

export default config;
