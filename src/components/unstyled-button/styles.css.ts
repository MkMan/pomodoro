import { style } from '@vanilla-extract/css';

export const unstyledButton = style({
  ':disabled': {
    cursor: 'not-allowed',
  },
  backgroundColor: 'var(--color-background)',
  border: 'none',
  borderRadius: 4,
  color: 'var(--color-font)',
  cursor: 'pointer',
  padding: 3,

  transition: 'box-shadow 200ms ease',
});
