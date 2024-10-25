import { cx } from '$app-utils';
import { type Component, splitProps } from 'solid-js';

import type { UnstyledButtonProps } from './types';

import * as styles from './styles.css';

export const UnstyledButton: Component<UnstyledButtonProps> = (_props) => {
  const [props, buttonProps] = splitProps(_props, ['children', 'class']);

  return (
    <button class={cx(styles.unstyledButton, props.class)} {...buttonProps}>
      {props.children}
    </button>
  );
};
