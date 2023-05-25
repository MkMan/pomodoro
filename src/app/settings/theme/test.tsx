import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { setAppStore } from '$app-state';

import { Theme } from './theme';

vi.mock('$app-state', () => ({
  appStore: {
    theme: 'dark',
  },
  setAppStore: vi.fn(),
}));

describe('Theme', () => {
  it('should render the correct option and update state on change', async () => {
    const user = userEvent.setup();

    render(() => <Theme />);
    const radioButtons = screen.getAllByRole('radio');

    expect(radioButtons).toHaveLength(3);
    expect(radioButtons[0]).toHaveAccessibleName('Light');
    expect(radioButtons[1]).toHaveAccessibleName('Dark');
    expect(radioButtons[1]).toBeChecked();
    expect(radioButtons[2]).toHaveAccessibleName('System default');

    await user.click(radioButtons[0]);

    expect(setAppStore).toHaveBeenCalledWith('theme', 'light');
  });
});
