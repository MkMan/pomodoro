import { Component, createMemo, splitProps } from 'solid-js';

import { cx } from '$app-utils';

import * as styles from './styles';
import { InputProps } from './types';

const Input: Component<InputProps> = (_props) => {
  const [props, inputProps] = splitProps(_props, [
    'class',
    'error',
    'isRequired',
    'label',
    'onInput',
    'value',
  ]);

  const wrapperClasses = createMemo(() => cx(styles.wrapper, props.class));
  const labelClasses = createMemo(() =>
    cx(props.isRequired && styles.labelAsterisk)
  );

  return (
    <div class={wrapperClasses()}>
      <label class={labelClasses()} for={props.label}>
        {props.label}
      </label>
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
