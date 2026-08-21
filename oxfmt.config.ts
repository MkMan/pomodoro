import { defineConfig } from 'oxfmt';

export default defineConfig({
  endOfLine: 'lf',
  ignorePatterns: ['CHANGELOG.md'],
  printWidth: 80,
  singleQuote: true,
  sortPackageJson: true,
});
