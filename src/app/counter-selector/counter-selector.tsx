import { FiEdit3, FiX } from 'solid-icons/fi';
import { Component, createMemo, createSignal } from 'solid-js';

import { IconButton, Select } from '$app-components';
import {
  counterState,
  currentCounterIndex,
  getCurrentCounter,
  setCurrentCounterIndex,
} from '$app-state';
import { cx, withDefaultProps } from '$app-utils';

import { counterOrder } from '../../constants';
import { currentCounterLabelMap } from './constants';
import * as styles from './styles';
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
    <div class={cx(props.className, styles.wrapper)}>
      {isInEditMode() ? (
        <>
          <label class={styles.label} for={selectId}>
            Counter
          </label>
          <Select
            id={selectId}
            disabled={counterState() !== 'stopped'}
            value={currentCounterIndex().toString()}
            onChange={({ currentTarget }) => {
              setCurrentCounterIndex(parseInt(currentTarget.value));
            }}
            options={selectOptions()}
          />
        </>
      ) : (
        <span class={styles.label}>
          {currentCounterLabelMap[getCurrentCounter()]}
        </span>
      )}
      <IconButton
        aria-label={
          isInEditMode() ? 'close counter editing' : 'edit counter type'
        }
        onClick={toggleMode}
      >
        {isInEditMode() ? <FiX size={30} /> : <FiEdit3 size={30} />}
      </IconButton>
    </div>
  );
};

const CounterSelectorWithDefaultProps = withDefaultProps(CounterSelector);

export { CounterSelectorWithDefaultProps as CounterSelector };
