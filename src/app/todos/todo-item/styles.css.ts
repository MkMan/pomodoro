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
  fontFamily: '"Caveat Variable", cursive',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  height: displayModeHeight,
  lineHeight: `${displayModeHeight}px`,
  marginInlineEnd: 'auto',
  maxWidth: 'fit-content',
  overflow: 'hidden',
  selectors: {
    '&.isCompleted': {
      textDecoration: 'line-through solid 2px currentcolor',
    },
  },
  textOverflow: 'ellipsis',

  whiteSpace: 'nowrap',
});

const checkbox = style({
  height: 15,
  marginInlineStart: 4, // optical alignment
  width: 15,
});

const descriptionTextfield = style({
  flex: 1,
  height: displayModeHeight,
});

const editWrapper = style([wrapper, { width: '100%' }]);

export { checkbox, description, descriptionTextfield, editWrapper, wrapper };
