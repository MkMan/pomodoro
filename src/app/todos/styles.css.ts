import { style } from '@vanilla-extract/css';

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
  marginBlock: 16,
  padding: 8,
});

const createTodoCta = style({
  height: 'min-content',
  width: '100%',
});

const newTodo = style({
  paddingBlockStart: 40,
});

const separator = style({
  borderBlockEnd: '1px solid currentcolor',
  marginInline: 'auto',
  width: '55%',
});

export { createTodoCta, header, heading, list, listItem, newTodo, separator };
