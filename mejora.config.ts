import { defineConfig, eslint, typescript } from "mejora";

export default defineConfig({
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
  },
});
