import { css } from '@emotion/css';
import { Component, splitProps } from 'solid-js';

import { cx } from '$app-utils';

import { UnstyledButtonProps } from '../unstyled-button/types';
import { UnstyledButton } from '../unstyled-button/unstyled-button';

const hover = css({
  ':not(:disabled):hover': {
    boxShadow: 'var(--boxShadow-input-hover)',
  },
});

export const IconButton: Component<UnstyledButtonProps> = (props) => {
  const [{ class: className }, delegated] = splitProps(props, ['class']);

  return <UnstyledButton class={cx(hover, className)} {...delegated} />;
};
