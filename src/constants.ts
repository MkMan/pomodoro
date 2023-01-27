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

export const notificationDataMap: Record<CurrentCounter, string> = {
  pomodoro: `You've earned a break 😌`,
  shortBreak: 'Break is over, back to it 🔨!',
  longBreak: 'Break is over, back to it 🔨!',
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
