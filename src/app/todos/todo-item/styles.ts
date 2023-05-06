import { css } from '@emotion/css';

const isCompletedClassName = 'isCompleted';

const wrapper = css({
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const description = css({
  marginInlineEnd: 'auto',

  '&.isCompleted': {
    textDecoration: 'line-through solid 2px currentcolor',
  },
});

const checkbox = css({
  height: 15,
  width: 15,
});

export { checkbox, description, isCompletedClassName, wrapper };
