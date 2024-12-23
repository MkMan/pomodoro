import { cx } from '$app-utils';
import { type Component, Show, createMemo, splitProps } from 'solid-js';

import type { InputProps } from './types';

import * as styles from './styles.css';

const Input: Component<InputProps> = (_props) => {
  const [props, inputProps] = splitProps(_props, [
    'appearance',
    'class',
    'error',
    'isRequired',
    'label',
    'onInput',
    'value',
  ]);

  const appearance: () => InputProps['appearance'] = createMemo(
    () => props.appearance ?? 'block',
  );

  return (
    <div class={cx(styles.wrapper, props.class, appearance())}>
      <Show when={props.label}>
        <label
          class={cx(props.isRequired && styles.labelAsterisk)}
          for={props.label}
        >
          {props.label}
        </label>
      </Show>
      <input
        class={styles.input}
        {...inputProps}
        aria-required={props.isRequired}
        id={props.label}
        onInput={(event) => props.onInput(event)}
        value={props.value}
      />
      {props.error && <span class={styles.error}>{props.error}</span>}
    </div>
  );
};

export { Input };
