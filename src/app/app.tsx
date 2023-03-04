import { Component, createSignal } from 'solid-js';

import { Container, Drawer, Heading } from '$app-components';
import { increment } from '$app-state';

import { initialiseSettingsStore } from '../state/settings/settings';
import { Countdown } from './countdown/countdown';
import { CounterSelector } from './counter-selector/counter-selector';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ReloadPrompt } from './reload-prompt/reload-prompt';
import { Settings } from './settings/settings';
import * as styles from './styles';
import { getAlertHandle, syncTheme } from './utils';

export const App: Component = () => {
  initialiseSettingsStore();
  syncTheme();

  const audioRef = getAlertHandle();

  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = createSignal(false);

  return (
    <div class={styles.wrapper}>
      <ReloadPrompt />
      <Header onSettingsClick={() => setIsSettingsDrawerOpen(true)} />
      <main class={styles.main}>
        <Container maxWidth={600} pt={16}>
          <CounterSelector pb={32} pt={32} />
          <Countdown
            onComplete={() => {
              audioRef.play().catch(console.error);
              increment();
            }}
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
        <Settings dataTestId="appSettings" />
      </Drawer>
      <Footer />
    </div>
  );
};
