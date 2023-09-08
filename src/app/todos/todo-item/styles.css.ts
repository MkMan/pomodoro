import { style } from '@vanilla-extract/css';

const hasReducedOpacityClassName = 'hasReducedOpacity';

const displayModeHeight = 40; // TODO: hardcoded to match Input height. Need to fix Input height

const wrapper = style({
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  alignItems: 'center',
  transitionProperty: 'transform',
  transitionDuration: '0.15s',

  selectors: {
    [`&.${hasReducedOpacityClassName}`]: {
      opacity: 0.5,
    },
  },
});

const description = style({
  height: displayModeHeight,
  lineHeight: `${displayModeHeight}px`,
  marginInlineEnd: 'auto',

  selectors: {
    '&.isCompleted': {
      textDecoration: 'line-through solid 2px currentcolor',
    },
  },
});

const checkbox = style({
  height: 15,
  width: 15,
});

const descriptionTextfield = style({
  height: displayModeHeight,
  flex: 1,
});

export {
  checkbox,
  description,
  descriptionTextfield,
  hasReducedOpacityClassName,
  wrapper,
};
