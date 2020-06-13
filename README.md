# Convert

A small library for really easy, totally type-safe unit conversions in JavaScript & TypeScript.

[![bundlephobia](https://bundlephobia.com/api/stats-image?name=convert&version=0.7.0-canary&wide=true)](https://bundlephobia.com/result?p=convert)
[![Codecov](https://img.shields.io/codecov/c/gh/pizzafox/convert)](https://codecov.io/gh/pizzafox/convert)

It's almost ready for production release, just need to add in some more conversions.

```sh
yarn add convert
# or
npm install convert
```

## Features

- Full build time and runtime checks of conversions
- Treeshake-able builds available
- 0 dependencies
- Out of the box ES5 backwards-compatibility
- Works in browsers and Node.js

## Usage

```ts
// ESM:
import {convert} from 'convert';
// CJS:
const {convert} = require('convert');

// 360 seconds into minutes
convert(360).from('seconds').to('minutes');
// -> 6

// BigInt support
convert(20n).from('hours').to('minutes');
// -> 1200n

// We also do length, mass, data, and temperature
convert(5).from('kilometers').to('nautical miles');
convert(64).from('bytes').to('KiB');
convert(12).from('pounds').to('ounces');
convert(451).from('fahrenheit').to('celsius');
```

## Contributing

Below is a list of commands you will probably find useful.

### `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Alternatives

All of them are bad because they aren't as small as this and many aren't as simple to use.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/convert?label=convert)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/uom?label=uom)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/units-converter?label=units-converter)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/safe-units?label=safe-units)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/convert-units?label=convert-units)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/js-quantities?label=js-quantities)

## Thanks

Big thanks to @Jdender, @TheAkio, @iCrawl, @p7g, @aequasi, and the [TypeScript Discord server](https://discord.gg/typescript) for their help in getting the typesafety working.

Thanks to @MicroDroid for fixing temperature conversion.
