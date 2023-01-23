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

import {
  playNotificationSound,
  useRequestNotificationPermission,
} from './app.utils';

const notificationDataMap: Record<CurrentCounter, string> = {
  pomodoro: `You've earned a break 😌`,
  shortBreak: 'Break is over, back to it 🔨!',
  longBreak: 'Break is over, back to it 🔨!',
};

export const App: React.FC = () => {
  // TODO: clean up and move to settings
  useRequestNotificationPermission();
  const [currentCounter, setCurrentCounter] =
    useState<CurrentCounter>('pomodoro');
  const { pomodoro, shortBreak, longBreak } = useAppSettings(
    ({ durations }) => durations
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);

  const counterTypeDurationMap: Record<CurrentCounter, number> = {
    longBreak,
    pomodoro,
    shortBreak,
  };

  return (
    <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                md: 600,
              },
            },
          },
        },
      }}
    >
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
