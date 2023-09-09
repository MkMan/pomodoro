import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { Drawer } from './drawer';

describe('Drawer', () => {
  const onClose = vi.fn();

  it('should render the content when open', () => {
    render(() => (
      <Drawer isOpen onClose={onClose}>
        Test content
      </Drawer>
    ));

    expect(screen.getByRole('dialog')).toBeVisible();
  });

  it('should call onClose when the close icon is clicked', async () => {
    render(() => <Drawer closeIconLabel="close" isOpen onClose={onClose} />);

    await userEvent.click(screen.getByRole('button', { name: 'close' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
