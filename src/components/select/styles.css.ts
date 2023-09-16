import { variables } from '$app-theme';
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
  backgroundColor: variables.color.backgroundInverted,
  color: variables.color.fontInverted,
});

globalStyle(`${select}:disabled + *`, {
  cursor: 'not-allowed',
  opacity: variables.opacity.inputDisabled,
});

globalStyle(`${select}:focus + *`, {
  outline: '2px solid currentcolor',
  outlineOffset: 4,
});

export const presentational = style({
  alignItems: 'center',
  backgroundColor: variables.color.background,
  border: '2px solid var(--color-cta-background)',
  borderRadius: 4,
  color: variables.color.font,
  display: 'flex',
  fontSize: '1rem',
  fontWeight: 500,
  gap: 16,
  height: '100%',
  justifyContent: 'space-between',
  padding: '6px 12px',
  transition: 'color 200ms ease',
});
