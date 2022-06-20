# ts-dependency-test
Testing out how to use typescript annotations with dependencies

## Problem:

tl;dr: Typescript doesn't have good support for JSDoc despite their claims

- TypeScript says it can infer types from [JSDoc annotations](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#providing-type-hints-in-js-via-jsdoc)
- In practice this only works within your project
- In this repo, we have an `example` module which exports a function with JSDoc annotations
- Importing it from `./index.js` yields an error saying the `d.ts` file could not be found for the module even though the index should be usable for getting types from annotations. 🤷

