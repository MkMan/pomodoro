import { useCallback, useEffect, useState } from 'react';

import * as styles from './styles';
import { CounterState, Props, WorkerToAppMessage } from './types';
import { getFormattedTime, getWorkerHelpers } from './utils';

const worker = new Worker(new URL('./worker.ts', import.meta.url));
const { startWorkerCounter, stopWorkerCounter } = getWorkerHelpers(worker);

export const Countdown: React.FC<Props> = ({
  seconds,
  onComplete,
  onStop,
  onStart,
}) => {
  const [time, setTime] = useState(seconds);
  const [counterState, setCounterState] = useState<CounterState>('stopped');

  // utility flags
  const isPaused = counterState === 'stopped' && time > 0;
  const shouldShowStartButton = counterState === 'stopped';
  const shouldShowPauseButton = counterState === 'running' && time > 0;

  // utility functions
  const startCount = () => {
    startWorkerCounter(isPaused ? time : seconds);
    setCounterState('running');
    onStart?.();
  };
  const stopCount = useCallback(() => {
    stopWorkerCounter();
    setCounterState('stopped');
    onStop?.();
  }, [onStop]);
  const reset = useCallback(() => {
    setTime(seconds);
    stopCount();
  }, [seconds, stopCount]);
  const syncTimeWithWorker = useCallback(() => {
    worker.onmessage = ({ data }: WorkerToAppMessage) => {
      setTime(data.newTime);

      if (data.newTime === 0) {
        stopCount();
        onComplete?.();
      }
    };
  }, [onComplete, setTime, stopCount]);
  const updateTimeStateOnPropChange = useCallback(() => {
    setTime(seconds);
  }, [seconds]);

  useEffect(syncTimeWithWorker, [syncTimeWithWorker]);
  useEffect(updateTimeStateOnPropChange, [updateTimeStateOnPropChange]);

  const [formattedMinutes, formattedSeconds] = getFormattedTime(time);

  return (
    <>
      <div className={styles.remainingTime} data-testid="remainingTime">
        {formattedMinutes}:{formattedSeconds}
      </div>
      <div className={styles.buttonsContainer}>
        {shouldShowStartButton && (
          <button
            className={styles.startButton}
            disabled={time === 0}
            onClick={startCount}
          >
            Start
          </button>
        )}
        {shouldShowPauseButton && (
          <button className={styles.pauseButton} onClick={stopCount}>
            Pause
          </button>
        )}
        <button
          className={styles.stopButton}
          disabled={counterState === 'running'}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};
