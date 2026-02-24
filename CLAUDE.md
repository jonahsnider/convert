# Claude Code Guidelines for convert

## Package Manager

Use `yarn` for managing packages and running scripts.
A few common ones:

- `yarn lint:fix`
- `yarn test:ci`
- `yarn build`

## Before Pushing

Run `yarn test:ci` locally to catch build and lint errors before pushing.

## Git Workflow

Don't force push or squash commits on feature branches unless necessary.
