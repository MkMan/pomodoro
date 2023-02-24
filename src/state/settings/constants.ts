import { AppSettings } from './types';

const localStorageKey = 'app-settings';

const defaultSettings: AppSettings = {
  durations: {
    longBreak: 10,
    pomodoro: 25,
    shortBreak: 5,
  },
};

export { defaultSettings, localStorageKey };
