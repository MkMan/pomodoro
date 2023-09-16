import { Preview } from 'storybook-solidjs';

import '../src/css/dimensions.css';
import '../src/css/fonts.css';
import '../src/css/reset.css';

import { lightThemeClassName } from '../src/theme/index.css';

globalThis.document.body.classList.add(lightThemeClassName);

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
};

export default preview;
