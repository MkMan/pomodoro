import { Preview } from 'storybook-solidjs';

import '../src/css/colors.css';
import '../src/css/dimensions.css';
import '../src/css/fonts.css';
import '../src/css/reset.css';

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
