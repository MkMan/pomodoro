import type { Component } from 'solid-js';

import { Button } from '$app-components';
import { Show } from 'solid-js';
import { useRegisterSW } from 'virtual:pwa-register/solid';

import * as styles from './styles.css';

export const ReloadPrompt: Component = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
    onRegistered(registration) {
      console.log(`SW Registered: ${registration?.toString() ?? ''}`);
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  return (
    <div class={styles.container}>
      <Show when={needRefresh()}>
        <div class={styles.toast}>
          <div class={styles.toastMessage}>App ready to work offline</div>
          <div class={styles.buttonsWrapper}>
            <Button
              onClick={() => {
                updateServiceWorker(true).catch((error) => {
                  console.error('Error updating service worker', error);
                });
              }}
              size="small"
              variant="primary"
            >
              Reload
            </Button>
            <Button onClick={() => close()} size="small" variant="danger">
              Close
            </Button>
          </div>
        </div>
      </Show>
    </div>
  );
};
