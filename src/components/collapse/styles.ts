import { css } from '@emotion/css';

const expandingAnimationDuration = '300ms';

const wrapper = css({
  borderRadius: 8,
  padding: 8,
  marginInline: -8,
  boxShadow: 'var(--boxShadow-card)',
});

const heading = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'inherit',
  color: 'inherit',
  transition: `padding-block-end ${expandingAnimationDuration} ease-in-out`,

  '&.isOpen': {
    paddingBlockEnd: 8,
  },
});

const headingIcon = css({
  transition: `transform ${expandingAnimationDuration} ease-in-out`,

  '&.isOpen': {
    transform: 'rotate(180deg)',
  },
});

const content = css({
  paddingInline: 8,

  display: 'grid',
  gridTemplateRows: '0fr',
  transition: `grid-template-rows ${expandingAnimationDuration} ease-in-out`,

  '> *': {
    overflow: 'hidden',
  },

  '&.isOpen': {
    gridTemplateRows: '1fr',
  },
});

export { content, heading, headingIcon, wrapper };
