import { style } from '@vanilla-extract/css';

const displayModeHeight = 40; // TODO: hardcoded to match Input height. Need to fix Input height

const wrapper = style({
  alignItems: 'center',
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
});

const dragHandle = style({
  cursor: 'grab',
  display: 'flex',
  marginBlockStart: '4px', // Optical alignment with the checkbox
  padding: '4px',
});

const description = style({
  flex: 1,
  fontFamily: '"Playpen Sans Variable", cursive',
  fontSize: '1.1rem',
  fontWeight: 'normal',
  paddingInline: '8px', // MAGIC NUMBER: to prevent cursive font getting clipped by overflow: hidden
  selectors: {
    '&.isCompleted': {
      textDecoration: 'line-through 2px currentcolor',
    },
  },
});

const descriptionTextfield = style({
  flex: 1,
  height: displayModeHeight,
});

const editWrapper = style([wrapper, { width: '100%' }]);

export { description, descriptionTextfield, dragHandle, editWrapper, wrapper };
