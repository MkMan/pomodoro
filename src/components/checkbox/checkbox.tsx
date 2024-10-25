import type { JSX } from 'solid-js';

import { cx } from '$app-utils';
import { type Component, splitProps } from 'solid-js';

import * as styles from './styles.css';

type CheckboxProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Checkbox: Component<CheckboxProps> = (_props) => {
  const [{ class: className }, props] = splitProps(_props, ['class']);

  return (
    <input class={cx(styles.checkbox, className)} type="checkbox" {...props} />
  );
};

export { Checkbox };
