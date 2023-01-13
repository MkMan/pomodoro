export type Props = {
  seconds: number;
  onComplete?: () => void;
};

export type CounterState = 'running' | 'stopped';
