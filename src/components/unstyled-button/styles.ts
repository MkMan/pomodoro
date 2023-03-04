import { css } from '@emotion/css';

export const unstyledButton = css({
  color: 'var(--color-font)',
  backgroundColor: 'var(--color-background)',
  border: 'none',
  cursor: 'pointer',
  padding: 3,
  borderRadius: 4,
  transition: 'background-color 200ms ease',

  ':not(:disabled):hover': {
    translate: '-1px -1px',
    boxShadow: '0px 0px 5px 1px var(--color-overlay)',
  },

  ':disabled': {
    cursor: 'not-allowed',
  },
});
