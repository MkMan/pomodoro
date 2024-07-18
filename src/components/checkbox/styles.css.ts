import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

const checkbox = style({
  appearance: 'none',
  border: `0.15em solid ${variables.color.font}`,
  borderRadius: '0.15em',
  display: 'grid',
  height: '1.15em',
  margin: 0,
  outlineOffset: variables.inputOffset,
  placeContent: 'center',
  selectors: {
    '&::before': {
      backgroundColor: variables.color.background,
      clipPath:
        'polygon(0 0,0 50%,0 100%,50% 100%,100% 100%,100% 50%,100% 0%,50% 0%)',
      content: '""',
      height: '0.85em',
      transformOrigin: 'center',
      transitionDuration: variables.transition.buttonHoverEnd,
      transitionProperty: 'clip-path',
      width: '0.85em',
    },
    '&:checked': {
      backgroundColor: variables.color.backgroundInverted,
      transitionDuration: variables.transition.buttonHoverStart,
    },
    '&:checked::before': {
      clipPath:
        'polygon(14% 44%,0 65%,50% 100%,75% 58%,100% 16%,80% 0%,62% 31%,43% 62%)',
      transitionDuration: variables.transition.buttonHoverStart,
    },
  },
  transform: 'translateY(0.075em)',
  transitionDuration: variables.transition.buttonHoverEnd,
  transitionProperty: 'background-color',

  width: '1.15em',
});

export { checkbox };
