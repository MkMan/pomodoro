import { BoxProps, MantineColor } from '@mantine/core';

export type CurrentCounter = 'pomodoro' | 'shortBreak' | 'longBreak';

export type Props = {
  currentCounterIndex: number;
  isDisabled?: boolean;
  isInEditMode?: boolean;
  setCurrentCounterIndex: (currentCounterIndex: number) => void;
} & BoxProps;

export type DisplayAttributes = { text: string; color: MantineColor };
