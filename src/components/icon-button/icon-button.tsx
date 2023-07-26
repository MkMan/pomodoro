import { Component, splitProps } from 'solid-js';

import { cx } from '$app-utils';

import { UnstyledButtonProps } from '../unstyled-button/types';
import { UnstyledButton } from '../unstyled-button/unstyled-button';
import { hover } from './styles.css';

export const IconButton: Component<UnstyledButtonProps> = (props) => {
  const [{ class: className }, delegated] = splitProps(props, ['class']);

  return <UnstyledButton class={cx(hover, className)} {...delegated} />;
};
