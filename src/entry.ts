module.exports = require(process.env.NODE_ENV === 'development' ? './convert.dev.js' : './convert.prod.js');
