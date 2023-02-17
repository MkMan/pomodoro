import { Button } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';

import { buttonsContainerStyles, CountText } from './styled';
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
      <CountText
        align="center"
        data-testid="remainingTime"
        pb={48}
        weight="500"
      >
        {formattedMinutes}:{formattedSeconds}
      </CountText>
      <div className={buttonsContainerStyles}>
        {shouldShowStartButton && (
          <Button
            color="green"
            disabled={time === 0}
            onClick={startCount}
            size="xl"
          >
            Start
          </Button>
        )}
        {shouldShowPauseButton && (
          <Button color="yellow" onClick={stopCount} size="xl">
            Pause
          </Button>
        )}
        <Button
          color="red"
          disabled={counterState === 'running'}
          onClick={reset}
          size="xl"
        >
          Reset
        </Button>
      </div>
    </>
  );
};
