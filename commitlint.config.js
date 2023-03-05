/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

const absoluteSrcPath = path.resolve(__dirname, './src/app');

// main App components
const allowedAppScopes = fs
  .readdirSync(absoluteSrcPath, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => name);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('[skip ci]')],
  rules: {
    'scope-enum': [2, 'always', ['app', ...allowedAppScopes]],
  },
};
