import { style } from '@vanilla-extract/css';

const hover = style({
  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:not(:disabled):hover': {
          boxShadow: 'var(--boxShadow-input-hover)',
        },
      },
    },
  },
});

export { hover };
