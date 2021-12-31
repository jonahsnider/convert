const base = require('@jonahsnider/xo-config');

const config = {...base};

config.ignores ??= [];
config.ignores.push('src/index.ts');

module.exports = config;
