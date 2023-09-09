import { style } from '@vanilla-extract/css';

import { appearanceBlock, appearanceInline } from './types';

export const wrapper = style({
  display: 'flex',
  fontSize: '1rem',
  fontWeight: 500,
  gap: 4,

  selectors: {
    [`&.${appearanceBlock}`]: {
      flexDirection: 'column',
    },

    [`&.${appearanceInline}`]: {
      alignItems: 'baseline',
    },
  },
});

export const labelAsterisk = style({
  ':after': {
    color: 'red',
    content: '" *"',
    fontSize: '1.1rem',
  },
});

export const input = style({
  ':disabled': {
    color: 'darkgray',
    cursor: 'not-allowed',
  },
  border: '1px solid lightgrey',
  borderRadius: 4,
  height: 40,
  padding: 8,
  paddingInlineStart: 16,

  width: '100%',
});

export const asterisk = style({
  color: 'red',
  fontSize: '1.1rem',
});

export const error = style({
  color: 'red',
});
