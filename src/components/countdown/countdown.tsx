import { Button } from '@mantine/core';

import { useStateAndRef } from '$app-utils';

import { CounterState, Props } from './types';
import { getFormattedTime, useInterval } from './utils';

export const Countdown: React.FC<Props> = ({ seconds, onComplete }) => {
  const [time, setTime, timeRef] = useStateAndRef(seconds);
  const [counterState, setCounterState, counterStateRef] =
    useStateAndRef<CounterState>('stopped');

  // utility functions
  const startCount = () => setCounterState('running');
  const stopCount = () => setCounterState('stopped');
  const reset = () => {
    setTime(seconds);
    stopCount();
  };

  // utility flags
  const shouldShowStartButton = counterState === 'stopped';
  const shouldShowPauseButton = counterState === 'running' && time > 0;

  const onEverySecond = () => {
    if (counterStateRef.current === 'stopped') {
      return;
    }

    if (timeRef.current > 0) {
      setTime((time) => time - 1);
      return;
    }

    onComplete?.();
    stopCount();
  };

  useInterval(onEverySecond, 1000);

  const [formattedMinutes, formattedSeconds] = getFormattedTime(time);

  return (
    <>
      <span>
        {formattedMinutes}:{formattedSeconds}
      </span>
      <div>
        {shouldShowStartButton && (
          <Button disabled={time === 0} onClick={startCount}>
            Start
          </Button>
        )}
        {shouldShowPauseButton && <Button onClick={stopCount}>Pause</Button>}
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};
