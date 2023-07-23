import { style } from '@vanilla-extract/css';

const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const fieldset = style({
  minWidth: 0,
  border: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export { fieldset, label };
