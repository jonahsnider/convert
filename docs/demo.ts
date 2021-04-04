import {convert, convertMany, ms} from 'convert';
// Only 3.44 kB with brotli compression, 3.96 kB gzipped

// Convert time, length, data, volume, mass, and more
convert(1024).from('bytes').to('kB');

// Won't compile in TypeScript & throws at runtime
convert(451).from('fahrenheit').to('meters');

// Combine several units into one, with a shorthand for ms
convertMany('1mo 13d').to('year');
ms('1mo 13d');

// Carbon link for screenshots
// Render as 2x PNG for GitHub
// https://carbon.now.sh/?bg=rgba%28185%2C172%2C172%2C0%29&t=dracula-pro&wt=sharp&l=application%2Ftypescript&ds=true&dsyoff=31px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=15.5px&lh=133%25&si=false&es=2x&wm=false&code=import%2520%257Bconvert%252C%2520convertMany%252C%2520ms%257D%2520from%2520%27convert%27%253B%250A%252F%252F%2520Only%25203.44%2520kB%2520with%2520brotli%2520compression%252C%25203.96%2520kB%2520gzipped%250A%250A%252F%252F%2520Convert%2520time%252C%2520length%252C%2520data%252C%2520volume%252C%2520mass%252C%2520and%2520more%250Aconvert%281024%29.from%28%27bytes%27%29.to%28%27kB%27%29%253B%250A%250A%252F%252F%2520Won%27t%2520compile%2520in%2520TypeScript%2520%2526%2520throws%2520at%2520runtime%250Aconvert%28451%29.from%28%27fahrenheit%27%29.to%28%27meters%27%29%253B%250A%250A%252F%252F%2520Combine%2520several%2520units%2520into%2520one%252C%2520with%2520a%2520shorthand%2520for%2520ms%250AconvertMany%28%271mo%252013d%27%29.to%28%27year%27%29%253B%250Ams%28%271mo%252013d%27%29%253B
