import { css } from '@emotion/css';

const isCompletedClassName = 'isCompleted';
const displayModeHeight = 40; // TODO: hardcoded to match Input height. Need to fix Input height

const wrapper = css({
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const description = css({
  height: displayModeHeight,
  lineHeight: `${displayModeHeight}px`,
  marginInlineEnd: 'auto',

  '&.isCompleted': {
    textDecoration: 'line-through solid 2px currentcolor',
  },
});

const checkbox = css({
  height: 15,
  width: 15,
});

const descriptionTextfield = css({
  height: displayModeHeight,
  flex: 1,
});

export {
  checkbox,
  description,
  descriptionTextfield,
  isCompletedClassName,
  wrapper,
};
