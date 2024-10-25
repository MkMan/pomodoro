import { Input } from '$app-components';
import { appStore, counterState, setAppStore } from '$app-state';
import { type Component, For } from 'solid-js';

import { commonInputProps, durationFields } from './constants';
import * as styles from './styles.css';

const durations = appStore.durations;

export const Durations: Component = () => (
  <For each={durationFields}>
    {({ label, stateName }) => (
      <Input
        {...commonInputProps}
        class={styles.input}
        disabled={counterState() !== 'stopped'}
        error={durations[stateName] <= 0 && `${label} must be greater than 0`}
        label={label}
        onInput={(event) => {
          const value = event.currentTarget.valueAsNumber || 0;
          setAppStore('durations', stateName, value);
        }}
        value={durations[stateName] === 0 ? '' : durations[stateName]}
      />
    )}
  </For>
);
