import { css } from '@emotion/css';

const label = css({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const fieldset = css({
  minWidth: 0,
  border: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export { fieldset, label };
