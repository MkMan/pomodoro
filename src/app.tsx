import {
  AppShell,
  Container,
  Drawer,
  MantineProvider,
  Title,
} from '@mantine/core';
import { useState } from 'react';

import {
  Countdown,
  CounterSelector,
  CurrentCounter,
  Header,
  Settings,
} from '$app-components';
import { useAppSettings } from '$app-utils';

import { playNotificationSound, useCurrentCounterState } from './app.utils';
import { mantineTheme, notificationDataMap } from './constants';

export const App: React.FC = () => {
  const { currentCounter, setCurrentCounter, increment } =
    useCurrentCounterState();
  const counterDurations = useAppSettings(({ durations }) => durations);
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);

  const counterTypeDurationMap: Record<CurrentCounter, number> = {
    longBreak: counterDurations.longBreak,
    pomodoro: counterDurations.pomodoro,
    shortBreak: counterDurations.shortBreak,
  };

  return (
    <MantineProvider theme={mantineTheme}>
      <AppShell
        header={
          <Header onSettingsClick={() => setIsSettingsDrawerOpen(true)} />
        }
        padding={0}
      >
        <Container pt={16}>
          <CounterSelector
            currentCounter={currentCounter}
            isDisabled={isRunning}
            pb={32}
            pt={32}
            setCurrentCounter={setCurrentCounter}
          />
          <Countdown
            onComplete={() => {
              new Notification(notificationDataMap[currentCounter]);
              playNotificationSound();
              increment();
            }}
            onStart={() => setIsRunning(true)}
            onStop={() => setIsRunning(false)}
            seconds={counterTypeDurationMap[currentCounter] * 60}
          />
        </Container>
        <Drawer
          onClose={() => setIsSettingsDrawerOpen(false)}
          opened={isSettingsDrawerOpen}
          padding={24}
          title={
            <Title data-autofocus order={2}>
              Settings
            </Title>
          }
          withCloseButton
          withFocusReturn
        >
          <Settings isDurationEditingDisabled={isRunning} />
        </Drawer>
      </AppShell>
    </MantineProvider>
  );
};
