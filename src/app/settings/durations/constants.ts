import { ComponentProps } from 'solid-js';
import { AppStore } from 'src/state/app-store/types';

import { Input } from '$app-components';

type DurationField = {
  label: string;
  stateName: keyof AppStore['durations'];
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
