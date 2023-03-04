import { Component, splitProps } from 'solid-js';

import * as styles from './styles';
import { UnstyledButtonProps } from './types';

export const UnstyledButton: Component<UnstyledButtonProps> = (_props) => {
  const [props, buttonProps] = splitProps(_props, ['children']);

  return (
    <button class={styles.unstyledButton} {...buttonProps}>
      {props.children}
    </button>
  );
};
