import { Component, ComponentProps, For } from 'solid-js';
import { AppSettings } from 'src/state/settings/types';

import { Heading, Input } from '$app-components';
import { counterState, setSettingsStore, settingsStore } from '$app-state';

type Props = {
  dataTestId?: string;
};

type DurationField = {
  label: string;
  stateName: keyof AppSettings['durations'];
};

export const Settings: Component<Props> = (props) => {
  const durations = settingsStore.durations;

  const commonInputProps: Partial<ComponentProps<typeof Input>> = {
    isRequired: true,
    mb: 16,
    type: 'number',
    min: 1,
  };

  const durationFields: DurationField[] = [
    { label: 'Pomodoro', stateName: 'pomodoro' },
    { label: 'Short break', stateName: 'shortBreak' },
    { label: 'Long break', stateName: 'longBreak' },
  ];

  return (
    <section data-testid={props.dataTestId}>
      <Heading level={3} mb={16}>
        Durations
      </Heading>
      <For each={durationFields}>
        {({ stateName, label }) => (
          <Input
            {...commonInputProps}
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
    </section>
  );
};
