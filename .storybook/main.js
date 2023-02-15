const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
  stories: ['../src/**/*.stories.@(|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config) {
    config.plugins.push(tsconfigPaths.default());
    return config;
  },
};
