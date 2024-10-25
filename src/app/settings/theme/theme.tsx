import type { AppTheme } from 'src/state/app-store/types';

import { appStore, setAppStore } from '$app-state';
import { type Component, For } from 'solid-js';

import * as styles from './styles.css';

const fields: { label: string; value: AppTheme }[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System default', value: 'OS' },
];

export const Theme: Component = () => {
  const theme = appStore.theme;

  return (
    <fieldset class={styles.fieldset}>
      <For each={fields}>
        {(field) => (
          <label class={styles.label}>
            <input
              checked={theme === field.value}
              name="theme"
              onChange={({ currentTarget }) => {
                setAppStore('theme', currentTarget.value as AppTheme);
              }}
              type="radio"
              value={field.value}
            />
            <span>{field.label}</span>
          </label>
        )}
      </For>
    </fieldset>
  );
};
