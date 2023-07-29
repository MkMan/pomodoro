import { style } from '@vanilla-extract/css';

export const headerContentWrapper = style({
  display: 'flex',
  columnGap: 10,
  alignItems: 'center',
});

export const header = style({ borderBottom: '1px solid lightgrey' });
