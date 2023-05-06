import { Component, createMemo, createSignal } from 'solid-js';

import { Container, Drawer, Heading } from '$app-components';
import {
  appStore,
  getCurrentCounter,
  incrementCounter,
  initialiseAppStore,
} from '$app-state';

import { Countdown } from './countdown/countdown';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ReloadPrompt } from './reload-prompt/reload-prompt';
import { Settings } from './settings/settings';
import * as styles from './styles';
import { Todos } from './todos';
import { getAlertHandle, sendNotification, syncTheme } from './utils';

export const App: Component = () => {
  initialiseAppStore();
  syncTheme();

  const audioRef = getAlertHandle();

  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = createSignal(false);

  const shouldSendNotification = createMemo(
    () =>
      appStore.alerts.shouldSendNotification &&
      Notification.permission === 'granted'
  );

  const onCounterComplete = () => {
    audioRef.play().catch(console.error);
    incrementCounter();

    if (shouldSendNotification()) {
      sendNotification(getCurrentCounter());
    }
  };

  return (
    <div class={styles.wrapper}>
      <ReloadPrompt />
      <Header
        class={styles.header}
        onSettingsClick={() => setIsSettingsDrawerOpen(true)}
      />
      <main class={styles.main}>
        <Container class={styles.section} maxWidth={600}>
          <Countdown onComplete={onCounterComplete} />
        </Container>
        <Container class={styles.section} maxWidth={600}>
          <Todos />
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
