module.exports = process.env.NODE_ENV === 'development' ? require('./convert.dev.js') : require('./convert.prod.js');
