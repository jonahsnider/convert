# Convert

The [smallest](https://bundlephobia.com/package/convert) & [fastest](https://github.com/jonahsnider/js-unit-conversion-benchmarks) library for really easy, totally type-safe unit conversions in TypeScript & JavaScript.

[![bundle size](https://img.shields.io/bundlephobia/minzip/convert)](https://bundlephobia.com/package/convert)
[![npm monthly downloads](https://img.shields.io/npm/dm/convert)](https://www.npmjs.com/package/convert)

```sh
npm install convert
# or
yarn add convert
```

[**More installation examples below**](#Installation).

```js
convert(5, "miles").to("km");
convertMany("4d 16h").to("minutes");
```

## Features

- Full build time and runtime validation of conversions
- Web frameworks like Next.js and Vite know that Convert is side-effect free, so [conversions will be precalculated at build-time](https://github.com/jonahsnider/convert/blob/main/docs/build-time-optimizations.tsx), absolutely zero conversion code is sent to clients
- Runs anywhere (browsers, Node, Bun, etc), full ES3 backwards-compatibility
- Tiny bundle size and 0 dependencies
- Supports bigints

## Usage

Generated API documentation for the latest version is available online.

[**View docs**](https://convert.js.org).

```ts
// ESM:
import convert from "convert";
// CJS:
const { convert } = require("convert");

// 360 seconds into minutes
convert(360, "seconds").to("minutes");
// -> 6

// BigInt support
convert(20n, "hours").to("minutes");
// -> 1200n

// Format to the best unit automatically
convert(5500, "meters").to("best");
// -> { quantity: 5.5, unit: 'km', toString: () => '5.5 km' }

// You can also do length, data, volume, mass, temperature, and more
convert(5, "kilometers").to("nautical miles");
convert(12, "pounds").to("ounces");
convert(8192, "bytes").to("KiB");
convert(10, "atmospheres").to("kPa");
convert(451, "fahrenheit").to("celsius");
```

### Converting many units

```ts
import { convertMany } from "convert";
const { convertMany } = require("convert");

// Convert 1 day and 8 hours into ms
convertMany("1d8h").to("ms");
```

### Converting to best unit

```ts
import convert from "convert";
const { convert } = require("convert");

// Convert into the best unit
const duration = convert(36, "h").to("best");
// -> { quantity: 1.5, unit: 'd', toString: () => '1.5 d' }

// The toString() method means you can automatically cast the object to a string without any issues
"duration is " + duration;
// -> duration is 1.5d

// You can also specify to use a specific kind of units (metric or imperial, metric is default)
convert(3.5, "km").to("best"); // -> { quantity: 3.5, unit: 'km', toString: () => '3.5 km' }
convert(3.5, "km").to("best", "metric"); // -> { quantity: 3.5, unit: 'km', toString: () => '3.5 km' }
convert(3.5, "km").to("best", "imperial"); // -> { quantity: 2.17, unit: 'mi', toString: () => '3.5 mi' }
```

### `ms` shorthand

```ts
import { ms } from "convert";
const { ms } = require("convert");

// Convert a duration into milliseconds
ms("1d 2h 30min");
// -> 95400000

// Convert milliseconds to a string
ms(86400000);
// -> '1d'
```

## Installation

### Package manager

Convert is published as `convert` on npm.

```sh
npm install convert
# or
yarn add convert
```

And then import it in your code like this:

```js
// CommonJS
const { convert } = require("convert");

// ESM
import convert from "convert";
```

### Browsers

Pick your favorite CDN:

#### ES Modules via CDN

```html
<script type="module">
	import convert from "https://cdn.skypack.dev/convert@5";
	import convert from "https://esm.run/convert@5";
	import convert from "https://cdn.jsdelivr.net/npm/convert@5";
	import convert from "https://unpkg.com/convert@5";
</script>
```

#### UMD (global)

```html
<script src="https://cdn.jsdelivr.net/npm/convert@5/dist/index.js"></script>
<script src="https://unpkg.com/convert@5/dist/index.js"></script>
```

## Alternatives

Convert is better than other unit conversion libraries because it's faster and smaller than them, while having the same features.
Benchmarks of popular unit conversion libraries, including Convert are [available here](https://github.com/jonahsnider/js-unit-conversion-benchmarks).

Convert is the fastest, taking less than a microsecond for all functions.
That's a little over 3 million `convert()` calls per second.

### Bundle size comparison

[![npm bundle size of convert](https://img.shields.io/bundlephobia/minzip/convert?label=convert)](https://bundlephobia.com/result?p=convert)

[![npm bundle size of safe-units](https://img.shields.io/bundlephobia/minzip/safe-units?label=safe-units)](https://bundlephobia.com/result?p=safe-units)

[![npm bundle size of convert-units](https://img.shields.io/bundlephobia/minzip/convert-units?label=convert-units)](https://bundlephobia.com/result?p=convert-units)

[![npm bundle size of js-quantities](https://img.shields.io/bundlephobia/minzip/js-quantities?label=js-quantities)](https://bundlephobia.com/result?p=js-quantities)

[![npm bundle size of uom](https://img.shields.io/bundlephobia/minzip/uom?label=uom)](https://bundlephobia.com/result?p=uom)
![+](https://img.shields.io/badge/%2B-gray)
[![npm bundle size of uom-units](https://img.shields.io/bundlephobia/minzip/uom-units?label=uom-units)](https://bundlephobia.com/result?p=uom-units)
