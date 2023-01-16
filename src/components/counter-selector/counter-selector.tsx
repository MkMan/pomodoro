import { Chip } from '@mantine/core';

import { CurrentCounter, Props } from './types';

const chips: { value: CurrentCounter; label: string }[] = [
  {
    label: 'Pomodoro',
    value: 'pomodoro',
  },
  {
    label: 'Short break',
    value: 'shortBreak',
  },
  {
    label: 'Long break',
    value: 'longBreak',
  },
];

export const CounterSelector: React.FC<Props> = ({
  currentCounter,
  setCurrentCounter,
  isDisabled,
}) => {
  return (
    <Chip.Group
      multiple={false}
      onChange={setCurrentCounter}
      value={currentCounter}
    >
      {chips.map(({ label, value }) => (
        <Chip disabled={isDisabled} key={label} value={value}>
          {label}
        </Chip>
      ))}
    </Chip.Group>
  );
};
