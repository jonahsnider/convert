import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	ignore: ['docs/**'],
	entry: ['src/index.ts', 'src/conversions-entry.ts', 'src/**/*.bench.ts'],
};

export default config;
