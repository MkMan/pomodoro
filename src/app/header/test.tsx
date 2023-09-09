import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { Header } from './header';

describe('Header', () => {
  it('should render the content correctly', async () => {
    const user = userEvent.setup();
    const onSettingsClick = vi.fn();

    render(() => <Header onSettingsClick={onSettingsClick} />);

    expect(
      screen.getByRole('heading', { name: 'Pomodoro' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'settings menu' }));
    expect(onSettingsClick).toHaveBeenCalledTimes(1);
  });
});
