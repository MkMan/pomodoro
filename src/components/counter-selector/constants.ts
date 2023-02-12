import { CurrentCounter, DisplayAttributes } from './types';

export const currentCounterDisplayMap: Record<
  CurrentCounter,
  DisplayAttributes
> = {
  pomodoro: { text: 'Pomodoro', color: 'blue' },
  shortBreak: { text: 'Short break', color: 'green' },
  longBreak: { text: 'Long break', color: 'green' },
};
