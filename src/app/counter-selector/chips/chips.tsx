import { Component, mergeProps } from 'solid-js';

import * as styles from './styles';
import { ChipProps, ChipsProps } from './types';

export const Chip: Component<ChipProps> = (_props) => {
  const props = mergeProps({ isEnabled: true }, _props);

  return (
    <label class={styles.label} style={{ '--color': props.colour }}>
      <input
        checked={props.isChecked}
        class={styles.input}
        disabled={!props.isEnabled}
        name={props.name}
        onChange={({ currentTarget: { value } }) => {
          props.onChange(parseInt(value));
        }}
        type="radio"
        value={props.value}
      />
      {props.children}
    </label>
  );
};

export const Chips: Component<ChipsProps> = (props) => {
  return (
    <fieldset class={styles.chips} data-testid="counters-group">
      {props.children({ name: 'counter-selector', onChange: props.onChange })}
    </fieldset>
  );
};