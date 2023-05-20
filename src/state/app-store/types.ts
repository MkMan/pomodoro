type AppTheme = 'light' | 'dark' | 'OS';

type TodoFrequency = 'daily' | 'once';

type Todo = {
  description: string;
  status: 'completed' | 'not-started';
  frequency: TodoFrequency;
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

export type { AppStore, AppTheme, Todo, TodoFrequency };