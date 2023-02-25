import { Component, createEffect, createMemo, createSignal } from 'solid-js';

import { getCurrentCounter, settingsStore } from '$app-state';

import * as styles from './styles';
import { CountdownProps, CounterState, WorkerToAppMessage } from './types';
import { getFormattedTime, getWorkerHelpers } from './utils';

const worker = new Worker(new URL('./worker.ts', import.meta.url));
const { startWorkerCounter, stopWorkerCounter } = getWorkerHelpers(worker);

export const Countdown: Component<CountdownProps> = (props) => {
  const getInitialDuration = () =>
    settingsStore.durations[getCurrentCounter()] * 60;
  const [time, setTime] = createSignal(getInitialDuration());
  const [counterState, setCounterState] = createSignal<CounterState>('stopped'); // TODO: merge with one in app state and make global

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
    props.onStart?.();
  };
  const stopCount = () => {
    stopWorkerCounter();
    setCounterState('stopped');
    props.onStop?.();
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
      <div class={styles.remainingTime} data-testid="remainingTime">
        {getFormattedTime(time())}
      </div>
      <div class={styles.buttonsContainer}>
        {shouldShowStartButton() && (
          <button
            class={styles.startButton}
            disabled={time() === 0}
            onClick={startCount}
          >
            Start
          </button>
        )}
        {shouldShowPauseButton() && (
          <button class={styles.pauseButton} onClick={stopCount}>
            Pause
          </button>
        )}
        <button
          class={styles.stopButton}
          disabled={counterState() === 'running'}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};
