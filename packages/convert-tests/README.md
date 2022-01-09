# `convert-tests`

The `convert-tests` package contains unit tests for the [`convert` package][convert].

Keeping the tests in a separate package is a work around to make the following possible:

- Test against the fully compiled & bundled [`convert` package][convert]
- Write tests in ESM & use a different `tsconfig.json`

[convert]: ../convert
