import { Component, createEffect, createMemo, createSignal } from 'solid-js';

import { Button } from '$app-components';
import {
  appStore,
  counterState,
  getCurrentCounter,
  setCounterState,
} from '$app-state';

import { CounterSelector } from './counter-selector/counter-selector';
import * as styles from './styles';
import { CountdownProps, WorkerToAppMessage } from './types';
import { getFormattedTime, getWorkerHelpers } from './utils';

const worker = new Worker(new URL('./worker.ts', import.meta.url));
const { startWorkerCounter, stopWorkerCounter } = getWorkerHelpers(worker);

export const Countdown: Component<CountdownProps> = (props) => {
  const getInitialDuration = () => appStore.durations[getCurrentCounter()] * 60;
  const [time, setTime] = createSignal(getInitialDuration());

  // utility flags
  const isPaused = createMemo(() => counterState() === 'stopped' && time() > 0);
  const shouldShowStartButton = createMemo(() => counterState() === 'stopped');
  const shouldShowPauseButton = createMemo(
    () => counterState() === 'running' && time() > 0
  );

  // utility functions
  const startCount = () => {
    startWorkerCounter(isPaused() ? time() : getInitialDuration());
    setCounterState('running');
  };
  const stopCount = () => {
    stopWorkerCounter();
    setCounterState('stopped');
  };
  const reset = () => {
    setTime(getInitialDuration());
    stopCount();
  };
  const syncTimeWithWorker = () => {
    worker.onmessage = ({ data }: WorkerToAppMessage) => {
      setTime(data.newTime);

      if (data.newTime === 0) {
        stopCount();
        props.onComplete?.();
      }
    };
  };
  const updateTimeStateOnPropChange = () => {
    setTime(getInitialDuration());
  };

  createEffect(syncTimeWithWorker);
  createEffect(updateTimeStateOnPropChange);

  return (
    <>
      <CounterSelector />
      <div class={styles.remainingTime} data-testid="remainingTime">
        {getFormattedTime(time())}
      </div>
      <div class={styles.buttonsContainer}>
        {shouldShowStartButton() && (
          <Button
            variant="primary"
            disabled={time() === 0}
            onClick={startCount}
          >
            Start
          </Button>
        )}
        {shouldShowPauseButton() && (
          <Button variant="secondary" onClick={stopCount}>
            Pause
          </Button>
        )}
        <Button
          variant="danger"
          disabled={counterState() === 'running'}
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </>
  );
};
