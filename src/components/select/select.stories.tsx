import type { Meta, StoryObj } from 'storybook-solidjs';

import { type ComponentProps, createSignal } from 'solid-js';

import { Select } from './select';

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

type SelectOptions = ComponentProps<typeof Select>['options'];
const options: SelectOptions = [
  { label: 'Mitsubishi', value: 'mitsubishi' },
  { label: 'Mazda', value: 'mazda' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = createSignal(options[0].value);

    return (
      <div style={{ 'align-items': 'baseline', display: 'flex', gap: '16px' }}>
        <label for="select">Car</label>
        <Select
          id="select"
          onChange={({ currentTarget }) => setValue(currentTarget.value)}
          options={options}
          value={value()}
        />
      </div>
    );
  },
};
