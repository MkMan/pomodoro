import { Button, Flex } from '@mantine/core';

import { useStateAndRef } from '$app-utils';

import { CountText } from './styled';
import { CounterState, Props } from './types';
import { getFormattedTime, useInterval } from './utils';

export const Countdown: React.FC<Props> = ({
  seconds,
  onComplete,
  onStop,
  onStart,
}) => {
  const [time, setTime, timeRef] = useStateAndRef(seconds);
  const [counterState, setCounterState, counterStateRef] =
    useStateAndRef<CounterState>('stopped');

  // utility functions
  const startCount = () => {
    setCounterState('running');
    onStart?.();
  };
  const stopCount = () => {
    setCounterState('stopped');
    onStop?.();
  };
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
      <CountText align="center" pb={48}>
        {formattedMinutes}:{formattedSeconds}
      </CountText>
      <Flex gap={20} justify="center">
        {shouldShowStartButton && (
          <Button
            color="green"
            disabled={time === 0}
            onClick={startCount}
            size="lg"
          >
            Start
          </Button>
        )}
        {shouldShowPauseButton && (
          <Button color="yellow" onClick={stopCount} size="lg">
            Pause
          </Button>
        )}
        <Button
          color="red"
          disabled={counterState === 'running'}
          onClick={reset}
          size="lg"
        >
          Reset
        </Button>
      </Flex>
    </>
  );
};
