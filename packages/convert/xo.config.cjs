const base = require('@jonahsnider/xo-config');

const config = {...base};

config.rules['unicorn/error-message'] = 'off';
config.rules['unicorn/prefer-module'] = 'off';

config.overrides ??= [];
config.overrides.push(
	...['./test/**/*', './src/**/*.test.ts'].map(files => ({
		files,
		rules: {
			'import/extensions': ['error', 'never'],
		},
	})),
);

config.ignore ??= [];
config.ignore.push('./test/legacy.cjs', 'rollup.config-*.cjs');

module.exports = config;
