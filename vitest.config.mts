import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
// eslint-disable-next-line n/file-extension-in-import
import { defineConfig } from 'vitest/config';

export default defineConfig({
	root: dirname(fileURLToPath(import.meta.url)),
	test: {
		include: ['src/**/*.test.ts'],
		exclude: ['./.rollup.cache/**/*', './dist/**/*'],
	},
});
