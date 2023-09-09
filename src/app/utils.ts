import { appStore } from '$app-state';
import { cx } from '$app-utils';
import { createEffect, createSignal } from 'solid-js';
import { CurrentCounter } from 'src/types';

import { audioUrlsMap } from '../assets/sounds';
import { currentCounterMessageMap } from './constants';

const getAlertHandle = (): HTMLAudioElement => {
  const alarm = new Audio(audioUrlsMap.alarm1);

  return alarm;
};

const sendNotification = (newCounter: CurrentCounter) => {
  new Notification(currentCounterMessageMap[newCounter], {
    requireInteraction: true,
  });
};

const syncTheme = () => {
  const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const lightThemeQuery = window.matchMedia('(prefers-color-scheme: light)');
  const isDarkTheme = darkThemeQuery.matches;
  const isLightTheme = lightThemeQuery.matches;

  const [osTheme, setOsTheme] = createSignal<'dark' | 'light' | undefined>(
    isDarkTheme ? 'dark' : isLightTheme ? 'light' : undefined,
  );

  darkThemeQuery.addEventListener('change', ({ matches }) => {
    if (matches) {
      setOsTheme('dark');
    }
  });
  lightThemeQuery.addEventListener('change', ({ matches }) => {
    if (matches) {
      setOsTheme('light');
    }
  });

  createEffect(() => {
    if (appStore.theme === 'OS') {
      document.body.setAttribute(
        'class',
        cx(osTheme() === 'dark' && 'isDarkTheme'),
      );
    }

    if (appStore.theme === 'light') {
      document.body.classList.remove('isDarkTheme');
    }

    if (appStore.theme === 'dark') {
      document.body.classList.add('isDarkTheme');
    }
  });
};

export { getAlertHandle, sendNotification, syncTheme };
