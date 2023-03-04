import { cx } from '@emotion/css';
import { createEffect, createSignal } from 'solid-js';

import { settingsStore } from '$app-state';

import { audioUrlsMap } from '../assets/sounds';

const getAlertHandle = (): HTMLAudioElement => {
  const alarm = new Audio(audioUrlsMap.alarm1);

  return alarm;
};

const syncTheme = () => {
  const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const lightThemeQuery = window.matchMedia('(prefers-color-scheme: light)');
  const isDarkTheme = darkThemeQuery.matches;
  const isLightTheme = lightThemeQuery.matches;

  const [osTheme, setOsTheme] = createSignal<'light' | 'dark' | undefined>(
    isDarkTheme ? 'dark' : isLightTheme ? 'light' : undefined
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
    if (settingsStore.theme === 'OS') {
      document.body.setAttribute(
        'class',
        cx(osTheme() === 'dark' && 'isDarkTheme')
      );
    }

    if (settingsStore.theme === 'light') {
      document.body.classList.remove('isDarkTheme');
    }

    if (settingsStore.theme === 'dark') {
      document.body.classList.add('isDarkTheme');
    }
  });
};

export { getAlertHandle, syncTheme };
