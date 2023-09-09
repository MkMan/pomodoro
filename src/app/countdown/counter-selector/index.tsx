import { IconButton, Select } from '$app-components';
import {
  counterState,
  currentCounterIndex,
  getCurrentCounter,
  setCurrentCounterIndex,
} from '$app-state';
import { cx } from '$app-utils';
import { FiEdit3, FiX } from 'solid-icons/fi';
import { Component, createMemo, createSignal } from 'solid-js';

import { counterOrder } from '../../../constants';
import { currentCounterLabelMap } from './constants';
import * as styles from './styles.css';
import { CounterSelectorProps } from './types';

const selectId = 'counter-select';

const CounterSelector: Component<CounterSelectorProps> = (props) => {
  const [isInEditMode, setIsInEditMode] = createSignal(false);

  const toggleMode = () => setIsInEditMode((isInEditMode) => !isInEditMode);
  const selectOptions = createMemo(() =>
    counterOrder.map((counter, index) => ({
      label: `${index + 1}. ${currentCounterLabelMap[counter]}`,
      value: index.toString(),
    }))
  );

  if (
    currentCounterIndex() < 0 ||
    currentCounterIndex() + 1 > counterOrder.length
  ) {
    throw new Error('Invalid currentCounterIndex value');
  }

  return (
    <div class={cx(props.class, styles.wrapper)}>
      {isInEditMode() ? (
        <>
          <label class={styles.label} for={selectId}>
            Counter
          </label>
          <Select
            disabled={counterState() !== 'stopped'}
            id={selectId}
            onChange={({ currentTarget }) => {
              setCurrentCounterIndex(parseInt(currentTarget.value));
            }}
            options={selectOptions()}
            value={currentCounterIndex().toString()}
          />
          <IconButton aria-label="close counter editing" onClick={toggleMode}>
            <FiX size={30} />
          </IconButton>
        </>
      ) : (
        <>
          <span class={styles.label}>
            {currentCounterLabelMap[getCurrentCounter()]}
          </span>
          <IconButton aria-label="edit counter type" onClick={toggleMode}>
            <FiEdit3 size={30} />
          </IconButton>
        </>
      )}
    </div>
  );
};

export { CounterSelector };
