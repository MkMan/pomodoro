import { Component, splitProps } from 'solid-js';

import { cx } from '$app-utils';

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
    'class',
    'variant',
    'children',
    'size',
  ]);

  return (
    <button
      class={cx(
        buttonVariantStylingMap[props.variant ?? 'primary'],
        props.size === 'small' && 'isSmall',
        props.class
      )}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};
