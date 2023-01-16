export type AppSettings = {
  durations: {
    pomodoro: number;
    longBreak: number;
    shortBreak: number;
  };
};

export type AppSettingsSetters = {
  setPomodoroDuration: (duration: number) => void;
  setLongBreakDuration: (duration: number) => void;
  setShortBreakDuration: (duration: number) => void;
};

export type AppSettingsStore = AppSettings & AppSettingsSetters;
