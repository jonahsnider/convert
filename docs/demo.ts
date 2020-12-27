import {convert} from 'convert';
// or
const {convert} = require('convert');

// Only 3.14 kB with brotli compression, 3.66 kB gzipped

convert(330).from('minutes').to('hours');
// You can also convert mass, length, etc.

// Won't compile in TypeScript & throws at runtime
convert(330).from('fahrenheit').to('meters');

// Carbon link for screenshots
// Render as 2x PNG for GitHub
// https://carbon.now.sh/?bg=rgba%28185%2C172%2C172%2C0%29&t=dracula-pro&wt=sharp&l=application%2Ftypescript&ds=true&dsyoff=31px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=16.5px&lh=133%25&si=false&es=2x&wm=false&code=import%2520convert%2520from%2520%27convert%27%253B%250A%252F%252F%2520or%250Aconst%2520%257B%2520convert%2520%257D%2520%253D%2520require%28%27convert%27%29%253B%250A%250A%252F%252F%2520Only%25203.14%2520kB%2520with%2520brotli%2520compression%252C%25203.66%2520kB%2520gzipped%250A%250Aconvert%28330%29.from%28%27minutes%27%29.to%28%27hours%27%29%253B%250A%252F%252F%2520You%2520can%2520also%2520convert%2520mass%252C%2520length%252C%2520etc.%250A%250A%252F%252F%2520Won%27t%2520compile%2520in%2520TypeScript%2520%2526%2520throws%2520at%2520runtime%250Aconvert%28330%29.from%28%27fahrenheit%27%29.to%28%27meters%27%29%253B
