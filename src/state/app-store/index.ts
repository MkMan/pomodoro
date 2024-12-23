import { createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

import type { AppStore } from './types';

import { initialAppStoreValues, localStorageKey } from './constants';

const getInitialAppStoreValue = (): AppStore => {
  const storeInLocalStorage = globalThis.localStorage.getItem(localStorageKey);

  if (!storeInLocalStorage) return initialAppStoreValues;

  let appStore: AppStore;

  try {
    appStore = JSON.parse(storeInLocalStorage) as AppStore;

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
export type { AppStore, Todo } from './types';
