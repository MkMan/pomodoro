import { css } from '@emotion/css';

export const wrapper = css({
  position: 'relative',
  width: 'max-content',
  borderRadius: 4,

  ':has(select:focus)': {
    outline: '2px solid black',
    outlineOffset: 4,
  },
});

export const select = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,

  ':hover': {
    cursor: 'pointer',

    '+ *': {
      // styles for presentational
      color: 'hsl(0deg 0% 00%)',
    },
  },

  ':disabled': {
    cursor: 'not-allowed',

    '+ *': {
      // styles for presentational
      color: 'hsl(0deg 0% 30%)',
    },
  },
});

export const presentational = css({
  color: 'hsl(0deg 0% 20%)',
  padding: '12px 16px',
  fontSize: '1rem',
  fontWeight: 500,
  backgroundColor: 'hsl(0deg 0% 90%)',
  borderRadius: 4,
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  transition: 'color 200ms ease',
});
