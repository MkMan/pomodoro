import type { AppToWorkerMessage, WorkerToAppMessageData } from './types';

let currentTime: number;
let intervalNumber: number;

const onEverySecond = () => {
  const message: WorkerToAppMessageData = {
    newTime: --currentTime,
    type: 'newTime',
  };
  self.postMessage(message);
};

self.addEventListener('message', ({ data }: AppToWorkerMessage) => {
  if (data.type === 'start') {
    const { time } = data;

    currentTime = time;
    intervalNumber = self.setInterval(onEverySecond, 1000);
  }

  if (data.type === 'stop') {
    self.clearInterval(intervalNumber);
  }
});
