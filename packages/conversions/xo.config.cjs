const base = require('@jonahsnider/xo-config');

const config = {...base};

config.rules['unicorn/prefer-export-from'] = 'off';

module.exports = config;
