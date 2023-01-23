export type Props = {
  seconds: number;
  onComplete?: () => void;
  onStart?: () => void;
  onStop?: () => void;
};

export type CounterState = 'running' | 'stopped';

export type AppToWorkerMessageData =
  | { type: 'start'; time: number }
  | {
      type: 'stop';
    };

export type AppToWorkerMessage = {
  data: AppToWorkerMessageData;
};

export type WorkerToAppMessageData = {
  type: 'newTime';
  newTime: number;
};

export type WorkerToAppMessage = { data: WorkerToAppMessageData };
