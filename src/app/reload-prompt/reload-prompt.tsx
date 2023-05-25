import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { useRegisterSW } from 'virtual:pwa-register/solid';

import { Button } from '$app-components';

import * as styles from './styles';

export const ReloadPrompt: Component = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      console.log(`SW Registered: ${registration?.toString() ?? ''}`);
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
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
              variant="primary"
              size="small"
              onClick={() => {
                updateServiceWorker(true).catch((error) => {
                  console.error('Error updating service worker', error);
                });
              }}
            >
              Reload
            </Button>
            <Button variant="danger" size="small" onClick={() => close()}>
              Close
            </Button>
          </div>
        </div>
      </Show>
    </div>
  );
};
