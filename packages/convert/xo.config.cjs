const base = require('@jonahsnider/xo-config');

const config = {...base};

// There is no per-package .gitignore so you must explicitly tell XO to ignore these directories
config.ignores ??= [];
config.ignores.push('tsc_output', 'docs_out');

config.rules['unicorn/error-message'] = 'off';
config.rules['unicorn/prefer-module'] = 'off';

module.exports = config;
