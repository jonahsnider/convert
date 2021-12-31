const base = require('@jonahsnider/xo-config');

const config = {...base};

config.ignore ??= [];
config.ignore.push('./test/util/legacy.js');

module.exports = config;
