import type { AppStore } from './types';

const localStorageKey = 'app-settings';

const initialAppStoreValues: AppStore = {
  alerts: {
    shouldSendNotification: false,
  },
  durations: {
    longBreak: 10,
    pomodoro: 25,
    shortBreak: 5,
  },
  theme: 'OS',
  todos: [],
};

export { initialAppStoreValues, localStorageKey };
