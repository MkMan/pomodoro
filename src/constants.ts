import { MantineThemeColorsOverride } from '@mantine/core';

import { CurrentCounter } from '$app-components';

export const mantineTheme: MantineThemeColorsOverride = {
  components: {
    Container: {
      defaultProps: {
        sizes: {
          md: 600,
        },
      },
    },
  },
};

export const counterOrder: CurrentCounter[] = [
  'pomodoro',
  'shortBreak',
  'pomodoro',
  'shortBreak',
  'pomodoro',
  'shortBreak',
  'pomodoro',
  'longBreak',
];
