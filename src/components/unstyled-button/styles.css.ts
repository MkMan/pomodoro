import { style } from '@vanilla-extract/css';

export const unstyledButton = style({
  color: 'var(--color-font)',
  backgroundColor: 'var(--color-background)',
  border: 'none',
  cursor: 'pointer',
  padding: 3,
  borderRadius: 4,
  transition: 'box-shadow 200ms ease',

  ':disabled': {
    cursor: 'not-allowed',
  },
});
