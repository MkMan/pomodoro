import { Component, For } from 'solid-js';
import { AppTheme } from 'src/state/settings/types';

import { Collapse } from '$app-components';
import { setSettingsStore, settingsStore } from '$app-state';

import * as styles from './styles';

const fields: { label: string; value: AppTheme }[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System default', value: 'OS' },
];

export const Theme: Component = () => {
  const theme = settingsStore.theme;

  return (
    <Collapse
      label="Theme"
      headingLevel={3}
      content={
        <fieldset class={styles.fieldset}>
          <For each={fields}>
            {(field) => (
              <label class={styles.label}>
                <input
                  type="radio"
                  name="theme"
                  value={field.value}
                  onChange={({ currentTarget }) => {
                    setSettingsStore('theme', currentTarget.value as AppTheme);
                  }}
                  checked={theme === field.value}
                />
                <span>{field.label}</span>
              </label>
            )}
          </For>
        </fieldset>
      }
    />
  );
};
