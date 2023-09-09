import { style } from '@vanilla-extract/css';

export const footer = style({
  borderBlockStart: '1px solid lightgrey',
  paddingBlock: 16,
});

export const wrapper = style({
  alignItems: 'center',
  display: 'flex',
});

export const sourceCodeLink = style({
  marginInlineStart: 'auto',
});
