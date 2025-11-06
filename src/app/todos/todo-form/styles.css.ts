import { style } from '@vanilla-extract/css';

const formLayout = style({
  alignItems: 'center',
  display: 'flex',
  gap: 16,
});

const inputForm = style({ flex: 1 });

export { formLayout, inputForm };
