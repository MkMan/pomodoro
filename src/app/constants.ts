import type { CurrentCounter } from '../types';

const currentCounterMessageMap: Record<CurrentCounter, string> = {
  longBreak: 'Time for a long break 🌴',
  pomodoro: 'Break is up, back to it 💪',
  shortBreak: 'Time for a short break 😌',
};

export { currentCounterMessageMap };
