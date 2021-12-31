const base = require('@jonahsnider/xo-config');

const config = {...base};

config.ignore ??= [];
config.ignore.push('./test/legacy.cjs');

module.exports = config;
