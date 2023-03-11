import { createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import { defaultSettings, localStorageKey } from './constants';
import { AppSettings } from './types';

const getInitialStoreValue = (): AppSettings => {
  const storeInLocalStorage = globalThis.localStorage.getItem(localStorageKey);

  if (!storeInLocalStorage) return defaultSettings;

  let settings: AppSettings;

  try {
    settings = JSON.parse(storeInLocalStorage);

    // fill in new fields with default values
    settings = {
      ...defaultSettings,
      ...settings,
      durations: { ...defaultSettings.durations, ...settings.durations },
    };
  } catch (error) {
    console.error(error);
    settings = defaultSettings;
  }

  return settings;
};

const [settingsStore, setSettingsStore] = createStore(getInitialStoreValue());

const initialiseSettingsStore = () => {
  createEffect(() => {
    globalThis.localStorage.setItem(
      localStorageKey,
      JSON.stringify(settingsStore)
    );
  });
};

export { initialiseSettingsStore, setSettingsStore, settingsStore };
