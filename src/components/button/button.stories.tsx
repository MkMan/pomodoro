import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Pallet: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '24px',
        'grid-template-columns': 'repeat(3, 1fr)',
        'justify-content': 'center',
      }}
    >
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button size="small">Primary</Button>
      <Button size="small" variant="secondary">
        Secondary
      </Button>
      <Button size="small" variant="danger">
        Danger
      </Button>
    </div>
  ),
};
