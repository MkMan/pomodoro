import { Component, For } from 'solid-js';

import { Collapse, Input } from '$app-components';
import { counterState, setSettingsStore, settingsStore } from '$app-state';

import { commonInputProps, durationFields } from './constants';
import * as styles from './styles';

const durations = settingsStore.durations;

export const Durations: Component = () => (
  <Collapse
    label="Durations"
    headingLevel={3}
    isOpen
    content={
      <For each={durationFields}>
        {({ stateName, label }) => (
          <Input
            {...commonInputProps}
            // eslint-disable-next-line solid/no-react-specific-props -- TODO: rename
            className={styles.input}
            disabled={counterState() !== 'stopped'}
            error={
              durations[stateName] <= 0 && `${label} must be greater than 0`
            }
            label={label}
            onInput={(event) => {
              const value = event.currentTarget.valueAsNumber || 0;
              setSettingsStore('durations', stateName, value);
            }}
            value={durations[stateName] === 0 ? '' : durations[stateName]}
          />
        )}
      </For>
    }
  />
);
