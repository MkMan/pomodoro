import { style } from '@vanilla-extract/css';

import { classNames } from './constants';

const displayModeHeight = 40; // TODO: hardcoded to match Input height. Need to fix Input height

const wrapper = style({
  alignItems: 'center',
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  selectors: {
    [`&.${classNames.hasReducedOpacity}`]: {
      opacity: 0.5,
    },

    [`&.${classNames.hasTransitionTransform}`]: {
      transitionDuration: '0.15s',
      transitionProperty: 'transform',
    },
  },
});

const description = style({
  flex: 1,
  fontFamily: '"Playpen Sans Variable", cursive',
  fontSize: '1.2rem',
  fontWeight: 'normal',
  height: displayModeHeight,
  lineHeight: `${displayModeHeight}px`,
  marginInlineEnd: 'auto',
  maxWidth: 'fit-content',
  overflow: 'hidden',
  paddingInlineEnd: '8px', // MAGIC NUMBER: to prevent cursive font getting clipped by overflow: hidden
  selectors: {
    '&.isCompleted': {
      textDecoration: 'line-through 2px currentcolor',
    },
  },
  textOverflow: 'ellipsis',

  whiteSpace: 'nowrap',
});

const descriptionTextfield = style({
  flex: 1,
  height: displayModeHeight,
});

const editWrapper = style([wrapper, { width: '100%' }]);

export { description, descriptionTextfield, editWrapper, wrapper };
