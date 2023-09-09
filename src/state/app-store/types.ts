type AppTheme = 'OS' | 'dark' | 'light';

type Todo = {
  description: string;
  id: string;
  status: 'completed' | 'not-started';
};

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

export type { AppStore, AppTheme, Todo };
