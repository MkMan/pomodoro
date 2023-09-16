import type { Meta, StoryObj } from 'storybook-solidjs';

import { Heading } from './heading';

const meta = {
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Levels: Story = {
  render: () => (
    <div style={{ display: 'flex', 'flex-direction': 'column', gap: '16px' }}>
      <Heading level={1}>This is a heading level 1</Heading>
      <Heading level={2}>This is a heading level 2</Heading>
      <Heading level={3}>This is a heading level 3</Heading>
      <Heading level={4}>This is a heading level 4</Heading>
      <Heading level={5}>This is a heading level 5</Heading>
      <Heading level={6}>This is a heading level 6</Heading>
    </div>
  ),
};
