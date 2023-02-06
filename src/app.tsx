import {
  AppShell,
  Container,
  Drawer,
  MantineProvider,
  Title,
} from '@mantine/core';
import { useRef, useState } from 'react';

import {
  Countdown,
  CounterSelector,
  CurrentCounter,
  Header,
  Settings,
} from '$app-components';
import { useAppSettings } from '$app-utils';

import { playAlarm, useCurrentCounterState } from './app.utils';
import { audioUrlsMap } from './assets/sounds';
import { mantineTheme, notificationDataMap } from './constants';

export const App: React.FC = () => {
  const { currentCounter, setCurrentCounter, increment } =
    useCurrentCounterState();
  const counterDurations = useAppSettings(({ durations }) => durations);
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const counterTypeDurationMap: Record<CurrentCounter, number> = {
    longBreak: counterDurations.longBreak,
    pomodoro: counterDurations.pomodoro,
    shortBreak: counterDurations.shortBreak,
  };

  return (
    <MantineProvider theme={mantineTheme}>
      <audio ref={audioRef} src={audioUrlsMap.alarm1} />
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
              playAlarm(audioRef);
              increment();
            }}
            onStart={() => setIsRunning(true)}
            onStop={() => setIsRunning(false)}
            seconds={counterTypeDurationMap[currentCounter] * 60}
          />
        </Container>
        <Drawer
          closeButtonLabel="close settings menu"
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
          <Settings
            dataTestId="appSettings"
            isDurationEditingDisabled={isRunning}
          />
        </Drawer>
      </AppShell>
    </MantineProvider>
  );
};
