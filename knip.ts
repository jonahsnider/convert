import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	ignore: ['docs/**'],
	entry: ['src/index.ts', 'src/**/*.bench.ts'],

	// Referenced as a string in rollup.config.ts
	// @vitest/coverage-v8 is dynamically loaded by vitest when coverage.provider is 'v8'
	ignoreDependencies: ['@babel/preset-env', '@vitest/coverage-v8'],
};

export default config;
