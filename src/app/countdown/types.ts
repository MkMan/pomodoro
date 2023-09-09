export type CountdownProps = {
  onComplete?: () => void;
};

export type AppToWorkerMessageData =
  | {
      type: 'stop';
    }
  | { time: number; type: 'start' };

export type AppToWorkerMessage = {
  data: AppToWorkerMessageData;
};

export type WorkerToAppMessageData = {
  newTime: number;
  type: 'newTime';
};

export type WorkerToAppMessage = { data: WorkerToAppMessageData };
