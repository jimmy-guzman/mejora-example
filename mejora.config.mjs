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
