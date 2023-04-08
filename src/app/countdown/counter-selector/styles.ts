import { css } from '@emotion/css';

const wrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
});

const label = css({
  fontSize: 'calc(var(--size-font-h1) + 0.6vw)',
  fontWeight: 'normal',
});

export { label, wrapper };
