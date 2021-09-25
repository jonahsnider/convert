# `src/dev/`

This folder contains files that are for generating the optimized data used in published builds.

The optimization pipeline works like this:

1. Contributor writes idiomatic conversion data
2. The optimizer converts these into highly compact data structures
   For example:

   ```js
   const conversions = [{names: ['gram', 'grams'], symbols: ['g'], ratio: 1}];
   ```

   is compiled to

   ```js
   const conversions = {
   	gram: [0, 1],
   	grams: [0, 1],
   	g: [0, 1]
   };
   ```

   Arrays are used instead of objects because accessing properties with numbers uses less characters and more optimizations from V8 can be leveraged since many
   arrays are `PACKED_SMI`s.

3. The serializer emits TypeScript source into the `generated/` folder
4. The already optimized conversion functions import the generated conversions from the `generated/` folder

This allows developers to write clean conversions while still enabling maximum size and performance.
