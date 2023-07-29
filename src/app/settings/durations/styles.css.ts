import { style } from '@vanilla-extract/css';

const input = style({
  selectors: {
    '&:not(:last-of-type)': {
      marginBlockEnd: 16,
    },
  },
});

export { input };
