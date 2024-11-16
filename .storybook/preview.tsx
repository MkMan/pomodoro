import type { Decorator, Preview } from 'storybook-solidjs';

import '../src/css/dimensions.css';
import '../src/css/fonts.css';
import '../src/css/reset.css';

import {
  lightThemeClassName,
  darkThemeClassName,
} from '../src/theme/index.css';
import { createEffect } from 'solid-js';
import { Dynamic } from 'solid-js/web';

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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withTheme, withPadding],
};

export default preview;

export { globalTypes };
