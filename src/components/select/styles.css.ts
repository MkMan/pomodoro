import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  width: 'max-content',
  borderRadius: 4,
});

export const select = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,

  selectors: {
    '&:not(:disabled):hover': {
      cursor: 'pointer',
    },
  },

  ':disabled': {
    cursor: 'not-allowed',
  },
});

globalStyle(`${select}:not(:disabled):hover + *`, {
  color: 'var(--color-font-inverted)',
  backgroundColor: 'var(--color-background-inverted)',
});

globalStyle(`${select}:disabled + *`, {
  opacity: 'var(--opacity-input-disabled)',
  cursor: 'not-allowed',
});

globalStyle(`${select}:focus + *`, {
  outline: '2px solid currentcolor',
  outlineOffset: 4,
});

export const presentational = style({
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
  height: '100%',
  justifyContent: 'space-between',
});
