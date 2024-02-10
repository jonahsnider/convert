# Contributing

Convert is a fairly standard TS project.

## Running scripts

Because the build process is a little more complex than just `yarn build`, we use [`just`](https://github.com/casey/just) to run scripts.

You can install it globally on your computer, or just run `yarn install` and then it'll be available as `yarn just`.

To see available scripts:

```sh
just --list
# or
yarn just --list
```

And to run a script:

```sh
just <scripts>
# or
yarn just <scripts>
```
