import { css } from '@emotion/css';

export const wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: '1rem',
  fontWeight: 500,
});

export const labelAsterisk = css({
  ':after': {
    content: '" *"',
    color: 'red',
    fontSize: '1.1rem',
  },
});

export const input = css({
  height: 40,
  borderRadius: 4,
  padding: 8,
  paddingInlineStart: 16,
  border: '1px solid lightgrey',

  ':disabled': {
    cursor: 'not-allowed',
    color: 'darkgray',
  },
});

export const asterisk = css({
  color: 'red',
  fontSize: '1.1rem',
});

export const error = css({
  color: 'red',
});
