import assert from 'node:assert/strict';
import convert from 'convert';
import convertDev from 'convert/dev';
import convertProd from 'convert/prod';

assert.strictEqual(convert(5, 'miles').to('km'), 8.046_72);
assert.strictEqual(convertDev(5, 'miles').to('km'), 8.046_72);
assert.strictEqual(convertProd(5, 'miles').to('km'), 8.046_72);
