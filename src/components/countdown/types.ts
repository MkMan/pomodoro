export type Props = {
  seconds: number;
  onComplete?: () => void;
  onStart?: () => void;
  onStop?: () => void;
};

export type CounterState = 'running' | 'stopped';
