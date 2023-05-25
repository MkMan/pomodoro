import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { Drawer } from './drawer';

describe('Drawer', () => {
  const onClose = vi.fn();

  it('should render the content when open', () => {
    render(() => (
      <Drawer onClose={onClose} isOpen>
        Test content
      </Drawer>
    ));

    expect(screen.getByRole('dialog')).toBeVisible();
  });

  it('should call onClose when the close icon is clicked', async () => {
    render(() => <Drawer onClose={onClose} isOpen closeIconLabel="close" />);

    await userEvent.click(screen.getByRole('button', { name: 'close' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
