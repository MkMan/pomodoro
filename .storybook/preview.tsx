// @ts-expect-error
import type { Decorator, Preview } from 'storybook-solidjs';

import '../src/css/dimensions.css';
import '../src/css/fonts.css';
import '../src/css/reset.css';

import { createEffect } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import {
  darkThemeClassName,
  lightThemeClassName,
} from '../src/theme/index.css';

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

// @ts-expect-error -- TS being funny
const withPadding: Decorator = (StoryFn) => {
  return (
    // @ts-expect-error -- TS being funny
    <Dynamic component="div" style={{ padding: '16px' }}>
      {StoryFn()}
    </Dynamic>
  );
};

const globalTypes = {
  theme: {
    defaultValue: 'light',
    description: 'Global theme for components',
    name: 'theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { icon: 'circlehollow', title: 'light', value: 'light' },
        { icon: 'circle', title: 'dark', value: 'dark' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: [withTheme, withPadding],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export { globalTypes };
