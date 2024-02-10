import { convert, convertMany, ms } from 'convert';

// Convert time, length, mass, and many others
convert(2048, 'bytes').to('kiB'); // 2
convert(5000, 'feet').to('best').toString(); // '1.524km'

// Parse strings
convertMany('5ft 11in').to('cm'); // 180.34

// ms compatibility function
ms(86400000); // '1d'
ms('12h'); // 43200000

// Won't compile in TypeScript & throws at runtime
convert(451, 'fahrenheit').to('meters');

// Carbon link for screenshots
// Render as 2x PNG for GitHub
// https://carbon.now.sh/?bg=rgba%28185%2C172%2C172%2C0%29&t=dracula-pro&wt=sharp&l=application%2Ftypescript&ds=true&dsyoff=31px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=CascadiaCodePL&fs=15.5px&lh=133%25&si=false&es=2x&wm=false&code=import%2520%257Bconvert%252C%2520convertMany%252C%2520ms%257D%2520from%2520%27convert%27%253B%250A%250A%252F%252F%2520Convert%2520time%252C%2520length%252C%2520mass%252C%2520and%2520many%2520others%250Aconvert%282048%252C%2520%27bytes%27%29.to%28%27kiB%27%29%253B%2520%252F%252F%25202%250Aconvert%285000%252C%2520%27feet%27%29.to%28%27best%27%29.toString%28%29%253B%2520%252F%252F%2520%271.524km%27%250A%250A%252F%252F%2520Parse%2520strings%250AconvertMany%28%275ft%252011in%27%29.to%28%27cm%27%29%253B%2520%252F%252F%2520180.34%250A%250A%252F%252F%2520ms%2520compatibility%2520function%250Ams%2886400000%29%253B%2520%252F%252F%2520%271d%27%250Ams%28%2712h%27%29%253B%2520%252F%252F%252043200000%250A%250A%252F%252F%2520Won%27t%2520compile%2520in%2520TypeScript%2520%2526%2520throws%2520at%2520runtime%250Aconvert%28451%252C%2520%27fahrenheit%27%29.to%28%27meters%27%29%253B
