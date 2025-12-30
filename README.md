# mejora-example

A minimal example repository demonstrating how [mejora](https://github.com/jimmy-guzman/mejora) works with pnpm and TypeScript.

## What is mejora?

`mejora` (Spanish for "improvement") prevents regressions by comparing code quality checks against a committed baseline. It allows improvements but fails on regressions.

## How it works

1. **Baseline tracking**: All issues are stored in `.mejora/baseline.json`
2. **New issues fail**: Adding new issues causes CI to fail
3. **Improvements pass**: Fixing issues passes and updates the baseline
4. **CI protection**: The baseline is never modified in CI, only compared

## Repository structure

```
├── src/
│   └── index.ts          # Sample code with intentional issues
├── .mejora/
│   ├── baseline.json     # Committed baseline (DO NOT modify manually)
│   └── baseline.md       # Human-readable baseline report
├── mejora.config.mjs     # mejora configuration
├── eslint.config.js      # ESLint v9 flat config
├── tsconfig.json         # TypeScript configuration
└── .github/
    └── workflows/
        └── ci.yml        # GitHub Actions running mejora
```

## Current issues (intentional)

The repository contains exactly 2 intentional issues for demonstration:

1. **ESLint**: Unused variable in `src/index.ts:4`
2. **TypeScript**: Implicit `any` type in `src/index.ts:7`

These are tracked in `.mejora/baseline.json`.

## Usage

### Install dependencies

```bash
pnpm install
```

### Run mejora

```bash
pnpm mejora
```

This checks the codebase and compares results to the baseline:
- ✅ **Same or fewer issues**: Pass
- ❌ **New issues**: Fail

### Try it yourself

#### Example 1: Improvement (passes)

Fix one of the issues in `src/index.ts`:

```typescript
// Fix the unused variable issue
export const unusedVariable = 'This variable is now exported';
```

Run mejora:

```bash
pnpm mejora
```

✅ It will pass and update the baseline with the improvement.

#### Example 2: Regression (fails)

Add a new issue to `src/index.ts`:

```typescript
const anotherUnusedVar = 'oops';
```

Run mejora:

```bash
pnpm mejora
```

❌ It will fail due to the new regression.

#### Example 3: Force update baseline

To accept regressions (use sparingly):

```bash
pnpm mejora --force
```

## CI behavior

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs `pnpm mejora` on every push and pull request.

**Important**: In CI environments, mejora:
- Never modifies the baseline
- Only compares current issues against the committed baseline
- Fails if there's any difference (improvements or regressions)

This ensures:
- Developers must run `mejora` locally before pushing
- The baseline stays in sync with the code
- No surprises in CI

## Configuration

### mejora.config.mjs

```javascript
import { defineConfig, eslint, typescript } from 'mejora';

export default defineConfig({
  checks: {
    'eslint': eslint({
      files: ['src/**/*.ts'],
    }),
    'typescript': typescript({
      overrides: {
        compilerOptions: {
          noImplicitAny: true,
        },
      },
    }),
  },
});
```

### Available checks

- `eslint`: Runs ESLint and tracks lint messages
- `typescript`: Runs TypeScript compiler and tracks diagnostics

## Learn more

- [mejora repository](https://github.com/jimmy-guzman/mejora)
- [mejora npm package](https://www.npmjs.com/package/mejora)

## Requirements

- Node.js 22.18.0 or later
- pnpm 10 or later
