export type CountdownProps = {
  onComplete?: () => void;
};

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
