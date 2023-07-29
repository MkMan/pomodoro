import { FiChevronDown } from 'solid-icons/fi';
import { Component, createMemo, For, splitProps } from 'solid-js';

import { cx } from '$app-utils';

import * as styles from './styles.css';
import { SelectProps } from './types';

export const Select: Component<SelectProps> = (_props) => {
  const [props, selectProps] = splitProps(_props, [
    'class',
    'onChange',
    'value',
    'options',
  ]);

  const currentLabel = createMemo(() => {
    const currentOption = props.options.find(
      ({ value }) => value === props.value
    );

    if (!currentOption) {
      console.error(
        `Error in Select: value ${props.value} not found in ${JSON.stringify(
          props.options
        )}`
      );
    }

    return currentOption?.label ?? '';
  });

  return (
    <div class={cx(styles.wrapper, props.class)}>
      <select
        class={styles.select}
        onChange={(event) => props.onChange(event)}
        {...selectProps}
      >
        <For each={props.options}>
          {(option) => (
            <option
              selected={option.value === props.value}
              value={option.value}
            >
              {option.label}
            </option>
          )}
        </For>
      </select>
      <div class={styles.presentational}>
        {currentLabel()}
        <FiChevronDown size={20} color="currentcolor" />
      </div>
    </div>
  );
};
