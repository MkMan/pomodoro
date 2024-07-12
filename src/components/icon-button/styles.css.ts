import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

const activeState: Parameters<typeof style>[0] = {
  backgroundColor: variables.color.backgroundInverted,
  color: variables.color.fontInverted,
  transform: 'translate(-1px, -1px)',
  transitionDuration: variables.transition.buttonHoverStart,
};

const hover = style({
  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:not(:disabled)': {
          transitionDuration: variables.transition.buttonHoverEnd,
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
