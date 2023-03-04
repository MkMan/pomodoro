import { css } from '@emotion/css';

export const wrapper = css({
  position: 'relative',
  width: 'max-content',
  borderRadius: 4,

  ':has(select:focus)': {
    outline: '2px solid currentcolor',
    outlineOffset: 4,
  },
});

export const select = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,

  ':hover': {
    cursor: 'pointer',

    '+ *': {
      // styles for presentational
    },
  },

  ':disabled': {
    cursor: 'not-allowed',

    '+ *': {
      // styles for presentational
    },
  },
});

export const presentational = css({
  color: 'var(--color-cta-font)',
  backgroundColor: 'var(--color-cta-background)',
  padding: '12px 16px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: 4,
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  transition: 'color 200ms ease',
});
