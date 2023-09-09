import { style } from '@vanilla-extract/css';

const wrapper = style({
  padding: 16,
  borderRadius: 8,
  boxShadow: 'var(--boxShadow-card)',
});

const header = style({
  display: 'flex',
  alignItems: 'center',
  paddingBlockEnd: 8,

  borderBottom: '2px solid currentcolor',
  marginBlockEnd: 32,
});

const heading = style({
  marginInlineEnd: 'auto',
});

const list = style({
  padding: 0,
});

const listItem = style({
  padding: 8,
  marginBlock: 16,
  borderRadius: 8,
  boxShadow: 'var(--boxShadow-card)',
  cursor: 'grab',
});

const createTodoCta = style({
  width: '100%',
  height: 'min-content',
});

const newTodo = style({
  paddingBlockStart: 40,
});

const draggedItem = style([
  listItem,
  {
    height: 56, // hardcoded to match list item height
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem', // hardcoded to match label styling
    fontWeight: 600, // hardcoded to match label styling
    backgroundColor: 'var(--color-background)',
    cursor: 'grabbing',
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
