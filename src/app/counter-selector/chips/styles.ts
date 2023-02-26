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
    marginInlineEnd: 8,
    color: 'var(--color)',
  },

  ':disabled:checked:before': {
    color: 'gray',
  },
});

export const chips = css({
  display: 'flex',
  alignItems: 'center',
  overflowX: 'auto',
  border: 'none',
  position: 'relative',
  gap: 16,

  // to override fieldset default value
  minWidth: 0,
  padding: '0 16px 16px 16px',

  maxWidth: '100%',

  scrollbarWidth: 'thin',
  scrollbarColor: 'gray blue',

  '&::-webkit-scrollbar': {
    borderRadius: 8,
    height: 8,
    backgroundColor: '#F5F5F5',
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#555',
    height: 8,
    boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
  },

  '&::-webkit-scrollbar-button': {
    display: 'none',
  },
});
