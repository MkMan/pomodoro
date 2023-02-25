import { Component, createSignal } from 'solid-js';

import {
  Container,
  Countdown,
  CounterSelector,
  Drawer,
  Header,
  Heading,
  Settings,
} from '$app-components';
import { increment } from '$app-state';

import { audioUrlsMap } from './assets/sounds';
import { initialiseSettingsStore } from './state/settings/settings';

export const App: Component = () => {
  initialiseSettingsStore();
  const [isRunning, setIsRunning] = createSignal(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = createSignal(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let audioRef: HTMLAudioElement;

  return (
    <div>
      <audio ref={(ref) => (audioRef = ref)} src={audioUrlsMap.alarm1} />
      <Header onSettingsClick={() => setIsSettingsDrawerOpen(true)} />
      <main>
        <Container maxWidth={600} pt={16}>
          <CounterSelector isDisabled={isRunning()} pb={32} pt={32} />
          <Countdown
            onComplete={() => {
              audioRef.play();
              increment();
            }}
            onStart={() => setIsRunning(true)}
            onStop={() => setIsRunning(false)}
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
        isOpen={isSettingsDrawerOpen()}
        onClose={() => setIsSettingsDrawerOpen(false)}
      >
        <Settings
          dataTestId="appSettings"
          isDurationEditingDisabled={isRunning()}
        />
      </Drawer>
    </div>
  );
};
