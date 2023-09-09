import type { Meta, StoryObj } from 'storybook-solidjs';

import { Collapse } from './collapse';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  component: Collapse,
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: (
      <>
        <h3>The tragedy of darth Plagueis the wise</h3>
        <br />
        <p>
          Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he
          could use the Force to influence the midichlorians to create life… He
          had such a knowledge of the dark side that he could even keep the ones
          he cared about from dying.
        </p>
        <br />
        <p>
          The dark side of the Force is a pathway to many abilities some
          consider to be unnatural. He became so powerful… the only thing he was
          afraid of was losing his power, which eventually, of course, he did.
          Unfortunately, he taught his apprentice everything he knew, then his
          apprentice killed him in his sleep. Ironic. He could save others from
          death, but not himself.
        </p>
      </>
    ),
    headingLevel: 2,
    label: 'Click to expand/collapse',
  },
};
