import { css } from '@emotion/css';

export const button = css({
  color: '#868e96',
  padding: 3,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: 'var(--size)',
  height: 'var(--size)',
  borderRadius: 2,
  transition: 'background-color 200ms ease',

  ':hover': {
    backgroundColor: '#ecedf0',
  },

  '> *': {
    width: '100%',
    height: '100%',
  },
});
