import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { Mock } from 'vitest';

import * as appState from '$app-state';

import { Durations } from './durations';

describe('Durations', () => {
  beforeEach(() => {
    vi.spyOn(appState, 'setAppStore');
    vi.spyOn(appState, 'counterState').mockReturnValue('stopped');

    appState.setAppStore('durations', {
      pomodoro: 1,
      shortBreak: 2,
      longBreak: 3,
    });
  });

  const user = userEvent.setup();
  const getAllInputs = () => screen.getAllByRole('spinbutton');

  it('should load the correct fields and update the store on change', async () => {
    render(() => <Durations />);

    expect(getAllInputs()).toHaveLength(3);
    expect(getAllInputs()[0]).toHaveAccessibleName('Pomodoro');
    expect(getAllInputs()[0]).toHaveValue(1);
    expect(getAllInputs()[1]).toHaveAccessibleName('Short break');
    expect(getAllInputs()[1]).toHaveValue(2);
    expect(getAllInputs()[2]).toHaveAccessibleName('Long break');
    expect(getAllInputs()[2]).toHaveValue(3);

    await user.clear(getAllInputs()[0]);
    await user.type(getAllInputs()[0], '20');

    expect(appState.setAppStore).toHaveBeenLastCalledWith(
      'durations',
      'pomodoro',
      20
    );
  });

  it('should disable the input if the counter is not stopped', () => {
    (appState.counterState as Mock).mockImplementation(() => 'running');

    render(() => <Durations />);

    expect(getAllInputs()[0]).toBeDisabled();
    expect(getAllInputs()[1]).toBeDisabled();
    expect(getAllInputs()[2]).toBeDisabled();
  });

  it('should show an error message if an entered duration is invalid', async () => {
    render(() => <Durations />);

    const getErrorMessage = () => screen.queryByText(/must be greater than 0/);

    expect(getErrorMessage()).not.toBeInTheDocument();

    await user.clear(getAllInputs()[0]);

    expect(getErrorMessage()).toBeInTheDocument();
  });
});
