import { AppStore } from './types';

const localStorageKey = 'app-settings';

const initialAppStoreValues: AppStore = {
  durations: {
    longBreak: 10,
    pomodoro: 25,
    shortBreak: 5,
  },
  theme: 'OS',
  alerts: {
    shouldSendNotification: false,
  },
};

export { initialAppStoreValues, localStorageKey };
