/* eslint-env node */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('[skip ci]')],
};
