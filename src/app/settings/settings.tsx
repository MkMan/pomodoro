import { Component, ComponentProps } from 'solid-js';

import { Heading, Input } from '$app-components';
import { counterState, setSettingsStore, settingsStore } from '$app-state';

type Props = {
  dataTestId?: string;
};

export const Settings: Component<Props> = (props) => {
  const durations = settingsStore.durations;

  const commonInputProps: Partial<ComponentProps<typeof Input>> = {
    isRequired: true,
    mb: 16,
    type: 'number',
    min: 0,
  };

  return (
    <section data-testid={props.dataTestId}>
      <Heading level={3} mb={16}>
        Durations
      </Heading>
      <Input
        {...commonInputProps}
        disabled={counterState() !== 'stopped'}
        error={durations.pomodoro <= 0 && `Pomodoro duration must be set`}
        label="Pomodoro"
        onInput={(event) => {
          const value = event.currentTarget.valueAsNumber || 0;
          setSettingsStore('durations', 'pomodoro', value);
        }}
        value={durations.pomodoro === 0 ? '' : durations.pomodoro}
      />
      <Input
        {...commonInputProps}
        disabled={counterState() !== 'stopped'}
        error={durations.shortBreak <= 0 && `Short break duration must be set`}
        label="Short break"
        onInput={(event) => {
          const value = event.currentTarget.valueAsNumber || 0;
          setSettingsStore('durations', 'shortBreak', value);
        }}
        value={durations.shortBreak === 0 ? '' : durations.shortBreak}
      />
      <Input
        {...commonInputProps}
        disabled={counterState() !== 'stopped'}
        error={durations.longBreak <= 0 && `Long break duration must be set`}
        label="Long break"
        onInput={(event) => {
          const value = event.currentTarget.valueAsNumber || 0;
          setSettingsStore('durations', 'longBreak', value);
        }}
        value={durations.longBreak === 0 ? '' : durations.longBreak}
      />
    </section>
  );
};
