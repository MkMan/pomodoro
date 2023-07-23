import { style } from '@vanilla-extract/css';

import { appearanceBlock, appearanceInline } from './types';

export const wrapper = style({
  display: 'flex',
  gap: 4,
  fontSize: '1rem',
  fontWeight: 500,

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
    content: '" *"',
    color: 'red',
    fontSize: '1.1rem',
  },
});

export const input = style({
  height: 40,
  borderRadius: 4,
  padding: 8,
  paddingInlineStart: 16,
  border: '1px solid lightgrey',
  width: '100%',

  ':disabled': {
    cursor: 'not-allowed',
    color: 'darkgray',
  },
});

export const asterisk = style({
  color: 'red',
  fontSize: '1.1rem',
});

export const error = style({
  color: 'red',
});
