import { globalStyle, style } from '@vanilla-extract/css';

const expandingAnimationDuration = '300ms';

const wrapper = style({
  borderRadius: 8,
  padding: 8,
  marginInline: -8,
  boxShadow: 'var(--boxShadow-card)',
});

const heading = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'inherit',
  color: 'inherit',
  transition: `padding-block-end ${expandingAnimationDuration} ease-in-out`,

  selectors: {
    '&.isOpen': {
      paddingBlockEnd: 8,
    },
  },
});

const headingIcon = style({
  transition: `transform ${expandingAnimationDuration} ease-in-out`,

  selectors: {
    '&.isOpen': {
      transform: 'rotate(180deg)',
    },
  },
});

const content = style({
  paddingInline: 8,

  display: 'grid',
  gridTemplateRows: '0fr',
  transition: `${expandingAnimationDuration} ease-in-out`,
  transitionProperty: 'grid-template-rows, visibility',
  visibility: 'collapse',

  selectors: {
    '&.isOpen': {
      gridTemplateRows: '1fr',
      visibility: 'visible',
    },
  },
});

globalStyle(`${content} > *`, {
  overflow: 'hidden',
});

export { content, heading, headingIcon, wrapper };
