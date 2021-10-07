const base = require('@jonahsnider/xo-config');

const config = {...base};

config.ignore ??= [];
config.ignore.push('./docs', './src/test/legacy.js', './src/generated/generated.ts');

config.rules['unicorn/error-message'] = 'off';
config.rules['unicorn/prefer-module'] = 'off';

module.exports = config;
