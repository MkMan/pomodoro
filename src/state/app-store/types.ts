type AppStore = {
  alerts: {
    shouldSendNotification: boolean;
  };
  durations: {
    longBreak: number;
    pomodoro: number;
    shortBreak: number;
  };
  theme: AppTheme;
  todos: Todo[];
};

type AppTheme = 'dark' | 'light' | 'OS';

type Todo = {
  description: string;
  id: string;
  status: 'completed' | 'not-started';
};

export type { AppStore, AppTheme, Todo };
