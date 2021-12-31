# `optimized-conversions`

The `optimized-conversions` package exposes an optimizer function that is used with unit families from [the `conversions` package][conversions].

The output of the optimizer is a highly compact representation of the input which compresses the data to minimize bundle size.

## Example

Here's a very minimal example of what a conversion family from [the `conversions` package][conversions] looks like:

```js
const mass = {
	id: 0,
	conversions: [
		{names: ['gram', 'grams'], symbols: ['g'], ratio: 1},
		{names: ['kilogram', 'kilograms'], symbols: ['kg'], ratio: 1000},
	],
};

const conversions = [mass];
```

And here's what it might be optimized to:

```js
const conversions = {
	gram: [0, 1],
	grams: [0, 1],
	g: [0, 1],
	kilogram: [0, 1000],
	kilograms: [0, 1000],
	kg: [0, 1000],
};
```

[conversions]: ../conversions/
