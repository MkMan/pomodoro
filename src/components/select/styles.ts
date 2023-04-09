import { css } from '@emotion/css';

export const wrapper = css({
  position: 'relative',
  width: 'max-content',
  borderRadius: 4,
});

export const select = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,

  ':not(:disabled):hover': {
    cursor: 'pointer',

    '+ *': {
      // styles for presentational
      boxShadow: 'var(--boxShadow-input-hover)',
    },
  },

  ':disabled': {
    cursor: 'not-allowed',

    '+ *': {
      // styles for presentational
      opacity: 'var(--opacity-input-disabled)',
      cursor: 'not-allowed',
    },
  },

  ':focus + *': {
    outline: '2px solid currentcolor',
    outlineOffset: 4,
  },
});

export const presentational = css({
  color: 'var(--color-font)',
  backgroundColor: 'var(--color-background)',
  border: '2px solid var(--color-cta-background)',
  padding: '6px 12px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: 4,
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  transition: 'color 200ms ease',
});
