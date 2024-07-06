import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

const activeState: Parameters<typeof style>[0] = {
  backgroundColor: variables.color.backgroundInverted,
  color: variables.color.fontInverted,
  transform: 'translate(-1px, -1px)',
  transitionDuration: '200ms',
};

const hover = style({
  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:not(:disabled)': {
          transitionDuration: '400ms',
          transitionProperty: 'color, background-color, transform',
        },
        '&:not(:disabled):hover': activeState,
      },
    },
  },
  selectors: {
    '&:disabled': { opacity: variables.opacity.inputDisabled },
    '&:focus-visible': { ...activeState, outline: 'none' },
  },
});

export { hover };
