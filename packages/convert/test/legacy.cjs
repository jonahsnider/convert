var assert = require('assert');
var lib = require('../../convert/dist/convert.prod');

assert.strictEqual(lib.convert(5, 'miles').to('km'), 8.04672);
assert.strictEqual(lib.convertMany('4d 16h').to('minutes'), 6720);
assert.strictEqual(lib.ms('1d 2h 30min'), 95400000);

var best = lib.convert(24, 'h').to('best');
var string = best.toString();

delete best.toString;

assert.deepEqual(best, {quantity: 24, unit: 'h'});
assert.strictEqual(string, '24h');

best = lib.convert(12, 'in').to('best', 'imperial');
string = best.toString();

delete best.toString;

assert.deepEqual(best, {quantity: 1, unit: 'ft'});
assert.strictEqual(string, '1ft');
