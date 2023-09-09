import { style } from '@vanilla-extract/css';

const hasReducedOpacityClassName = 'hasReducedOpacity';

const displayModeHeight = 40; // TODO: hardcoded to match Input height. Need to fix Input height

const wrapper = style({
  alignItems: 'center',
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  selectors: {
    [`&.${hasReducedOpacityClassName}`]: {
      opacity: 0.5,
    },
  },
  transitionDuration: '0.15s',

  transitionProperty: 'transform',
});

const description = style({
  height: displayModeHeight,
  lineHeight: `${displayModeHeight}px`,
  marginInlineEnd: 'auto',
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
  flexShrink: 0,
  height: 15,
  marginInlineStart: 4, // optical alignment
  width: 15,
});

const descriptionTextfield = style({
  flex: 1,
  height: displayModeHeight,
});

const editWrapper = style([wrapper, { width: '100%' }]);

export {
  checkbox,
  description,
  descriptionTextfield,
  editWrapper,
  hasReducedOpacityClassName,
  wrapper,
};
