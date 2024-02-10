default: build

# Lint with Biome
lint: generate
  yarn biome check .

# Apply lint fixes
lint-fix: generate
	yarn biome check . --apply-unsafe

# Generate docs to ./docs_out
docs: generate
	yarn typedoc src/index.ts --out docs_out

# Check bundle size
size: bundle
	yarn size-limit

# Run unit tests
test: generate
	yarn vitest run

# Run unit tests in watch mode
test-dev: generate
	yarn vitest --ui

# Generate conversions
generate:
	bun scripts/generate.ts -o src/generated/

# Compile types
types: generate
	yarn tsc

# Create JS bundle
bundle: generate
	yarn rollup --config rollup.config.ts --configPlugin swc

# Run API Extractor
validate-api: types
	yarn api-extractor run

# Run API Extractor in local mode
validate-api-local: types
	yarn api-extractor run --local --verbose

# Build for production
build: validate-api bundle

# Run semantic-release
release: build
	yarn semantic-release

# Run benchmarks
benchmarks: bundle types
	NODE_ENV=production node dist/benchmarks/benchmarks.mjs
