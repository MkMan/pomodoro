import { BoxProps, MantineColor } from '@mantine/core';

export type CurrentCounter = 'pomodoro' | 'shortBreak' | 'longBreak';

export type Props = {
  currentCounterIndex: number;
  setCurrentCounterIndex: (currentCounterIndex: number) => void;
  isDisabled?: boolean;
} & BoxProps;

export type DisplayAttributes = { text: string; color: MantineColor };
