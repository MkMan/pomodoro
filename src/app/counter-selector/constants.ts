import { CurrentCounter } from '../../types';
import { DisplayAttributes } from './types';

export const currentCounterDisplayMap: Record<
  CurrentCounter,
  DisplayAttributes
> = {
  pomodoro: { text: 'Pomodoro', color: 'hsl(209, 75%, 38%)' },
  shortBreak: { text: 'Short break', color: 'hsl(131, 51%, 29%)' },
  longBreak: { text: 'Long break', color: 'hsl(288, 54%, 40%)' },
};
