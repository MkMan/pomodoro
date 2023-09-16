import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

export const unstyledButton = style({
  ':disabled': {
    cursor: 'not-allowed',
  },
  backgroundColor: variables.color.background,
  border: 'none',
  borderRadius: 4,
  color: variables.color.font,
  cursor: 'pointer',
  padding: 3,

  transition: 'box-shadow 200ms ease',
});
