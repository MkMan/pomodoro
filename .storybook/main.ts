import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  docs: {},
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};
export default config;
