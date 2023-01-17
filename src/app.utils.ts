import { useEffect } from 'react';

export const useRequestNotificationPermission = () => {
  useEffect(() => {
    Notification.requestPermission();
  }, []);
};
