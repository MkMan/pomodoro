import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { useRegisterSW } from 'virtual:pwa-register/solid';

import * as styles from './styles';

export const ReloadPrompt: Component = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      console.log(`SW Registered: ${registration}`);
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
          <div class={styles.toastMessage}>
            <span>App ready to work offline</span>
          </div>
          <Show when={needRefresh()}>
            <button
              class={styles.toastButton}
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </button>
          </Show>
          <button class={styles.toastButton} onClick={() => close()}>
            Close
          </button>
        </div>
      </Show>
    </div>
  );
};
