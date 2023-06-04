import { css } from '@emotion/css';

const wrapper = css({
  padding: 16,
  borderRadius: 8,
  boxShadow: 'var(--boxShadow-card)',
});

const header = css({
  display: 'flex',
  alignItems: 'center',
  paddingBlockEnd: 8,

  borderBottom: '2px solid currentcolor',
  marginBlockEnd: 32,
});

const heading = css({
  marginInlineEnd: 'auto',
});

const listItem = css({
  padding: 8,
  marginBlock: 16,
  borderRadius: 8,
  boxShadow: 'var(--boxShadow-card)',
});

const createTodoCta = css({
  width: '100%',
  height: 'min-content',
});

const newTodo = css({
  paddingBlockStart: 40,
});

export { createTodoCta, header, heading, listItem, newTodo, wrapper };
