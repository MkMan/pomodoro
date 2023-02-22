import { css } from '@emotion/css';

export const wrapper = css({
  width: 'var(--size)',
  height: 'var(--size)',
  display: 'flex',
  justifyContent: 'center',

  '& svg': {
    height: '100%',
    color: 'inherit',
  },
});
