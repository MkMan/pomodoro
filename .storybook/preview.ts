import { Decorator, Preview } from 'storybook-solidjs';

import '../src/css/dimensions.css';
import '../src/css/fonts.css';
import '../src/css/reset.css';

import {
  lightThemeClassName,
  darkThemeClassName,
} from '../src/theme/index.css';
import { createEffect } from 'solid-js';

const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;

  createEffect(() => {
    globalThis.document.body.setAttribute(
      'class',
      theme === 'dark' ? darkThemeClassName : lightThemeClassName,
    );
  });

  return StoryFn();
};

const globalTypes = {
  theme: {
    name: 'theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;

export { globalTypes };
