import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { App } from './app';

describe('App', () => {
  const user = userEvent.setup();

  const getSettingsDrawer = () =>
    screen.queryByRole('dialog', { name: 'Settings' });
  const withinTheHeader = () => within(screen.getByRole('banner'));
  const withinMainSection = () => within(screen.getByRole('main'));
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const withinSettingsDrawer = () => within(getSettingsDrawer()!);

  it('should render content', async () => {
    render(() => <App />);

    // header
    expect(
      withinTheHeader().getByRole('heading', {
        level: 1,
        name: 'Pomodoro',
      })
    ).toBeInTheDocument();

    // main
    expect(
      withinMainSection().getByRole('button', { name: 'edit counter type' })
    ).toBeInTheDocument();
    expect(
      withinMainSection().getByRole('button', { name: 'Start' })
    ).toBeInTheDocument();
    expect(
      withinMainSection().getByRole('button', { name: 'Reset' })
    ).toBeInTheDocument();
    expect(
      withinMainSection().getByRole('button', { name: 'Create a todo' })
    ).toBeInTheDocument();

    // footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // settings drawer
    expect(getSettingsDrawer()).not.toBeInTheDocument();

    await user.click(withinTheHeader().getByRole('button'));
    expect(getSettingsDrawer()).toBeVisible();

    await user.click(
      withinSettingsDrawer().getByRole('button', {
        name: 'close settings menu',
      })
    );
    await waitForElementToBeRemoved(getSettingsDrawer());
    expect(getSettingsDrawer()).not.toBeInTheDocument();
  });
});
