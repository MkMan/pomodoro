import { cx } from '$app-utils';
import { type Component, splitProps } from 'solid-js';

import type { ButtonProps } from './types';

import * as styles from './styles.css';

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
