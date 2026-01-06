import { defineConfig, eslint, regex, typescript , regexRunner} from "mejora";

export default defineConfig({
  runners:[regexRunner()],
  checks: {
    eslint: eslint({
      files: ["src/**/*.ts"],
    }),
    "typescript > noImplicitAny": typescript({
      overrides: {
        compilerOptions: {
          noImplicitAny: true,
        },
      },
    }),
    "typescript > noUncheckedIndexedAccess": typescript({
      overrides: {
        compilerOptions: {
          noUncheckedIndexedAccess: true,
        },
      },
    }),
    "suppression-comments": regex({
      files: ["src/**/*.{ts,tsx}"],
      patterns: [
        {
          pattern: /\/\/\s*TypeScript\s+error:\s*(.+)/gi,
          rule: "typescript-error",
          message: (match) => match[1]?.trim() || "no description",
        },
        {
          pattern: /\/\/\s*ESLint\s+error:\s*(.+)/gi,
          rule: "eslint-error",
          message: (match) => match[1]?.trim() || "no description",
        },
      ],
    }),
  },
});
