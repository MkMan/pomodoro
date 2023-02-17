import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CounterSelector } from './counter-selector';

export default {
  title: 'Components/CounterSelector',
  component: CounterSelector,
} as ComponentMeta<typeof CounterSelector>;

const Template: ComponentStory<typeof CounterSelector> = (args) => (
  <>
    <CounterSelector {...args} currentCounterIndex={0} />
    <br />
    <CounterSelector {...args} currentCounterIndex={1} />
    <br />
    <CounterSelector {...args} currentCounterIndex={2} />
    <br />
    <CounterSelector {...args} currentCounterIndex={3} />
    <br />
    <CounterSelector {...args} currentCounterIndex={4} />
    <br />
    <CounterSelector {...args} currentCounterIndex={5} />
    <br />
    <CounterSelector {...args} currentCounterIndex={6} />
    <br />
    <CounterSelector {...args} currentCounterIndex={7} />
  </>
);

export const DisplayMode = Template.bind({});
DisplayMode.args = {
  isInEditMode: false,
};

export const EditMode = Template.bind({});
EditMode.args = {
  isInEditMode: true,
};
