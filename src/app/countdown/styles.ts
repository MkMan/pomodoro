import { css, CSSObject } from '@emotion/css';

export const remainingTime = css({
  textAlign: 'center',
  paddingBlockEnd: 48,
  fontWeight: 500,
  fontSize: '7rem',
  fontFamily: 'sans-serif',
});

export const buttonsContainer = css({
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
});

const buttonBase: CSSObject = {
  padding: '16px 32px',
  border: 'none',
  cursor: 'pointer',
  color: '#fff',
  borderRadius: 4,
  fontWeight: 700,
  fontSize: '1.4rem',
  transition: 'background-color 200ms ease',

  ':focus': {
    outline: '2px solid #339af0',
    outlineOffset: 2,
  },

  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: 'lightgrey',
    color: 'darkgray',
  },
};

export const startButton = css({
  ...buttonBase,
  backgroundColor: 'hsl(131, 51%, 29%)',

  ':not(:disabled):hover': {
    backgroundColor: 'hsl(131, 51%, 25%)',
  },
});

export const pauseButton = css({
  ...buttonBase,
  backgroundColor: 'hsl(42, 95%, 37%)',

  ':not(:disabled):hover': {
    backgroundColor: 'hsl(42, 95%, 33%)',
  },
});

export const stopButton = css({
  ...buttonBase,
  backgroundColor: 'hsl(0, 94%, 38%)',

  ':not(:disabled):hover': {
    backgroundColor: 'hsl(0, 94%, 34%)',
  },
});
