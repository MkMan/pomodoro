import type { Input } from '$app-components';
import type { AppStore } from '$app-state';
import type { ComponentProps } from 'solid-js';

type DurationField = {
  label: string;
  stateName: keyof AppStore['durations'];
};

const commonInputProps: Partial<ComponentProps<typeof Input>> = {
  isRequired: true,
  min: 1,
  type: 'number',
};

const durationFields: DurationField[] = [
  { label: 'Pomodoro', stateName: 'pomodoro' },
  { label: 'Short break', stateName: 'shortBreak' },
  { label: 'Long break', stateName: 'longBreak' },
];

export { commonInputProps, durationFields };
