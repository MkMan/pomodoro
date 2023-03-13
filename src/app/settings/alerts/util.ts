import { JSX } from 'solid-js';

import { setSettingsStore } from '$app-state';

type InputChangeEvent = Parameters<
  JSX.EventHandler<HTMLInputElement, Event>
>[0];

const onNotificationCheckboxChange = (
  event: InputChangeEvent,
  onNotificationRequestDeclined: () => void
) => {
  if (Notification.permission === 'denied') {
    // shouldn't happen because the checkbox will be disabled but adding for clarity
    return;
  }

  const { checked } = event.currentTarget;

  if (Notification.permission === 'granted' || checked === false) {
    // to allow user to uncheck even if permission isn't granted
    setSettingsStore('alerts', 'shouldSendNotification', checked);
    return;
  }

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      setSettingsStore('alerts', 'shouldSendNotification', true);
    } else {
      onNotificationRequestDeclined();
    }
  });
};

export { onNotificationCheckboxChange };
