# Claude Code Guidelines for convert

## TypeScript Strict Mode

This project uses `@tsconfig/strictest` with `exactOptionalPropertyTypes: true`.

When accessing environment variables, use bracket notation:

```ts
// biome-ignore lint/complexity/useLiteralKeys: Required for strict TypeScript index signature access
const token = process.env['MY_VAR'];
```

**Why:** Dot notation (`process.env.MY_VAR`) fails with TS4111 because `process.env` uses an index signature. The `biome-ignore` comment is required because Biome's `useLiteralKeys` rule will otherwise rewrite it back to dot notation.

## Git Workflow

- Don't force push or squash commits on feature branches unless necessary
- Commit history doesn't need to be perfectly clean on branches
