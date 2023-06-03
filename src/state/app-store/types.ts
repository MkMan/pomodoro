type AppTheme = 'light' | 'dark' | 'OS';

type Todo = {
  description: string;
  id: string;
  status: 'completed' | 'not-started';
};

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
  todos: Todo[];
};

export type { AppStore, AppTheme, Todo };
