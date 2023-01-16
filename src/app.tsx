import { MantineProvider, Title } from '@mantine/core';
import { useState } from 'react';

import {
  Countdown,
  CounterSelector,
  CurrentCounter,
  Settings,
} from '$app-components';
import { useAppSettings } from '$app-utils';

export const App: React.FC = () => {
  const [currentCounter, setCurrentCounter] =
    useState<CurrentCounter>('pomodoro');
  const { pomodoro, shortBreak, longBreak } = useAppSettings(
    ({ durations }) => durations
  );
  const [isRunning, setIsRunning] = useState(false);

  const counterTypeDurationMap: Record<CurrentCounter, number> = {
    longBreak,
    pomodoro,
    shortBreak,
  };

  return (
    <MantineProvider>
      <Title>Pomodoro</Title>
      <CounterSelector
        currentCounter={currentCounter}
        isDisabled={isRunning}
        setCurrentCounter={setCurrentCounter}
      />
      <Countdown
        onComplete={() => {
          console.log('LOG DONE');
        }}
        onStart={() => setIsRunning(true)}
        onStop={() => setIsRunning(false)}
        seconds={counterTypeDurationMap[currentCounter] * 60}
      />
      <Settings />
    </MantineProvider>
  );
};
