import { style } from '@vanilla-extract/css';

const footer = style({
  alignItems: 'center',
  borderBlockStart: '1px solid currentcolor',
  display: 'flex',
  paddingBlock: 16,
});

const sourceCodeLink = style({
  marginInlineStart: 'auto',
});

export { footer, sourceCodeLink };
