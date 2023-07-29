import { style } from '@vanilla-extract/css';

const iconButton = style({
  marginInlineEnd: 16,

  ':last-of-type': {
    marginInlineEnd: 'initial',
  },
});

export { iconButton };
