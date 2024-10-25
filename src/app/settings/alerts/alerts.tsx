import { appStore } from '$app-state';
import { type Component, createSignal } from 'solid-js';

import * as styles from './styles.css';
import { onNotificationCheckboxChange } from './util';

export const Alerts: Component = () => {
  let notificationsCheckbox: HTMLInputElement | undefined;
  const [isNotificationsCheckboxDisabled, setIsNotificationsCheckboxDisabled] =
    createSignal(Notification.permission === 'denied');

  const onNotificationRequestDeclined = () => {
    // biome-ignore lint/style/noNonNullAssertion: will be defined when onChange is called
    notificationsCheckbox!.checked = false;
    setIsNotificationsCheckboxDisabled(true);
  };

  return (
    <label class={styles.label}>
      <input
        checked={appStore.alerts.shouldSendNotification}
        disabled={isNotificationsCheckboxDisabled()}
        onChange={(event) =>
          onNotificationCheckboxChange(event, onNotificationRequestDeclined)
        }
        ref={notificationsCheckbox}
        type="checkbox"
      />
      System notifications
    </label>
  );
};
