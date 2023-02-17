import { NumberInput } from '@mantine/core';

import { useAppSettings } from '$app-utils';

import { Heading } from '../heading/heading';

type Props = {
  isDurationEditingDisabled?: boolean;
  dataTestId?: string;
};

export const Settings: React.FC<Props> = ({
  isDurationEditingDisabled,
  dataTestId,
}) => {
  const {
    durations,
    setLongBreakDuration,
    setPomodoroDuration,
    setShortBreakDuration,
  } = useAppSettings();
  const { pomodoro, shortBreak, longBreak } = durations;

  const fields = [
    {
      label: 'Pomodoro',
      setter: setPomodoroDuration,
      value: pomodoro,
    },
    {
      label: 'Short break',
      setter: setShortBreakDuration,
      value: shortBreak,
    },
    {
      label: 'Long break',
      setter: setLongBreakDuration,
      value: longBreak,
    },
  ];

  return (
    <section data-testid={dataTestId}>
      <Heading level={3} mb={16}>
        Durations
      </Heading>
      {fields.map(({ label, setter, value }) => (
        <NumberInput
          disabled={isDurationEditingDisabled}
          error={value <= 0 && `${label} durations must be set`}
          key={label}
          label={label}
          mb={16}
          min={0}
          onChange={(number) => {
            const value = number || 0;
            setter(value);
          }}
          size="md"
          type="number"
          value={value}
          withAsterisk
        />
      ))}
    </section>
  );
};
