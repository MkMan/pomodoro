import { ComponentProps } from 'solid-js';
import { AppSettings } from 'src/state/settings/types';

import { Input } from '$app-components';

type DurationField = {
  label: string;
  stateName: keyof AppSettings['durations'];
};

const commonInputProps: Partial<ComponentProps<typeof Input>> = {
  isRequired: true,
  type: 'number',
  min: 1,
};

const durationFields: DurationField[] = [
  { label: 'Pomodoro', stateName: 'pomodoro' },
  { label: 'Short break', stateName: 'shortBreak' },
  { label: 'Long break', stateName: 'longBreak' },
];

export { commonInputProps, durationFields };
