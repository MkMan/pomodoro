import { Component, For, splitProps } from 'solid-js';

import { Icon } from '../icon/icon';
import * as styles from './styles';
import { SelectProps } from './types';

export const Select: Component<SelectProps> = (_props) => {
  const [props, selectProps] = splitProps(_props, [
    'onChange',
    'value',
    'options',
  ]);

  return (
    <div class={styles.wrapper}>
      <select
        class={styles.select}
        value={props.value}
        onChange={(event) => props.onChange(event)}
        {...selectProps}
      >
        <For each={props.options}>
          {(option) => (
            <option value={option.value}>
              {option.label}
              {option.value === props.value && ' ✔'}
            </option>
          )}
        </For>
      </select>
      <div class={styles.presentational}>
        {props.options[parseInt(props.value)].label}
        <Icon iconName="chevron-down" size={15} />
      </div>
    </div>
  );
};
