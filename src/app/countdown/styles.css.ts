import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

export const remainingTime = style({
  fontSize: '6rem',
  fontWeight: 500,
  textAlign: 'center',
});

export const buttonsContainer = style({
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
});
