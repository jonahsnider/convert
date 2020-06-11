# Convert

[![bundlephobia](https://bundlephobia.com/api/stats-image?name=convert&version=0.1.1-canary&wide=true)](https://bundlephobia.com/result?p=convert)

A small library for really easy, totally type-safe unit conversions in JavaScript & TypeScript.

It's not ready for production release, but all the groundwork for adding in new conversions is done.

```sh
yarn add convert
# or
npm install convert
```

## Features

- Full build time and runtime checks of conversions
- Treeshake-able builds available
- Out of the box ES3 backwards-compatibility
- 0 dependencies

## Usage

```ts
import {convert} from 'convert';

// 360 seconds into minutes
convert(360)
	.from('seconds')
	.to('minutes'); // 6
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

## Thanks

Big thanks to @Jdender, @TheAkio, @iCrawl, @p7g, @aequasi, and the [TypeScript Discord server](https://discord.gg/typescript) for their help in getting the typesafety working.
