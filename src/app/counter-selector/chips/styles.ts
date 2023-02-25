import { css } from '@emotion/css';

export const label = css({
  alignItems: 'center',
  border: '1px solid darkgrey',
  borderRadius: 32,
  color: 'black',
  cursor: 'pointer',
  display: 'flex',
  flexShrink: 0,
  fontWeight: 500,
  paddingBlock: 4,
  paddingInline: 24,
  fontSize: '.9rem',

  ':has(input:checked)': {
    fontSize: '1rem',
    borderColor: 'var(--color)',
  },

  ':has(input:disabled)': {
    backgroundColor: 'lightgray',
    color: 'gray',
    cursor: 'not-allowed',
    borderColor: 'currentcolor',
  },
});

export const input = css({
  appearance: 'none',

  ':checked:before': {
    content: '"✔"', // TODO: choose a FA icon instead
    fontSize: 20,
    marginInlineEnd: 8,
    color: 'var(--color)',
  },

  ':disabled:checked:before': {
    color: 'gray',
  },
});

export const chips = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  gap: 8,
});
