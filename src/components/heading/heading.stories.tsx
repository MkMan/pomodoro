import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import { Heading } from './heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>The slow grey fox crawls under the active dog</Heading>
);

export const HeadingStory = Template.bind({});
HeadingStory.storyName = 'Heading';

export const HeadingsDemo: Story = () => {
  return (
    <>
      <Heading level={1}>The slow grey fox crawls under the active dog</Heading>
      <Heading level={2}>The slow grey fox crawls under the active dog</Heading>
      <Heading level={3}>The slow grey fox crawls under the active dog</Heading>
      <Heading level={4}>The slow grey fox crawls under the active dog</Heading>
      <Heading level={5}>The slow grey fox crawls under the active dog</Heading>
      <Heading level={6}>The slow grey fox crawls under the active dog</Heading>
    </>
  );
};
