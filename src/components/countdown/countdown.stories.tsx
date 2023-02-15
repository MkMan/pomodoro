import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Countdown } from './countdown';

export default {
  title: 'Components/Countdown',
  component: Countdown,
} as ComponentMeta<typeof Countdown>;

const Template: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  seconds: 25 * 60,
};
