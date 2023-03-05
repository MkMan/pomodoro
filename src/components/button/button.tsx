import { Component, splitProps } from 'solid-js';

import * as styles from './styles';
import { ButtonProps } from './types';

const buttonVariantStylingMap: Record<
  NonNullable<ButtonProps['variant']>,
  string
> = {
  primary: styles.primary,
  secondary: styles.secondary,
  danger: styles.danger,
};

export const Button: Component<ButtonProps> = (_props) => {
  const [props, buttonProps] = splitProps(_props, [
    'variant',
    'children',
    'size',
  ]);

  return (
    <button
      class={buttonVariantStylingMap[props.variant ?? 'primary']}
      classList={{ isSmall: props.size === 'small' }}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};
