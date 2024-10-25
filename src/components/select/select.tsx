import { cx } from '$app-utils';
import { FiChevronDown } from 'solid-icons/fi';
import { type Component, For, createMemo, splitProps } from 'solid-js';

import type { SelectProps } from './types';

import * as styles from './styles.css';

export const Select: Component<SelectProps> = (_props) => {
  const [props, selectProps] = splitProps(_props, [
    'class',
    'onChange',
    'value',
    'options',
  ]);

  const currentLabel = createMemo(() => {
    const currentOption = props.options.find(
      ({ value }) => value === props.value,
    );

    if (!currentOption) {
      console.error(
        `Error in Select: value ${props.value} not found in ${JSON.stringify(
          props.options,
        )}`,
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
        <FiChevronDown color="currentcolor" size={20} />
      </div>
    </div>
  );
};
