import { CurrentCounter } from '../types';

const currentCounterMessageMap: Record<CurrentCounter, string> = {
  pomodoro: 'Break is up, back to it 💪',
  shortBreak: 'Time for a short break 😌',
  longBreak: 'Time for a long break 🌴',
};

export { currentCounterMessageMap };
