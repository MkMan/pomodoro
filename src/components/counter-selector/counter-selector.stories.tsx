import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CounterSelector } from './counter-selector';

export default {
  title: 'Components/CounterSelector',
  component: CounterSelector,
} as ComponentMeta<typeof CounterSelector>;

const Template: ComponentStory<typeof CounterSelector> = (args) => (
  <CounterSelector {...args} />
);

export const EditMode = Template.bind({});
EditMode.args = {
  currentCounterIndex: 0,
  isInEditMode: true,
};

export const Pomodoro1 = Template.bind({});
Pomodoro1.args = {
  currentCounterIndex: 0,
};

export const ShortBreak1 = Template.bind({});
ShortBreak1.args = {
  currentCounterIndex: 1,
};

export const Pomodoro2 = Template.bind({});
Pomodoro2.args = {
  currentCounterIndex: 2,
};

export const ShortBreak2 = Template.bind({});
ShortBreak2.args = {
  currentCounterIndex: 3,
};

export const Pomodoro3 = Template.bind({});
Pomodoro3.args = {
  currentCounterIndex: 4,
};

export const ShortBreak3 = Template.bind({});
ShortBreak3.args = {
  currentCounterIndex: 5,
};

export const Pomodoro4 = Template.bind({});
Pomodoro4.args = {
  currentCounterIndex: 6,
};

export const LongBreak = Template.bind({});
LongBreak.args = {
  currentCounterIndex: 7,
};
