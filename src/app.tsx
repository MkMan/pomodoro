import { useRef, useState } from 'react';

import {
  Container,
  Countdown,
  CounterSelector,
  CurrentCounter,
  Drawer,
  Header,
  Heading,
  Settings,
} from '$app-components';
import { useAppSettings } from '$app-utils';

import { useCurrentCounterState } from './app.utils';
import { audioUrlsMap } from './assets/sounds';

export const App: React.FC = () => {
  const {
    currentCounter,
    currentCounterIndex,
    setCurrentCounterIndex,
    increment,
  } = useCurrentCounterState();
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
    <div>
      <audio ref={audioRef} src={audioUrlsMap.alarm1} />
      <Header onSettingsClick={() => setIsSettingsDrawerOpen(true)} />
      <main>
        <Container maxWidth={600} pt={16}>
          <CounterSelector
            currentCounterIndex={currentCounterIndex}
            isDisabled={isRunning}
            pb={32}
            pt={32}
            setCurrentCounterIndex={setCurrentCounterIndex}
          />
          <Countdown
            onComplete={() => {
              audioRef.current?.play();
              increment();
            }}
            onStart={() => setIsRunning(true)}
            onStop={() => setIsRunning(false)}
            seconds={counterTypeDurationMap[currentCounter] * 60}
          />
        </Container>
      </main>
      <Drawer
        closeIconLabel="close settings menu"
        heading={
          <Heading level={2} shouldAutoFocus>
            Settings
          </Heading>
        }
        isOpen={isSettingsDrawerOpen}
        onClose={() => setIsSettingsDrawerOpen(false)}
      >
        <Settings
          dataTestId="appSettings"
          isDurationEditingDisabled={isRunning}
        />
      </Drawer>
    </div>
  );
};
