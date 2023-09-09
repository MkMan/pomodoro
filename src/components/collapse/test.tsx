import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { Collapse } from './collapse';

describe('Collapse', () => {
  const user = userEvent.setup();

  it('should render the heading and content', async () => {
    render(() => (
      <Collapse content="test content" headingLevel={3} label="Test label" />
    ));

    // content collapsed by default
    expect(
      screen.getByRole('heading', { level: 3, name: 'Test label' })
    ).toBeInTheDocument();
    expect(screen.getByText('test content')).not.toBeVisible();

    // expand
    await user.click(screen.getByRole('button', { name: 'Test label' }));

    expect(screen.getByText('test content')).toBeVisible();
  });
});
