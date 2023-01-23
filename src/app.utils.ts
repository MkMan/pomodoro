import { useEffect } from 'react';

import alarm1Url from './sounds/alarm-1.mp3';

export const useRequestNotificationPermission = () => {
  useEffect(() => {
    Notification.requestPermission();
  }, []);
};

export const playNotificationSound = () => {
  const audio = new Audio(alarm1Url);
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.remove();
  }, 5000);
};
