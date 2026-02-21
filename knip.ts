import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	ignore: ['docs/**'],
	entry: ['src/index.ts', 'src/**/*.bench.ts'],

	// @vitest/coverage-v8 is dynamically loaded by vitest when coverage.provider is 'v8'
	ignoreDependencies: ['@vitest/coverage-v8'],
};

export default config;
