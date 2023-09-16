import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

const hover = style({
  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:not(:disabled):hover': {
          boxShadow: variables.color.boxShadowInputHover,
        },
      },
    },
  },
});

export { hover };
