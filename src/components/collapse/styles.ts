import { css } from '@emotion/css';

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
});

const headingIcon = css({
  transition: 'transform 300ms ease',

  '&.isOpen': {
    transform: 'rotate(180deg)',
  },
});

const content = css({
  ':not(:empty)': {
    padding: 8,
  },
});

export { content, heading, headingIcon, wrapper };
