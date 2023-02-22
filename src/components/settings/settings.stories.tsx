import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Settings } from './settings';

export default {
  title: 'Components/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = (args) => (
  <Settings {...args} />
);

export const Primary = Template.bind({});
