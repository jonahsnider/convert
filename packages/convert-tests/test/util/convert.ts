/* eslint-disable node/no-unsupported-features/es-syntax, @typescript-eslint/consistent-type-imports */

// @ts-expect-error Not using Node12 module resolution algorithm
export const prod = (await import('convert/prod')) as typeof import('convert');

// @ts-expect-error Not using Node12 module resolution algorithm
export const dev = (await import('convert/dev')) as typeof import('convert');
