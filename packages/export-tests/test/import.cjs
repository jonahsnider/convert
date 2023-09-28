const assert = require('node:assert/strict');
const {convert} = require('convert');

assert.strictEqual(convert(5, 'miles').to('km'), 8.046_72);
