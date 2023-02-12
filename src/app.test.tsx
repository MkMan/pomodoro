import { render, screen, userEvent, waitFor } from '$test-utils';

import { App } from './app';

describe('App', () => {
  it('should open with the defaults', async () => {
    const user = userEvent.setup();

    render(<App />);

    const getCounterTypes = () => screen.getAllByRole('radio');
    const remainingTime = screen.getByTestId('remainingTime');
    const getEditCounterButton = () =>
      screen.getByRole('button', {
        name: 'edit counter type',
      });

    // Opens in counter display mode
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(getEditCounterButton()).toBeInTheDocument();

    // Open Edit mode
    await user.click(getEditCounterButton());

    // Defaults on initial render
    expect(getCounterTypes().length).toBe(8);
    expect(getCounterTypes()[0]).toBeChecked();
    expect(getCounterTypes()[0]).toHaveAccessibleName('Pomodoro');
    expect(getCounterTypes()[1]).toHaveAccessibleName('Short break');
    expect(getCounterTypes()[2]).toHaveAccessibleName('Pomodoro');
    expect(getCounterTypes()[3]).toHaveAccessibleName('Short break');
    expect(getCounterTypes()[4]).toHaveAccessibleName('Pomodoro');
    expect(getCounterTypes()[5]).toHaveAccessibleName('Short break');
    expect(getCounterTypes()[6]).toHaveAccessibleName('Pomodoro');
    expect(getCounterTypes()[7]).toHaveAccessibleName('Long break');
    expect(remainingTime).toHaveTextContent('25:00');

    // Interactions
    await user.click(getCounterTypes()[1]);
    expect(getCounterTypes()[1]).toBeChecked();
    expect(remainingTime).toHaveTextContent('05:00');
    await user.click(getCounterTypes()[7]);
    expect(getCounterTypes()[7]).toBeChecked();
    expect(remainingTime).toHaveTextContent('10:00');
  });

  it('should open and close the settings drawer', async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.queryByTestId('appSettings')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'settings menu' }));
    expect(screen.getByTestId('appSettings')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: 'close settings menu' })
    );
    await waitFor(() => {
      expect(screen.queryByTestId('appSettings')).not.toBeInTheDocument();
    });
  });
});
