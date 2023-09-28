// eslint-disable-next-line n/prefer-global/process
module.exports = require(process.env.NODE_ENV === 'development' ? './convert.dev.js' : './convert.prod.js');
// Required to make TypeScript's __importDefault() helper work in CommonJS
Object.defineProperty(exports, '__esModule', {value: true});
