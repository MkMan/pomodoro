import { style } from '@vanilla-extract/css';

const headingWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
});

const heading = style({
  paddingBlockEnd: 16,
});

const createCta = style({
  marginBlockStart: 16,
  width: '100%',
});

export { createCta, heading, headingWrapper };
