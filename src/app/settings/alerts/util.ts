import { setAppStore } from '$app-state';
import { JSX } from 'solid-js';

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

  if (Notification.permission === 'granted' || !checked) {
    // to allow user to uncheck even if permission isn't granted
    setAppStore('alerts', 'shouldSendNotification', checked);
    return;
  }

  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        setAppStore('alerts', 'shouldSendNotification', true);
      } else {
        onNotificationRequestDeclined();
      }
    })
    .catch((error) => {
      console.error('Failed to request notification permission', error);
      onNotificationRequestDeclined();
    });
};

export { onNotificationCheckboxChange };
