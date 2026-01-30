# Claude Code Guidelines for convert

## Before Pushing

Run `yarn test:ci` locally to catch build and lint errors before pushing.

## Git Workflow

Don't force push or squash commits on feature branches unless necessary.

## TypeScript Patterns

When passing optional properties that may be `undefined` to functions using `exactOptionalPropertyTypes`, use conditional spread instead of direct assignment:

```ts
// ❌ Bad - fails with exactOptionalPropertyTypes
{ uploadToken: maybeUndefinedValue }

// ✅ Good - only includes property when defined
...(maybeUndefinedValue && { uploadToken: maybeUndefinedValue })
```
