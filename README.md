# mejora-example

A comprehensive example repository demonstrating how [mejora](https://github.com/jimmy-guzman/mejora) works with pnpm and TypeScript at scale, showcasing incremental compilation caching performance.

## What is mejora?

`mejora` (Spanish for "improvement") prevents regressions by comparing code quality checks against a committed baseline. It allows improvements but fails on regressions.

## Repository Overview

This repository has been expanded to **62 TypeScript files** with **525 intentional issues** (243 ESLint + 282 TypeScript) spread across a realistic module structure to demonstrate mejora's caching performance benefits.

### Performance Demonstration

**TypeScript Incremental Compilation Caching:**
- ❄️ **Cold run** (no cache): ~5.0 seconds
- 🔥 **Warm run** (with cache): ~2.6 seconds  
- ⚡ **Speedup**: **~1.9x faster** with caching

This speedup demonstrates how mejora leverages TypeScript's incremental compilation to provide faster feedback on large codebases.

## Repository Structure

```
src/
├── index.ts              # Main entry point with cross-module imports
├── components/           # UI components (10 files)
│   ├── button.ts
│   ├── input.ts
│   ├── modal.ts
│   ├── card.ts
│   ├── list.ts
│   ├── form.ts
│   ├── table.ts
│   ├── dropdown.ts
│   ├── alert.ts
│   └── tabs.ts
├── services/             # Business logic (6 files)
│   ├── user-service.ts
│   ├── product-service.ts
│   ├── order-service.ts
│   ├── auth-service.ts
│   ├── notification-service.ts
│   └── analytics-service.ts
├── models/               # Data models and types (12 files)
│   ├── user.ts
│   ├── role.ts
│   ├── permission.ts
│   ├── product.ts
│   ├── category.ts
│   ├── tag.ts
│   ├── order.ts
│   ├── dashboard.ts
│   ├── notification.ts
│   ├── session.ts
│   ├── settings.ts
│   └── analytics.ts
├── utils/                # Utility functions (12 files)
│   ├── string-utils.ts
│   ├── array-utils.ts
│   ├── date-utils.ts
│   ├── number-utils.ts
│   ├── object-utils.ts
│   ├── validation-utils.ts
│   ├── metrics.ts
│   ├── formatter.ts
│   ├── logger.ts
│   ├── cache.ts
│   ├── pagination.ts
│   ├── event-emitter.ts
│   └── async-utils.ts
├── api/                  # API client code (6 files)
│   ├── types.ts
│   ├── client.ts
│   ├── user-api.ts
│   ├── product-api.ts
│   ├── order-api.ts
│   └── auth-api.ts
├── hooks/                # Custom hooks (6 files)
│   ├── use-state.ts
│   ├── use-effect.ts
│   ├── use-fetch.ts
│   ├── use-local-storage.ts
│   ├── use-debounce.ts
│   └── use-auth.ts
└── features/             # Feature modules (8 files)
    ├── dashboard/
    │   ├── dashboard-controller.ts
    │   └── types.ts
    ├── profile/
    │   └── profile-controller.ts
    ├── auth/
    │   └── auth-controller.ts
    ├── cart/
    │   └── cart-controller.ts
    ├── checkout/
    │   └── checkout-controller.ts
    ├── notifications/
    │   └── notification-controller.ts
    └── settings/
        └── settings-controller.ts
```

## Current Issues (Intentional)

The repository contains **525 intentional issues** for demonstration:

### TypeScript Errors (282 total)
- Implicit `any` parameters (missing type annotations)
- Type mismatches (assigning wrong types)
- Missing return statements in functions
- Property doesn't exist on type
- Functions lacking ending return statement

### ESLint Warnings (243 total)
- Unused variables (`const x = ...` never used)
- `prefer-const` violations (using `let` instead of `const`)
- Unused imports
- `@typescript-eslint/no-unused-vars` violations

These issues are **spread across all files** (not concentrated in one place) to simulate a realistic codebase with gradual technical debt.

## How it Works

1. **Baseline tracking**: All 525 issues are stored in `.mejora/baseline.json`
2. **New issues fail**: Adding new issues causes CI to fail
3. **Improvements pass**: Fixing issues passes and updates the baseline
4. **CI protection**: The baseline is never modified in CI, only compared

## Code Characteristics

Each file in the codebase demonstrates:

- **Realistic size**: 50-150 lines per file
- **Cross-file dependencies**: Each file imports from 2-4 other files
- **Complex TypeScript types**:
  - Generic types with constraints: `<T extends User>`
  - Conditional types: `type IsString<T> = T extends string ? true : false`
  - Mapped types: `type Readonly<T> = { readonly [P in keyof T]: T[P] }`
  - Template literal types: `type EventName = \`on\${Capitalize<string>}\``
  - Complex intersections/unions: `(User & Admin) | Guest`

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

Fix one of the issues in any file, for example in `src/models/user.ts`:

```typescript
// Fix the implicit any error
export function getUserDisplayName(user: User) {  // Add type annotation
  return user.name || user.email;
}
```

Run mejora:

```bash
pnpm mejora
```

✅ It will pass and update the baseline with the improvement.

#### Example 2: Regression (fails)

Add a new issue to any file:

```typescript
const anotherUnusedVar = 'oops';
```

Run mejora:

```bash
pnpm mejora
```

❌ It will fail due to the new regression.

#### Example 3: Force update baseline

To accept all current issues (use sparingly):

```bash
pnpm mejora --force
```

## CI Behavior

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

### Available Checks

- `eslint`: Runs ESLint and tracks lint messages
- `typescript`: Runs TypeScript compiler and tracks diagnostics (with incremental caching)

## Learn More

- [mejora repository](https://github.com/jimmy-guzman/mejora)
- [mejora npm package](https://www.npmjs.com/package/mejora)

## Requirements

- Node.js 22.18.0 or later
- pnpm 10 or later
