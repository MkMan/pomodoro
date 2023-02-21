export type CurrentCounter = 'pomodoro' | 'shortBreak' | 'longBreak';

export type CounterSelectorProps = {
  className?: string;
  currentCounterIndex: number;
  isDisabled?: boolean;
  setCurrentCounterIndex: (currentCounterIndex: number) => void;
};

export type DisplayAttributes = { text: string; color: string };
