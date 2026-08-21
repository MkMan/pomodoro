export type AppToWorkerMessage = {
  data: AppToWorkerMessageData;
};

export type AppToWorkerMessageData =
  | { time: number; type: 'start' }
  | {
      type: 'stop';
    };

export type CountdownProps = {
  class?: string;
  onComplete?: () => void;
};

export type WorkerToAppMessage = { data: WorkerToAppMessageData };

export type WorkerToAppMessageData = {
  newTime: number;
  type: 'newTime';
};
