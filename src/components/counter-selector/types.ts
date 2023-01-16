export type CurrentCounter = 'pomodoro' | 'shortBreak' | 'longBreak';

export type Props = {
  currentCounter: CurrentCounter;
  setCurrentCounter: (CurrentCounter: CurrentCounter) => void;
  isDisabled?: boolean;
};
