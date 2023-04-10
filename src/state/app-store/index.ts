import { createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import { initialAppStoreValues, localStorageKey } from './constants';
import { AppStore } from './types';

const getInitialAppStoreValue = (): AppStore => {
  const storeInLocalStorage = globalThis.localStorage.getItem(localStorageKey);

  if (!storeInLocalStorage) return initialAppStoreValues;

  let appStore: AppStore;

  try {
    appStore = JSON.parse(storeInLocalStorage);

    // fill in new fields with default values
    appStore = {
      ...initialAppStoreValues,
      ...appStore,
      alerts: { ...initialAppStoreValues.alerts, ...appStore.alerts },
      durations: { ...initialAppStoreValues.durations, ...appStore.durations },
    };
  } catch (error) {
    console.error(error);
    appStore = initialAppStoreValues;
  }

  return appStore;
};

const [appStore, setAppStore] = createStore(getInitialAppStoreValue());

const initialiseAppStore = () => {
  createEffect(() => {
    globalThis.localStorage.setItem(localStorageKey, JSON.stringify(appStore));
  });
};

export { appStore, initialiseAppStore, setAppStore };
