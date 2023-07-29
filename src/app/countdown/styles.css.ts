import { style } from '@vanilla-extract/css';

export const remainingTime = style({
  textAlign: 'center',
  paddingBlockStart: 32,
  paddingBlockEnd: 48,
  fontWeight: 500,
  fontSize: '7rem',
});

export const buttonsContainer = style({
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
});
