# `bundled-conversions`

The `bundled-conversions` package passes the conversions from [the `conversions` package](../conversions/) and passes them to [the `codegen` package](../codegen/).

The result is written to a file during build-time and exposed as a module which is consumed by the [`convert` package](../convert/).
