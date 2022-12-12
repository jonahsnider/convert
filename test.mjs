// @ts-check
import {convert} from './packages/convert';

// ['kilonewton', 'kilonewtons'], ['kN'],
// Good, added
convert(1, 'kilonewton').to('lbf');
convert(1, 'kilonewtons').to('lbf');
convert(1, 'kN').to('lbf');

// ['meganewton', 'meganewton'], ['MN']
// Good, added
convert(1, 'meganewton').to('lbf');
convert(1, 'meganewton').to('lbf');
convert(1, 'MN').to('lbf');

// ['dyne', 'dynes'], ['dyn']
// Already exists
convert(1, 'dyne').to('lbf');
convert(1, 'dynes').to('lbf');
convert(1, 'dyn').to('lbf');

// ['kilogram-force'], ['kgf']
// Already exists
convert(1, 'kilogram-force').to('lbf');
convert(1, 'kgf').to('lbf');

// ['ton-force'], ['tf', 'tonf']
// Good, added
convert(1, 'ton-force').to('lbf');
convert(1, 'tf').to('lbf');
convert(1, 'tonf').to('lbf');

// ['kilopound-force'], ['kipf']
// Not a real unit
convert(1, 'kilopound-force').to('lbf');
// Good, added
convert(1, 'kipf').to('lbf');

// ['megapound-force'], ['Mlbf']
// Not a real unit
convert(1, 'megapound-force').to('lbf');
convert(1, 'Mlbf').to('lbf');

// ['kilopond'], ['kilopond', 'kiloponds', 'kp']
// Already exists
convert(1, 'kilopond').to('lbf');
convert(1, 'kiloponds').to('lbf');
convert(1, 'kp').to('lbf');
