import { Component, createSignal } from 'solid-js';

import { settingsStore } from '$app-state';

import * as styles from './styles';
import { onNotificationCheckboxChange } from './util';

export const Alerts: Component = () => {
  let notificationsCheckbox: HTMLInputElement | undefined;
  const [isNotificationsCheckboxDisabled, setIsNotificationsCheckboxDisabled] =
    createSignal(Notification.permission === 'denied');

  const onNotificationRequestDeclined = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- will be defined when onChange is called
    notificationsCheckbox!.checked = false;
    setIsNotificationsCheckboxDisabled(true);
  };

  return (
    <label class={styles.label}>
      <input
        type="checkbox"
        ref={notificationsCheckbox}
        onChange={(event) =>
          onNotificationCheckboxChange(event, onNotificationRequestDeclined)
        }
        checked={settingsStore.alerts.shouldSendNotification}
        disabled={isNotificationsCheckboxDisabled()}
      />
      System notifications
    </label>
  );
};
