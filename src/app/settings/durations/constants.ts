import { Input } from '$app-components';
import { ComponentProps } from 'solid-js';
import { AppStore } from 'src/state/app-store/types';

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
