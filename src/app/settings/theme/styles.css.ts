import { style } from '@vanilla-extract/css';

const label = style({
  alignItems: 'center',
  display: 'flex',
  gap: 8,
});

const fieldset = style({
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  minWidth: 0,
  padding: 0,
});

export { fieldset, label };
