# Claude Code Guidelines for convert

## Package Manager

Use `pnpm` for managing packages and running scripts.
A few common ones:

- `pnpm lint:fix`
- `pnpm test:ci`
- `pnpm build`

## Before Pushing

Run `pnpm test:ci` locally to catch build and lint errors before pushing.

## Git Workflow

Don't force push or squash commits on feature branches unless necessary.
