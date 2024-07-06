import { variables } from '$app-theme';
import { globalStyle, style } from '@vanilla-extract/css';

const expandingAnimationDuration = '300ms';

const wrapper = style({
  borderRadius: 8,
  boxShadow: variables.shadow.mediumElevation,
  marginInline: -8,
  padding: 8,
});

const heading = style({
  alignItems: 'center',
  backgroundColor: 'inherit',
  color: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  selectors: {
    '&.isOpen': {
      paddingBlockEnd: 8,
    },
  },
  transition: `padding-block-end ${expandingAnimationDuration} ease-in-out`,

  width: '100%',
});

const headingIcon = style({
  selectors: {
    '&.isOpen': {
      transform: 'rotate(180deg)',
    },
  },

  transition: `transform ${expandingAnimationDuration} ease-in-out`,
});

const content = style({
  display: 'grid',

  gridTemplateRows: '0fr',
  paddingInline: 8,
  selectors: {
    '&.isOpen': {
      gridTemplateRows: '1fr',
      visibility: 'visible',
    },
  },
  transition: `${expandingAnimationDuration} ease-in-out`,
  transitionProperty: 'grid-template-rows, visibility',

  visibility: 'collapse',
});

globalStyle(`${content} > *`, {
  overflow: 'hidden',
});

export { content, heading, headingIcon, wrapper };
