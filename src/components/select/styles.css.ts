import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  borderRadius: 4,
  position: 'relative',
  width: 'max-content',
});

export const select = style({
  ':disabled': {
    cursor: 'not-allowed',
  },
  height: '100%',
  left: 0,
  opacity: 0,
  position: 'absolute',
  selectors: {
    '&:not(:disabled):hover': {
      cursor: 'pointer',
    },
  },

  top: 0,

  width: '100%',
});

globalStyle(`${select}:not(:disabled):hover + *`, {
  backgroundColor: 'var(--color-background-inverted)',
  color: 'var(--color-font-inverted)',
});

globalStyle(`${select}:disabled + *`, {
  cursor: 'not-allowed',
  opacity: 'var(--opacity-input-disabled)',
});

globalStyle(`${select}:focus + *`, {
  outline: '2px solid currentcolor',
  outlineOffset: 4,
});

export const presentational = style({
  alignItems: 'center',
  backgroundColor: 'var(--color-background)',
  border: '2px solid var(--color-cta-background)',
  borderRadius: 4,
  color: 'var(--color-font)',
  display: 'flex',
  fontSize: '1rem',
  fontWeight: 500,
  gap: 16,
  height: '100%',
  justifyContent: 'space-between',
  padding: '6px 12px',
  transition: 'color 200ms ease',
});
