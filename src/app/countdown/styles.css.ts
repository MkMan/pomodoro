import { style } from '@vanilla-extract/css';

export const remainingTime = style({
  fontSize: '7rem',
  fontWeight: 500,
  paddingBlockEnd: 48,
  paddingBlockStart: 32,
  textAlign: 'center',
});

export const buttonsContainer = style({
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
});
