import { style } from '@vanilla-extract/css';

export const footer = style({
  borderBlockStart: '1px solid lightgrey',
  paddingBlock: 16,
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const sourceCodeLink = style({
  marginInlineStart: 'auto',
});
