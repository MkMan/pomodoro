import type { Meta, StoryObj } from 'storybook-solidjs';

import { createSignal } from 'solid-js';

import { Button } from '../button/button';
import { Drawer } from './drawer';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Click to open drawer</Button>
        <Drawer
          heading={<h2>This an example drawer</h2>}
          isOpen={isOpen()}
          onClose={() => setIsOpen(false)}
        >
          <p>Drawer content</p>
        </Drawer>
      </>
    );
  },
};
