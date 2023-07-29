import { style } from '@vanilla-extract/css';

const wrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
});

const label = style({
  fontSize: 'calc(var(--size-font-h1) + 0.6vw)',
  fontWeight: 'normal',
});

export { label, wrapper };
