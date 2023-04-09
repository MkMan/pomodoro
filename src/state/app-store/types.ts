type AppTheme = 'light' | 'dark' | 'OS';

type AppStore = {
  durations: {
    pomodoro: number;
    longBreak: number;
    shortBreak: number;
  };
  theme: AppTheme;
  alerts: {
    shouldSendNotification: boolean;
  };
};

export type { AppStore, AppTheme };
