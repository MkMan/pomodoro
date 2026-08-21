import jestDom from 'eslint-plugin-jest-dom';
import perfectionist from 'eslint-plugin-perfectionist';
import solidTsConfig from 'eslint-plugin-solid/configs/typescript';
import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
  },
  jsPlugins: ['eslint-plugin-solid', 'eslint-plugin-perfectionist'],
  options: {
    typeAware: true,
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}', 'test.{ts,tsx}'],
      jsPlugins: ['eslint-plugin-jest-dom', 'eslint-plugin-testing-library'],
      plugins: ['vitest'],
      rules: {
        ...jestDom.configs['flat/recommended'].rules,
        ...testingLibrary.configs['flat/dom'].rules,
      },
    },
  ],
  plugins: ['typescript', 'unicorn', 'oxc'],
  rules: {
    ...solidTsConfig.rules,
    ...perfectionist.configs['recommended-natural'].rules,
  },
});
