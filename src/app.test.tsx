import { render, screen, userEvent, waitFor } from '$test-utils';

import { App } from './app';

describe('App', () => {
  it('should open with the defaults', async () => {
    const user = userEvent.setup();

    render(<App />);

    const counterTypes = screen.getAllByRole('radio');
    const remainingTime = screen.getByTestId('remainingTime');

    // Defaults on initial render
    expect(counterTypes.length).toBe(3);
    expect(counterTypes[0]).toHaveAccessibleName('Pomodoro');
    expect(counterTypes[0]).toBeChecked();
    expect(counterTypes[1]).toHaveAccessibleName('Short break');
    expect(counterTypes[2]).toHaveAccessibleName('Long break');
    expect(remainingTime).toHaveTextContent('25:00');

    // Interactions
    await user.click(counterTypes[1]);
    expect(counterTypes[1]).toBeChecked();
    expect(remainingTime).toHaveTextContent('05:00');
    await user.click(counterTypes[2]);
    expect(counterTypes[2]).toBeChecked();
    expect(remainingTime).toHaveTextContent('10:00');
  });

  it('should open and close the settings', async () => {
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
