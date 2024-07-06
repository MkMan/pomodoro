import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

export const headerContentWrapper = style({
  alignItems: 'center',
  columnGap: 10,
  display: 'flex',
});

export const header = style({
  boxShadow: variables.shadow.lowElevation,
});
