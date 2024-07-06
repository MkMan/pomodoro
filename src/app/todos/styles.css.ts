import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

const wrapper = style({
  borderRadius: 8,
  boxShadow: variables.shadow.highElevation,
  padding: 16,
});

const header = style({
  alignItems: 'center',
  borderBottom: '2px solid currentcolor',
  display: 'flex',

  marginBlockEnd: 32,
  paddingBlockEnd: 8,
});

const heading = style({
  marginInlineEnd: 'auto',
});

const list = style({
  padding: 0,
});

const listItem = style({
  borderRadius: 8,
  cursor: 'grab',
  marginBlock: 16,
  padding: 8,
  selectors: {
    '&:hover': {
      boxShadow: variables.shadow.mediumElevation,
      transform: 'translate(-2px, -2px)',
      transition: 'box-shadow 300ms, transform 100ms',
    },
  },
  transitionDuration: '100ms',
});

const createTodoCta = style({
  height: 'min-content',
  width: '100%',
});

const newTodo = style({
  paddingBlockStart: 40,
});

const draggedItem = style([
  listItem,
  {
    alignItems: 'center',
    backgroundColor: variables.color.background,
    cursor: 'grabbing',
    display: 'flex',
    fontSize: '1.1rem', // hardcoded to match label styling
    fontWeight: 600, // hardcoded to match label styling
    height: 56, // hardcoded to match list item height
  },
]);

export {
  createTodoCta,
  draggedItem,
  header,
  heading,
  list,
  listItem,
  newTodo,
  wrapper,
};
