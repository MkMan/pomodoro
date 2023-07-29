import { Component, splitProps } from 'solid-js';

import { cx } from '$app-utils';

import * as styles from './styles.css';
import { UnstyledButtonProps } from './types';

export const UnstyledButton: Component<UnstyledButtonProps> = (_props) => {
  const [props, buttonProps] = splitProps(_props, ['children', 'class']);

  return (
    <button class={cx(styles.unstyledButton, props.class)} {...buttonProps}>
      {props.children}
    </button>
  );
};
