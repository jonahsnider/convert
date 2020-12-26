import {convert} from 'convert';
// or
const {convert} = require('convert');

// Only 3.14 kB with brotli compression, 3.66 kB gzipped

convert(330).from('minutes').to('hours');
// You can also convert mass, length, etc.

// Won't compile in TypeScript & throws at runtime
convert(330).from('fahrenheit').to('meters');
