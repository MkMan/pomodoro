import { style } from '@vanilla-extract/css';

const wrapper = style({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'center',
});

const label = style({
  fontSize: 'calc(var(--size-font-h1) + 0.6vw)',
  fontWeight: 'normal',
});

export { label, wrapper };
