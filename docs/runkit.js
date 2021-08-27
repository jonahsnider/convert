const {convert, convertMany, ms} = require('convert');
// Only 4.27 kB with brotli compression, 5.07 kB gzipped

// Convert time, length, data, volume, mass, and more
convert(1024, 'bytes').to('kB');

// Won't compile in TypeScript & throws at runtime
convert(451, 'fahrenheit').to('meters');

// Combine several units into one, with a shorthand for ms
convertMany('1mo 13d').to('year');
ms('1mo 13d');
