import { AppToWorkerMessageData } from './types';

const formatTimeUnit = (timeUnit: number): string =>
  timeUnit.toString().padStart(2, '0');

export const getFormattedTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;

  return `${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;
};

export const getWorkerHelpers = (worker: Worker) => ({
  stopWorkerCounter() {
    const workerMessage: AppToWorkerMessageData = {
      type: 'stop',
    };
    worker.postMessage(workerMessage);
  },
  startWorkerCounter(time: number) {
    const workerMessage: AppToWorkerMessageData = {
      type: 'start',
      time,
    };
    worker.postMessage(workerMessage);
  },
});
