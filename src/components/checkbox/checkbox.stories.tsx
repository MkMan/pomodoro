import type { Meta, StoryObj } from 'storybook-solidjs';

import { Checkbox } from './checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const LargeFont: Story = {
  decorators: [
    (Story) => (
      <div style={{ 'font-size': '40px' }}>
        <Story />
      </div>
    ),
  ],
};
