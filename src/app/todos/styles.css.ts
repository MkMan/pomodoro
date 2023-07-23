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
});

const createTodoCta = style({
  width: '100%',
  height: 'min-content',
});

const newTodo = style({
  paddingBlockStart: 40,
});

export { createTodoCta, header, heading, list, listItem, newTodo, wrapper };
