# Convert

The [smallest](https://bundlephobia.com/result?p=convert) & [fastest](https://github.com/jonahsnider/js-unit-conversion-benchmarks) library for really easy, totally type-safe unit conversions in TypeScript & JavaScript.

[![Codecov](https://img.shields.io/codecov/c/gh/jonahsnider/convert)](https://codecov.io/gh/jonahsnider/convert)
[![CI](https://github.com/jonahsnider/convert/actions/workflows/ci.yml/badge.svg)](https://github.com/jonahsnider/convert/actions/workflows/ci.yml)

```sh
npm install convert
# or
yarn add convert
```

[**More installation steps below**](#Installation).

```js
convert(5, 'miles').to('km');
convertMany('4d 16h').to('minutes');
```

## Features

- Full build time and runtime validation of conversions
- Using a web framework like Next.js or Nuxt.js? You get 0-cost build-time conversions. Convert is totally side-effect free, so [**conversions will be precalculated at build-time**](https://github.com/jonahsnider/convert/blob/master/docs/build-time-optimizations.tsx), so absolutely **zero conversion code is sent to clients**!
- Works in browsers and Node.js (UMD and ESM builds will work anywhere)
- Out of the box ES3 backwards-compatibility (CI tests on Node.js v0.9.1)
- Absolutely tiny bundle size and 0 dependencies
- Supports bigints without breaking on old engines

## Usage

API documentation for the latest version is generated and available online.

[**View docs**](https://convert.jonah.pw).

```ts
// ESM:
import convert from 'convert';
// CJS:
const {convert} = require('convert');

// 360 seconds into minutes
convert(360, 'seconds').to('minutes');
// -> 6

// BigInt support
convert(20n, 'hours').to('minutes');
// -> 1200n

// Format to the best unit automatically
convert(5500, 'meters').to('best');
// -> { quantity: 5.5, unit: 'km', toString: () => '5.5km' }

// We also do length, data, volume, mass, temperature, and more
convert(5, 'kilometers').to('nautical miles');
convert(12, 'pounds').to('ounces');
convert(8192, 'bytes').to('KiB');
convert(10, 'atmospheres').to('kPa');
convert(451, 'fahrenheit').to('celsius');
```

### Converting many units

```ts
import {convertMany} from 'convert';
const {convertMany} = require('convert');

// Convert 1 day and 8 hours into ms
convertMany('1d8h').to('ms');
```

### Converting to best unit

```ts
import convert from 'convert';
const {convert} = require('convert');

// Convert into the best unit
const duration = convert(36, 'h').to('best');
// -> { quantity: 1.5, unit: 'd', toString: () => '1.5d' }

// The toString() method means you can automatically cast the object to a string without any issues
'duration is ' + duration;
// -> duration is 1.5d
```

### `ms` shorthand

```ts
import {ms} from 'convert';
const {ms} = require('convert');

// Convert a duration into milliseconds
ms('1d 2h 30min');
// -> 95400000
```

## Installation

### Package maneger

Convert is published as `convert` on npm.

```sh
npm install convert
# or
yarn add convert
```

#### CommonJS

```js
// Chooses dev build if NODE_ENV is "development", otherwise uses prod build
const {convert} = require('convert');
const {convert} = require('convert/dev');
const {convert} = require('convert/prod');
```

#### ES Modules

```js
// ESM does not have automatic build switching, you must explicitly import the dev build
import convert from 'convert';
import convert from 'convert/dev';
import convert from 'convert/prod';
```

### Browsers

#### UMD (global)

Pick your favorite CDN:

```html
<script type="module">
	import convert from 'https://unpkg.com/convert@2?module';
	import convert from 'https://cdn.skypack.dev/convert@2';
	import convert from 'https://esm.run/convert@2';
</script>

<!-- or -->

<script src="https://cdn.jsdelivr.net/npm/convert@2"></script>
<script src="https://unpkg.com/convert@2"></script>
```

## Alternatives

Convert is better than other unit conversion libraries because it's faster and smaller than them, while having the same features.
Benchmarks of popular unit conversion libraries, including convert are [available here](https://github.com/jonahsnider/js-unit-conversion-benchmarks).

Convert is the fastest, taking less than a microsecond for all functions.
That's a little over 3 million `convert()` calls per second.

[![npm bundle size of convert](https://img.shields.io/bundlephobia/minzip/convert?label=convert)](https://bundlephobia.com/result?p=convert)

[![npm bundle size of uom](https://img.shields.io/bundlephobia/minzip/uom?label=uom)](https://bundlephobia.com/result?p=uom)
![+](https://img.shields.io/badge/%2B-gray)
[![npm bundle size of uom-units](https://img.shields.io/bundlephobia/minzip/uom-units?label=uom-units)](https://bundlephobia.com/result?p=uom-units)

[![npm bundle size of units-converter](https://img.shields.io/bundlephobia/minzip/units-converter?label=units-converter)](https://bundlephobia.com/result?p=units-converter)

[![npm bundle size of safe-units](https://img.shields.io/bundlephobia/minzip/safe-units?label=safe-units)](https://bundlephobia.com/result?p=safe-units)

[![npm bundle size of convert-units](https://img.shields.io/bundlephobia/minzip/convert-units?label=convert-units)](https://bundlephobia.com/result?p=convert-units)

[![npm bundle size of js-quantities](https://img.shields.io/bundlephobia/minzip/js-quantities?label=js-quantities)](https://bundlephobia.com/result?p=js-quantities)

## Thanks

Big thanks to @Jdender, @TheAkio, @iCrawl, @p7g, @aequasi, @aetheryx, and the [TypeScript Discord server](https://discord.gg/typescript) for their help in getting the typesafety working.

Thanks to @MicroDroid for fixing temperature conversion.
