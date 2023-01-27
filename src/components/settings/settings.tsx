import { NumberInput, Title } from '@mantine/core';

import { useAppSettings } from '$app-utils';

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
      <Title mb={16} order={3}>
        Durations
      </Title>
      {fields.map(({ label, setter, value }) => (
        <NumberInput
          disabled={isDurationEditingDisabled}
          error={value <= 0 && `${label} durations must be set`}
          key={label}
          label={label}
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
