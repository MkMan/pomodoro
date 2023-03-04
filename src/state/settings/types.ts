export type AppTheme = 'light' | 'dark' | 'OS';

export type AppSettings = {
  durations: {
    pomodoro: number;
    longBreak: number;
    shortBreak: number;
  };
  theme: AppTheme;
};
