import { cx } from '$app-utils';
import { Component, splitProps } from 'solid-js';

import * as styles from './styles.css';
import { ButtonProps } from './types';

const buttonVariantStylingMap: Record<
  NonNullable<ButtonProps['variant']>,
  string
> = {
  danger: styles.danger,
  primary: styles.primary,
  secondary: styles.secondary,
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
        props.class,
      )}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};
