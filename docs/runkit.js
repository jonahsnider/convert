const {convert, convertMany, ms} = require('convert');

// Convert time, length, data, volume, mass, and more
convert(1024, 'bytes').to('kB');

// Combine several units into one, with a shorthand for ms
convertMany('1mo 13d').to('year');
ms('1mo 13d');
