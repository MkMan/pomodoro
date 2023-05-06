import { css } from '@emotion/css';

const wrapper = css({
  padding: 16,
  borderRadius: 8,
  boxShadow: 'var(--boxShadow-card)',
});

const header = css({
  display: 'flex',
  alignItems: 'center',
  paddingBlockEnd: 16,
});

const heading = css({
  marginInlineEnd: 'auto',
});

const listItem = css({
  paddingBlock: 8,
  borderRadius: 8,
});

const separator = css({
  height: 2,
  backgroundColor: 'var(--color-background-inverted)',
  marginInlineStart: 8,
  marginInlineEnd: 12,
  marginBlock: 4,
});

const newTodo = css({
  paddingBlockStart: 40,
});

export { header, heading, listItem, newTodo, separator, wrapper };
